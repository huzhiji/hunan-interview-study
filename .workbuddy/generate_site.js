const fs = require('fs');
const path = require('path');

// 路径配置
const DB_PATH = path.join(__dirname, 'interview_db.json');
const PROGRESS_PATH = path.join(__dirname, 'progress.json');
const SITE_DIR = path.join(__dirname, 'site');

// 确保目录存在
if (!fs.existsSync(SITE_DIR)) {
    fs.mkdirSync(SITE_DIR, { recursive: true });
}

// 读取数据库
function loadDatabase() {
    const data = fs.readFileSync(DB_PATH, 'utf8');
    return JSON.parse(data);
}

// 读取进度
function loadProgress() {
    if (fs.existsSync(PROGRESS_PATH)) {
        return JSON.parse(fs.readFileSync(PROGRESS_PATH, 'utf8'));
    }
    return {
        startDate: new Date().toISOString().split('T')[0],
        currentDay: 1,
        completed: { jinju: [], redian: [], renwu: [], cuoshi: [] }
    };
}

// 获取今日内容
function getTodayContent(db, progress) {
    const categories = ['jinju', 'redian', 'renwu', 'cuoshi'];
    const result = {};
    
    categories.forEach(cat => {
        const items = db.categories[cat].items;
        const completed = progress.completed[cat];
        const available = items.filter(item => !completed.includes(item.id));
        
        if (available.length > 0) {
            if (cat === 'jinju') {
                result[cat] = available.slice(0, 2);
            } else {
                result[cat] = [available[0]];
            }
        } else {
            result[cat] = cat === 'jinju' ? items.slice(0, 2) : [items[0]];
        }
    });
    
    return result;
}

