# 📚 湖南省考面试每日学习网站

[![Daily Update](https://github.com/YOUR_USERNAME/hunan-interview-study/actions/workflows/daily-update.yml/badge.svg)](https://github.com/YOUR_USERNAME/hunan-interview-study/actions/workflows/daily-update.yml)

> 湖南省考株洲市市场监督管理局公务员面试备考资料库

## 🌐 在线访问

**网站地址：** https://YOUR_USERNAME.github.io/hunan-interview-study

每天自动更新学习内容，包括：
- 💎 2句必背金句（含解析和用法）
- 🔥 1个热点事件（含核心要点和面试应用）
- ⭐ 1位榜样人物（含事迹和适用话题）
- 📋 1个政府措施（含内容和答题示例）

## 📱 使用方式

1. **手机访问**：收藏网站到微信或浏览器，每天打开学习
2. **电脑访问**：浏览器打开网站，可勾选完成进度
3. **本地使用**：克隆仓库后运行本地服务器

## 🔄 自动更新

网站通过 GitHub Actions 每天北京时间早上8点自动更新内容。

## 📁 项目结构

```
.
├── .github/workflows/     # GitHub Actions 配置
├── .workbuddy/           # 学习系统核心代码
│   ├── interview_db.json # 面试资料数据库
│   ├── daily_system.js   # 每日任务生成
│   └── generate_site.js  # 网站生成脚本
├── docs/                 # GitHub Pages 网站文件
└── README.md
```

## 🛠️ 本地开发

```bash
# 克隆仓库
git clone https://github.com/YOUR_USERNAME/hunan-interview-study.git
cd hunan-interview-study

# 生成今日内容
node .workbuddy/daily_system.js today

# 生成网站
node .workbuddy/generate_site.js

# 本地预览
cd .workbuddy/site
python -m http.server 8000
```

## 📝 内容来源

- 金句：习近平总书记系列重要讲话
- 热点：2024-2025年时事政治
- 人物：时代楷模、七一勋章获得者
- 措施：政府工作方法、政策文件

## 💪 备考加油

坚持就是胜利！每天进步一点点，面试成功在眼前！

---

**创建时间：** 2026年4月9日  
**备考目标：** 湖南省考株洲市市场监督管理局
