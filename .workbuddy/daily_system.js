const fs = require('fs');
const path = require('path');

// 数据库路径
const DB_PATH = path.join(__dirname, 'interview_db.json');
const PROGRESS_PATH = path.join(__dirname, 'progress.json');
const MEMORY_DIR = path.join(__dirname, 'memory');

// 确保目录存在
if (!fs.existsSync(MEMORY_DIR)) {
    fs.mkdirSync(MEMORY_DIR, { recursive: true });
}

// 读取数据库
function loadDatabase() {
    const data = fs.readFileSync(DB_PATH, 'utf8');
    return JSON.parse(data);
}

// 读取或初始化学习进度
function loadProgress() {
    if (fs.existsSync(PROGRESS_PATH)) {
        return JSON.parse(fs.readFileSync(PROGRESS_PATH, 'utf8'));
    }
    return {
        startDate: new Date().toISOString().split('T')[0],
        currentDay: 1,
        completed: {
            jinju: [],
            redian: [],
            renwu: [],
            cuoshi: []
        },
        quizResults: [],
        lastPushDate: null
    };
}

// 保存进度
function saveProgress(progress) {
    fs.writeFileSync(PROGRESS_PATH, JSON.stringify(progress, null, 2), 'utf8');
}

// 获取今日内容（按顺序，每天不同）
function getTodayContent(db, progress) {
    const categories = ['jinju', 'redian', 'renwu', 'cuoshi'];
    const result = {};
    
    categories.forEach(cat => {
        const items = db.categories[cat].items;
        const completed = progress.completed[cat];
        
        // 找到未学习的内容
        const available = items.filter(item => !completed.includes(item.id));
        
        if (available.length > 0) {
            if (cat === 'jinju') {
                // 金句选2条
                result[cat] = available.slice(0, 2);
            } else {
                // 其他选1条
                result[cat] = [available[0]];
            }
        } else {
            // 全部学完了，重新开始
            result[cat] = cat === 'jinju' ? items.slice(0, 2) : [items[0]];
        }
    });
    
    return result;
}

// 生成今日学习任务
function generateDailyTask() {
    const db = loadDatabase();
    const progress = loadProgress();
    const today = new Date().toISOString().split('T')[0];
    
    // 如果今天已经推送过，直接返回今日文件
    const todayFile = path.join(MEMORY_DIR, `${today}_task.md`);
    if (fs.existsSync(todayFile) && progress.lastPushDate === today) {
        return fs.readFileSync(todayFile, 'utf8');
    }
    
    const content = getTodayContent(db, progress);
    
    // 生成任务文档
    let output = `# 📚 湖南省考面试每日学习任务\n\n`;
    output += `**日期：** ${today}  
`;
    output += `**学习阶段：** 第 ${progress.currentDay} 天  
`;
    output += `**任务：** 背诵以下内容，完成后点击"标记完成"\n\n`;
    output += `---\n\n`;
    
    // 金句部分
    output += `## 一、今日必背金句（2句）\n\n`;
    content.jinju.forEach((item, index) => {
        output += `### 金句 ${index + 1}【${item.category}】${item.level}\n\n`;
        output += `> **${item.content}**\n\n`;
        output += `- **出处：** ${item.source}\n`;
        output += `- **用法：** ${item.usage}\n`;
        output += `- **示例：** ${item.example}\n\n`;
        output += `💡 **记忆要点：** 重点记前半句"${item.content.split('，')[0]}..."\n\n`;
    });
    
    // 热点部分
    output += `---\n\n`;
    output += `## 二、今日热点事件（1个）\n\n`;
    const redian = content.redian[0];
    output += `### ${redian.title}\n\n`;
    output += `- **时间：** ${redian.time}\n`;
    output += `- **类别：** ${redian.category}\n\n`;
    output += `**事件概述：**\n${redian.content}\n\n`;
    output += `**核心要点：**\n`;
    redian.key_points.forEach(point => {
        output += `- ${point}\n`;
    });
    output += `\n**面试应用：** ${redian.application}\n\n`;
    output += `**启示：** ${redian.lesson}\n\n`;
    
    // 人物部分
    output += `---\n\n`;
    output += `## 三、今日榜样人物（1位）\n\n`;
    const renwu = content.renwu[0];
    output += `### ${renwu.name} —— ${renwu.title}\n\n`;
    output += `- **类别：** ${renwu.category}\n`;
    output += `- **籍贯：** ${renwu.origin}\n`;
    output += `- **荣誉：** ${renwu.honor.join('、')}\n\n`;
    output += `**事迹简述：**\n${renwu.story}\n\n`;
    output += `**经典语录：** "${renwu.quote}"\n\n`;
    output += `**适用话题：** ${renwu.application.join('、')}\n\n`;
    output += `**答题示例：**\n${renwu.usage_example}\n\n`;
    
    // 政府措施部分
    output += `---\n\n`;
    output += `## 四、今日政府措施（1个）\n\n`;
    const cuoshi = content.cuoshi[0];
    output += `### ${cuoshi.name}\n\n`;
    output += `- **类别：** ${cuoshi.category}\n`;
    output += `- **来源：** ${cuoshi.origin}\n`;
    output += `- **时间：** ${cuoshi.time}\n\n`;
    output += `**内容：** ${cuoshi.content}\n\n`;
    output += `**意义：** ${cuoshi.significance}\n\n`;
    output += `**应用场景：** ${cuoshi.application}\n\n`;
    output += `**答题示例：**\n${cuoshi.example}\n\n`;
    
    // 底部
    output += `---\n\n`;
    output += `## ✅ 今日学习任务清单\n\n`;
    output += `- [ ] 背诵金句2句（能完整复述）\n`;
    output += `- [ ] 复述热点事件（能说出时间、内容、启示）\n`;
    output += `- [ ] 记住人物姓名、事迹、适用话题\n`;
    output += `- [ ] 理解政府措施含义和应用\n\n`;
    output += `---\n\n`;
    output += `💪 **坚持就是胜利！每天进步一点点，面试成功在眼前！**\n`;
    
    // 保存今日任务
    fs.writeFileSync(todayFile, output, 'utf8');
    
    // 更新进度
    progress.lastPushDate = today;
    saveProgress(progress);
    
    return output;
}