// 生成HTML页面
function generateHTML(content, progress) {
    const today = new Date().toISOString().split('T')[0];
    const jinju = content.jinju;
    const redian = content.redian[0];
    const renwu = content.renwu[0];
    const cuoshi = content.cuoshi[0];
    
    return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>湖南省考面试每日学习 - ${today}</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }
        .container { max-width: 800px; margin: 0 auto; }
        .header {
            text-align: center;
            color: white;
            margin-bottom: 30px;
            padding: 20px;
        }
        .header h1 { font-size: 28px; margin-bottom: 10px; }
        .header .date { font-size: 16px; opacity: 0.9; }
        .card {
            background: white;
            border-radius: 16px;
            padding: 25px;
            margin-bottom: 20px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        .card-header {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 2px solid #f0f0f0;
        }
        .card-icon { font-size: 28px; margin-right: 12px; }
        .card-title { font-size: 20px; font-weight: bold; color: #333; }
        .jinju-item {
            background: linear-gradient(135deg, #ff6b6b 0%, #ee5a5a 100%);
            color: white;
            padding: 25px;
            border-radius: 12px;
            margin-bottom: 20px;
        }
        .jinju-text { font-size: 20px; font-weight: bold; margin-bottom: 12px; line-height: 1.6; }
        .jinju-meta { font-size: 14px; opacity: 0.9; margin-bottom: 15px; }
        .jinju-section {
            background: rgba(255,255,255,0.15);
            padding: 15px;
            border-radius: 8px;
            margin-top: 15px;
        }
        .jinju-section-title { font-size: 14px; font-weight: bold; margin-bottom: 8px; opacity: 0.95; }
        .jinju-section-content { font-size: 14px; line-height: 1.8; opacity: 0.95; }
        .content-text { font-size: 16px; line-height: 2; color: #444; }
        .section-title {
            font-size: 17px;
            font-weight: bold;
            color: #333;
            margin: 25px 0 15px;
            padding-bottom: 10px;
            border-bottom: 1px solid #eee;
        }
        .quote {
            background: #e3f2fd;
            border-left: 4px solid #2196f3;
            padding: 20px;
            margin: 20px 0;
            border-radius: 0 8px 8px 0;
            font-style: italic;
            color: #1565c0;
            line-height: 1.8;
        }
        .example-box {
            background: #f8f9fa;
            border: 1px solid #e9ecef;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
        }
        .example-box-title { font-size: 14px; color: #666; margin-bottom: 10px; font-weight: bold; }
        .example-box-content { font-size: 15px; line-height: 1.9; color: #333; }
        .tag {
            display: inline-block;
            padding: 5px 14px;
            background: #e9ecef;
            border-radius: 20px;
            font-size: 13px;
            color: #666;
            margin-right: 8px;
            margin-bottom: 8px;
        }
        .tag.important { background: #ff6b6b; color: white; }
        .tag.primary { background: #667eea; color: white; }
        .tips-box {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px;
            border-radius: 10px;
            margin-top: 20px;
        }
        .tips-box-title { font-weight: bold; margin-bottom: 10px; }
        .tips-box-content { font-size: 14px; line-height: 1.9; opacity: 0.95; }
        .checklist { list-style: none; }
        .checklist li {
            padding: 18px;
            margin-bottom: 12px;
            background: #f8f9fa;
            border-radius: 10px;
            display: flex;
            align-items: flex-start;
            cursor: pointer;
            transition: all 0.3s;
        }
        .checklist li:hover { background: #e9ecef; }
        .checklist li.completed { background: #d4edda; opacity: 0.8; }
        .checklist li.completed span:last-child { text-decoration: line-through; }
        .checkbox {
            width: 24px;
            height: 24px;
            border: 2px solid #28a745;
            border-radius: 50%;
            margin-right: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            margin-top: 2px;
        }
        .checklist li.completed .checkbox { background: #28a745; }
        .checklist li.completed .checkbox::after {
            content: "✓";
            color: white;
            font-size: 14px;
        }
        .progress-bar {
            height: 12px;
            background: #e9ecef;
            border-radius: 6px;
            overflow: hidden;
            margin-top: 20px;
        }
        .progress-fill {
            height: 100%;
            background: linear-gradient(90deg, #28a745, #20c997);
            transition: width 0.5s;
        }
        .btn {
            display: inline-block;
            padding: 15px 30px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            border-radius: 10px;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            margin-top: 20px;
            text-decoration: none;
        }
        .footer {
            text-align: center;
            color: white;
            padding: 30px;
            font-size: 15px;
        }
        .nav-links {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin-top: 20px;
            flex-wrap: wrap;
        }
        .nav-links a {
            color: white;
            text-decoration: none;
            padding: 10px 20px;
            background: rgba(255,255,255,0.2);
            border-radius: 8px;
            transition: background 0.3s;
        }
        .nav-links a:hover { background: rgba(255,255,255,0.3); }
        @media (max-width: 600px) {
            .container { padding: 10px; }
            .card { padding: 20px; }
            .header h1 { font-size: 24px; }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📚 湖南省考面试每日学习</h1>
            <div class="date">${today} · 第${progress.currentDay}天</div>
            <div class="nav-links">
                <a href="index.html">今日任务</a>
                <a href="archive.html">历史记录</a>
                <a href="about.html">关于</a>
            </div>
        </div>

        <!-- 金句卡片 -->
        <div class="card">
            <div class="card-header">
                <span class="card-icon">💎</span>
                <span class="card-title">今日必背金句（2句）</span>
            </div>
            
            ${jinju.map((item, index) => `
            <div class="jinju-item">
                <div class="jinju-text">"${item.content}"</div>
                <div class="jinju-meta">⭐⭐⭐⭐⭐ ${item.category} · ${item.source}</div>
                
                <div class="jinju-section">
                    <div class="jinju-section-title">💡 深度解析</div>
                    <div class="jinju-section-content">${item.usage}</div>
                </div>
                
                <div class="jinju-section">
                    <div class="jinju-section-title">✍️ 答题示例</div>
                    <div class="jinju-section-content">${item.example}</div>
                </div>
            </div>
            `).join('')}
        </div>

        <!-- 热点卡片 -->
        <div class="card">
            <div class="card-header">
                <span class="card-icon">🔥</span>
                <span class="card-title">今日热点事件</span>
            </div>
            
            <div class="content-text">
                <div style="margin-bottom: 15px;">
                    <span class="tag important">${redian.category}</span>
                    <span class="tag">${redian.time}</span>
                </div>
                
                <h3 style="margin: 15px 0; color: #333; font-size: 20px;">${redian.title}</h3>
                
                <div class="section-title">📋 事件概述</div>
                <p>${redian.content}</p>
                
                <div class="section-title">🔍 核心要点</div>
                <ul style="margin-left: 25px; line-height: 2.2;">
                    ${redian.key_points.map(point => `<li>${point}</li>`).join('')}
                </ul>
                
                <div class="quote">
                    <strong>启示：</strong>${redian.lesson}
                </div>
            </div>
        </div>

        <!-- 人物卡片 -->
        <div class="card">
            <div class="card-header">
                <span class="card-icon">⭐</span>
                <span class="card-title">今日榜样人物</span>
            </div>
            
            <div class="content-text">
                <h3 style="margin-bottom: 15px; color: #333; font-size: 20px;">${renwu.name} —— ${renwu.title}</h3>
                
                <div style="margin-bottom: 15px;">
                    <span class="tag">${renwu.origin}</span>
                    ${renwu.honor.map(h => `<span class="tag primary">${h}</span>`).join('')}
                </div>
                
                <div class="section-title">🏆 主要事迹</div>
                <p>${renwu.story}</p>
                
                <div class="quote" style="font-size: 18px; text-align: center;">
                    "${renwu.quote}"
                </div>
                
                <div class="section-title">🎯 适用话题</div>
                <div>${renwu.application.map(a => `<span class="tag">${a}</span>`).join('')}</div>
            </div>
        </div>

        <!-- 措施卡片 -->
        <div class="card">
            <div class="card-header">
                <span class="card-icon">📋</span>
                <span class="card-title">今日政府措施</span>
            </div>
            
            <div class="content-text">
                <h3 style="margin-bottom: 15px; color: #333; font-size: 20px;">${cuoshi.name}</h3>
                
                <div style="margin-bottom: 15px;">
                    <span class="tag primary">${cuoshi.category}</span>
                    <span class="tag">${cuoshi.time}</span>
                </div>
                
                <div class="section-title">📋 内容</div>
                <p>${cuoshi.content}</p>
                
                <div class="section-title">💡 意义</div>
                <p>${cuoshi.significance}</p>
                
                <div class="example-box">
                    <div class="example-box-title">📝 答题示例</div>
                    <div class="example-box-content">${cuoshi.example}</div>
                </div>
            </div>
        </div>

        <!-- 任务清单 -->
        <div class="card">
            <div class="card-header">
                <span class="card-icon">✅</span>
                <span class="card-title">今日学习任务清单</span>
            </div>
            
            <ul class="checklist" id="checklist">
                <li onclick="toggleCheck(this)">
                    <span class="checkbox"></span>
                    <span>背诵金句2句（能完整复述）</span>
                </li>
                <li onclick="toggleCheck(this)">
                    <span class="checkbox"></span>
                    <span>复述热点事件（时间、内容、启示）</span>
                </li>
                <li onclick="toggleCheck(this)">
                    <span class="checkbox"></span>
                    <span>记住人物姓名、事迹、适用话题</span>
                </li>
                <li onclick="toggleCheck(this)">
                    <span class="checkbox"></span>
                    <span>理解政府措施含义和应用</span>
                </li>
            </ul>
            
            <div class="progress-bar">
                <div class="progress-fill" id="progress" style="width: 0%"></div>
            </div>
            <div style="text-align: center; margin-top: 10px; color: #666;">
                完成进度：<span id="progressText">0/4</span>
            </div>
        </div>

        <div class="footer">
            <p>💪 坚持就是胜利！每天进步一点点，面试成功在眼前！</p>
            <p style="margin-top: 10px; font-size: 13px; opacity: 0.8;">
                湖南省考株洲市市场监督管理局面试备考
            </p>
        </div>
    </div>

    <script>
        function toggleCheck(element) {
            element.classList.toggle('completed');
            updateProgress();
        }
        
        function updateProgress() {
            const items = document.querySelectorAll('.checklist li');
            const completed = document.querySelectorAll('.checklist li.completed');
            const progress = (completed.length / items.length) * 100;
            document.getElementById('progress').style.width = progress + '%';
            document.getElementById('progressText').textContent = completed.length + '/' + items.length;
        }
    </script>
</body>
</html>`;
}

// 生成网站
function generateSite() {
    const db = loadDatabase();
    const progress = loadProgress();
    const content = getTodayContent(db, progress);
    
    // 生成首页
    const html = generateHTML(content, progress);
    fs.writeFileSync(path.join(SITE_DIR, 'index.html'), html, 'utf8');
    
    console.log('✅ 网站已生成：', SITE_DIR);
    console.log('📄 首页：', path.join(SITE_DIR, 'index.html'));
}

// 如果直接运行
if (require.main === module) {
    generateSite();
}

module.exports = { generateSite };
