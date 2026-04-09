const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// 配置文件路径
const CONFIG_PATH = path.join(__dirname, 'wechat_config.json');

// 默认配置
const DEFAULT_CONFIG = {
    pushMethod: 'clipboard', // clipboard, file, server酱
    scKey: '', // server酱Key（可选）
    pushTime: '08:00', // 默认推送时间
    enabled: true
};

// 读取配置
function loadConfig() {
    if (fs.existsSync(CONFIG_PATH)) {
        return JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'));
    }
    saveConfig(DEFAULT_CONFIG);
    return DEFAULT_CONFIG;
}

// 保存配置
function saveConfig(config) {
    fs.writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2), 'utf8');
}

// 生成微信格式的消息
function generateWechatMessage(taskContent) {
    const today = new Date().toISOString().split('T')[0];
    const lines = taskContent.split('\n');
    
    // 提取关键信息
    let jinju = [];
    let redian = '';
    let renwu = '';
    let cuoshi = '';
    
    let currentSection = '';
    
    for (const line of lines) {
        if (line.includes('金句 1')) currentSection = 'jinju1';
        else if (line.includes('金句 2')) currentSection = 'jinju2';
        else if (line.includes('今日热点事件')) currentSection = 'redian';
        else if (line.includes('今日榜样人物')) currentSection = 'renwu';
        else if (line.includes('今日政府措施')) currentSection = 'cuoshi';
        
        if (line.startsWith('> **') && currentSection.startsWith('jinju')) {
            jinju.push(line.replace(/[>*]/g, '').trim());
        }
        if (currentSection === 'redian' && line.startsWith('###') && !redian) {
            redian = line.replace(/###/g, '').trim();
        }
        if (currentSection === 'renwu' && line.startsWith('###') && !renwu) {
            renwu = line.replace(/###/g, '').trim();
        }
        if (currentSection === 'cuoshi' && line.startsWith('###') && !cuoshi) {
            cuoshi = line.replace(/###/g, '').trim();
        }
    }
    
    // 生成微信消息
    let message = `📚 湖南省考面试每日学习\n`;
    message += `━━━━━━━━━━━━━━\n`;
    message += `📅 ${today}\n\n`;
    
    message += `【今日金句】\n`;
    jinju.forEach((j, i) => {
        message += `${i + 1}. ${j}\n`;
    });
    message += `\n`;
    
    message += `【热点事件】\n`;
    message += `${redian}\n\n`;
    
    message += `【榜样人物】\n`;
    message += `${renwu}\n\n`;
    
    message += `【政府措施】\n`;
    message += `${cuoshi}\n\n`;
    
    message += `━━━━━━━━━━━━━━\n`;
    message += `💡 详细内容请查看桌面文件夹\n`;
    message += `💪 坚持就是胜利！`;
    
    return message;
}

// 复制到剪贴板（Windows）
function copyToClipboard(text) {
    return new Promise((resolve, reject) => {
        // 使用PowerShell将文本复制到剪贴板
        // 先将文本写入临时文件，再读取到剪贴板
        const tempFile = path.join(__dirname, 'temp_clipboard.txt');
        fs.writeFileSync(tempFile, text, 'utf8');
        
        const command = `powershell -command "Get-Content -Path '${tempFile}' -Raw | Set-Clipboard"`;
        
        exec(command, (error, stdout, stderr) => {
            // 清理临时文件
            try {
                fs.unlinkSync(tempFile);
            } catch (e) {}
            
            if (error) {
                reject(error);
            } else {
                resolve();
            }
        });
    });
}

// 保存为文件（方便手动发送）
function saveToFile(message) {
    const today = new Date().toISOString().split('T')[0];
    const filePath = path.join(__dirname, 'memory', `${today}_wechat.txt`);
    fs.writeFileSync(filePath, message, 'utf8');
    return filePath;
}

// 主推送函数
async function pushToWechat(taskContent) {
    const config = loadConfig();
    
    if (!config.enabled) {
        console.log('微信推送已禁用');
        return;
    }
    
    const message = generateWechatMessage(taskContent);
    
    try {
        // 方法1：复制到剪贴板
        await copyToClipboard(message);
        console.log('✅ 消息已复制到剪贴板！');
        console.log('📱 请打开微信，粘贴到文件传输助手或聊天窗口');
        
        // 方法2：同时保存到文件
        const filePath = saveToFile(message);
        console.log(`📝 消息也已保存到：${filePath}`);
        
        return {
            success: true,
            clipboard: true,
            filePath: filePath,
            message: message
        };
    } catch (error) {
        console.error('推送失败：', error);
        return {
            success: false,
            error: error.message
        };
    }
}

// 命令行交互
function main() {
    const args = process.argv.slice(2);
    const command = args[0];
    
    switch (command) {
        case 'push':
            // 读取今日任务并推送
            const today = new Date().toISOString().split('T')[0];
            const taskFile = path.join(__dirname, 'memory', `${today}_task.md`);
            
            if (fs.existsSync(taskFile)) {
                const content = fs.readFileSync(taskFile, 'utf8');
                pushToWechat(content);
            } else {
                console.log('今日任务尚未生成，请先运行：node daily_system.js today');
            }
            break;
            
        case 'config':
            // 配置推送设置
            console.log(`
📱 微信推送配置

当前配置：
  推送方式：剪贴板（复制后手动粘贴到微信）
  推送时间：08:00
  
使用方法：
  1. 运行 node daily_system.js today 生成今日任务
  2. 运行 node wechat_push.js push 复制到剪贴板
  3. 打开微信，粘贴到文件传输助手
            `);
            break;
            
        default:
            console.log(`
📱 微信推送模块

使用方法：
  node wechat_push.js push    - 推送今日任务到微信（复制到剪贴板）
  node wechat_push.js config  - 查看配置说明

提示：
  推送会将消息复制到剪贴板，你只需打开微信粘贴即可！
            `);
    }
}

// 导出函数
module.exports = {
    pushToWechat,
    generateWechatMessage,
    loadConfig,
    saveConfig
};

// 如果是直接运行
if (require.main === module) {
    main();
}