// 标记今日完成
function markComplete() {
    const progress = loadProgress();
    const today = new Date().toISOString().split('T')[0];
    const db = loadDatabase();
    const content = getTodayContent(db, progress);
    
    // 将今日内容标记为已完成
    Object.keys(content).forEach(cat => {
        content[cat].forEach(item => {
            if (!progress.completed[cat].includes(item.id)) {
                progress.completed[cat].push(item.id);
            }
        });
    });
    
    progress.currentDay++;
    progress.lastPushDate = today;
    saveProgress(progress);
    
    return `✅ 第 ${progress.currentDay - 1} 天学习任务已完成！已学习：\n` +
           `- 金句：${progress.completed.jinju.length} 句\n` +
           `- 热点：${progress.completed.redian.length} 个\n` +
           `- 人物：${progress.completed.renwu.length} 位\n` +
           `- 措施：${progress.completed.cuoshi.length} 个\n\n` +
           `明天继续加油！💪`;
}

// 生成测验题目
function generateQuiz(count = 5) {
    const db = loadDatabase();
    const progress = loadProgress();
    
    // 从已学习内容中选题
    const questions = [];
    const types = ['jinju', 'renwu', 'cuoshi'];
    
    types.forEach(type => {
        const completed = progress.completed[type];
        if (completed.length > 0) {
            // 随机选择
            const randomId = completed[Math.floor(Math.random() * completed.length)];
            const item = db.categories[type].items.find(i => i.id === randomId);
            if (item) {
                if (type === 'jinju') {
                    questions.push({
                        type: 'jinju',
                        question: `请补全金句："${item.content.substring(0, item.content.indexOf('，') + 1)}______"`,
                        answer: item.content,
                        tip: `【${item.category}】${item.usage}`,
                        id: item.id
                    });
                } else if (type === 'renwu') {
                    questions.push({
                        type: 'renwu',
                        question: `${item.name}的主要事迹是什么？他/她说过的经典语录是什么？`,
                        answer: `${item.story.substring(0, 50)}... 语录："${item.quote}"`,
                        tip: `适用话题：${item.application.join('、')}`,
                        id: item.id
                    });
                } else if (type === 'cuoshi') {
                    questions.push({
                        type: 'cuoshi',
                        question: `"${item.name}"的具体内容是什么？适用于哪些场景？`,
                        answer: `${item.content}。适用：${item.application}`,
                        tip: item.significance,
                        id: item.id
                    });
                }
            }
        }
    });
    
    // 如果已学习内容不够，从所有内容中随机选
    while (questions.length < count) {
        const type = types[Math.floor(Math.random() * types.length)];
        const items = db.categories[type].items;
        const item = items[Math.floor(Math.random() * items.length)];
        
        if (!questions.find(q => q.id === item.id)) {
            if (type === 'jinju') {
                questions.push({
                    type: 'jinju',
                    question: `请补全金句："${item.content.substring(0, item.content.indexOf('，') + 1)}______"`,
                    answer: item.content,
                    tip: `【${item.category}】${item.usage}`,
                    id: item.id
                });
            } else if (type === 'renwu') {
                questions.push({
                    type: 'renwu',
                    question: `${item.name}的主要事迹是什么？`,
                    answer: item.story.substring(0, 80) + '...',
                    tip: `适用话题：${item.application.join('、')}`,
                    id: item.id
                });
            } else if (type === 'cuoshi') {
                questions.push({
                    type: 'cuoshi',
                    question: `"${item.name}"是指什么？`,
                    answer: item.content,
                    tip: item.significance,
                    id: item.id
                });
            }
        }
    }
    
    return questions.slice(0, count);
}

// 生成面试模拟题
function generateInterviewQuestion() {
    const db = loadDatabase();
    const progress = loadProgress();
    
    // 从已学习内容中选取素材
    const usedJinju = progress.completed.jinju.slice(-2);
    const usedRenwu = progress.completed.renwu.slice(-1);
    const usedCuoshi = progress.completed.cuoshi.slice(-1);
    
    const jinju = usedJinju.length > 0 ? 
        db.categories.jinju.items.find(i => i.id === usedJinju[0]) : 
        db.categories.jinju.items[0];
    
    const renwu = usedRenwu.length > 0 ? 
        db.categories.renwu.items.find(i => i.id === usedRenwu[0]) : 
        db.categories.renwu.items[0];
    
    const cuoshi = usedCuoshi.length > 0 ? 
        db.categories.cuoshi.items.find(i => i.id === usedCuoshi[0]) : 
        db.categories.cuoshi.items[0];
    
    const questions = [
        {
            type: '综合分析',
            question: `习近平总书记说："${jinju.content}"请结合实际，谈谈你的理解。`,
            hint: `可用素材：${renwu.name}的事迹（${renwu.category}）`,
            reference: jinju.example
        },
        {
            type: '自我认知',
            question: `你为什么要报考公务员？如果录取后工作与你预期不符，你会怎么办？`,
            hint: `可用素材：${renwu.name}的选择（${renwu.quote}）`,
            reference: "结合个人理想、为民服务初心，引用榜样人物说明选择的价值"
        },
        {
            type: '应急应变',
            question: `你在执法过程中遇到群众不理解、不配合，甚至阻挠执法，你怎么办？`,
            hint: `可用素材：${cuoshi.name}（${cuoshi.content}）`,
            reference: "坚持文明执法、柔性执法，721工作法，执法要有力度更要有温度"
        }
    ];
    
    return questions[Math.floor(Math.random() * questions.length)];
}

// 命令行交互
function main() {
    const args = process.argv.slice(2);
    const command = args[0];
    
    switch (command) {
        case 'today':
        case '今日任务':
            console.log(generateDailyTask());
            break;
            
        case 'complete':
        case '完成':
            console.log(markComplete());
            break;
            
        case 'quiz':
        case '测验':
            const count = parseInt(args[1]) || 5;
            const quiz = generateQuiz(count);
            console.log(`\n📝 面试知识测验（共 ${count} 题）\n`);
            console.log('=' .repeat(50));
            quiz.forEach((q, index) => {
                console.log(`\n【${index + 1}】${q.question}`);
                console.log(`\n💡 提示：${q.tip}`);
                console.log(`\n✅ 参考答案：${q.answer}`);
                console.log('\n' + '-'.repeat(50));
            });
            break;
            
        case 'interview':
        case '模拟题':
            const q = generateInterviewQuestion();
            console.log(`\n🎯 模拟面试题\n`);
            console.log('=' .repeat(50));
            console.log(`\n【题型】${q.type}\n`);
            console.log(`【题目】${q.question}\n`);
            console.log(`💡 素材提示：${q.hint}\n`);
            console.log(`✅ 答题参考：${q.reference}\n`);
            break;
            
        case 'progress':
        case '进度':
            const p = loadProgress();
            const db2 = loadDatabase();
            console.log(`\n📊 学习进度\n`);
            console.log('=' .repeat(50));
            console.log(`开始日期：${p.startDate}`);
            console.log(`学习天数：第 ${p.currentDay} 天`);
            console.log(`\n已完成：`);
            console.log(`  金句：${p.completed.jinju.length} / ${db2.categories.jinju.items.length}`);
            console.log(`  热点：${p.completed.redian.length} / ${db2.categories.redian.items.length}`);
            console.log(`  人物：${p.completed.renwu.length} / ${db2.categories.renwu.items.length}`);
            console.log(`  措施：${p.completed.cuoshi.length} / ${db2.categories.cuoshi.items.length}`);
            console.log('\n' + '=' .repeat(50));
            break;
            
        default:
            console.log(`
📚 湖南省考面试学习系统

使用方法：
  node daily_system.js today      - 查看今日学习任务
  node daily_system.js complete   - 标记今日完成
  node daily_system.js quiz [n]   - 生成测验题（默认5题）
  node daily_system.js interview  - 生成模拟面试题
  node daily_system.js progress   - 查看学习进度

示例：
  node daily_system.js today
  node daily_system.js quiz 3
            `);
    }
}

// 如果是直接运行
if (require.main === module) {
    main();
}

// 导出函数供其他模块使用
module.exports = {
    generateDailyTask,
    markComplete,
    generateQuiz,
    generateInterviewQuestion,
    loadProgress
};
