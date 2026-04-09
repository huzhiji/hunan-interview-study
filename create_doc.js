const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, LevelFormat } = require('docx');
const fs = require('fs');

// 创建文档
const doc = new Document({
  styles: {
    default: { 
      document: { 
        run: { font: "宋体", size: 24 }
      } 
    },
    paragraphStyles: [
      { 
        id: "Heading1", 
        name: "Heading 1", 
        basedOn: "Normal", 
        next: "Normal", 
        quickFormat: true,
        run: { size: 36, bold: true, font: "黑体", color: "2E5090" },
        paragraph: { spacing: { before: 400, after: 200 }, outlineLevel: 0 } 
      },
      { 
        id: "Heading2", 
        name: "Heading 2", 
        basedOn: "Normal", 
        next: "Normal", 
        quickFormat: true,
        run: { size: 28, bold: true, font: "黑体", color: "4A7C59" },
        paragraph: { spacing: { before: 300, after: 150 }, outlineLevel: 1 } 
      },
      {
        id: "Heading3",
        name: "Heading 3",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: { size: 26, bold: true, font: "宋体", color: "333333" },
        paragraph: { spacing: { before: 200, after: 100 }, outlineLevel: 2 }
      }
    ]
  },
  numbering: {
    config: [
      {
        reference: "main-list",
        levels: [
          { level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } }
        ]
      }
    ]
  },
  sections: [{
    properties: {
      page: {
        size: { width: 11906, height: 16838 },
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
      }
    },
    children: [
      // 标题
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 400, after: 400 },
        children: [
          new TextRun({ text: "湖南省考株洲市市场监督管理局", bold: true, size: 44, font: "黑体", color: "1E3A5F" }),
        ]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 600 },
        children: [
          new TextRun({ text: "公务员面试备考资料", bold: true, size: 44, font: "黑体", color: "1E3A5F" }),
        ]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 800 },
        children: [
          new TextRun({ text: "（整理时间：2026年4月）", size: 24, font: "宋体", color: "666666" }),
        ]
      }),

      // ==================== 第一部分：重要政策文件 ====================
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("第一部分 重要政策文件")]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("一、国家层面重要政策文件")]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("（一）党的二十大报告核心要点")]
      }),

      new Paragraph({
        spacing: { before: 100, after: 100 },
        children: [new TextRun({ text: "1. 大会主题：", bold: true, size: 24 }), new TextRun({ text: "高举中国特色社会主义伟大旗帜，全面贯彻新时代中国特色社会主义思想，弘扬伟大建党精神，自信自强、守正创新，踔厉奋发、勇毅前行，为全面建设社会主义现代化国家、全面推进中华民族伟大复兴而团结奋斗。", size: 24 })]
      }),
      new Paragraph({
        spacing: { before: 100, after: 100 },
        children: [new TextRun({ text: "2. 三个务必：", bold: true, size: 24 }), new TextRun({ text: "务必不忘初心、牢记使命；务必谦虚谨慎、艰苦奋斗；务必敢于斗争、善于斗争。", size: 24 })]
      }),
      new Paragraph({
        spacing: { before: 100, after: 100 },
        children: [new TextRun({ text: "3. 中国式现代化五个特征：", bold: true, size: 24 }), new TextRun({ text: "人口规模巨大的现代化；全体人民共同富裕的现代化；物质文明和精神文明相协调的现代化；人与自然和谐共生的现代化；走和平发展道路的现代化。", size: 24 })]
      }),
      new Paragraph({
        spacing: { before: 100, after: 100 },
        children: [new TextRun({ text: "4. 高质量发展是全面建设社会主义现代化国家的首要任务。", bold: true, size: 24 })]
      }),
      new Paragraph({
        spacing: { before: 100, after: 200 },
        children: [new TextRun({ text: "5. 五个必由之路：", bold: true, size: 24 }), new TextRun({ text: "坚持党的全面领导是坚持和发展中国特色社会主义的必由之路；中国特色社会主义是实现中华民族伟大复兴的必由之路；团结奋斗是中国人民创造历史伟业的必由之路；贯彻新发展理念是新时代我国发展壮大的必由之路；全面从严治党是党永葆生机活力、走好新的赶考之路的必由之路。", size: 24 })]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("（二）市场监管核心法规")]
      }),

      new Paragraph({
        spacing: { before: 100, after: 100 },
        children: [new TextRun({ text: "1. 《中华人民共和国食品安全法》", bold: true, size: 24 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 100 },
        children: [new TextRun({ text: "• 立法目的：保证食品安全，保障公众身体健康和生命安全", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 100 },
        children: [new TextRun({ text: "• 基本原则：预防为主、风险管理、全程控制、社会共治", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 100 },
        children: [new TextRun({ text: "• 四个最严：最严谨的标准、最严格的监管、最严厉的处罚、最严肃的问责", size: 22 })]
      }),

      new Paragraph({
        spacing: { before: 100, after: 100 },
        children: [new TextRun({ text: "2. 《中华人民共和国反不正当竞争法》", bold: true, size: 24 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 100 },
        children: [new TextRun({ text: "• 立法目的：促进社会主义市场经济健康发展，鼓励和保护公平竞争", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 100 },
        children: [new TextRun({ text: "• 主要规制行为：混淆行为、商业贿赂、虚假宣传、侵犯商业秘密、不正当有奖销售、商业诋毁、网络不正当竞争", size: 22 })]
      }),

      new Paragraph({
        spacing: { before: 100, after: 100 },
        children: [new TextRun({ text: "3. 《中华人民共和国消费者权益保护法》", bold: true, size: 24 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 100 },
        children: [new TextRun({ text: "• 消费者九项权利：安全权、知情权、自主选择权、公平交易权、求偿权、结社权、获得知识权、受尊重权、监督权", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 100 },
        children: [new TextRun({ text: "• 经营者义务：履行法定和约定义务、接受监督、保障安全、提供真实信息、出具凭证单据、保证质量、履行三包、无理由退货（7日）", size: 22 })]
      }),

      new Paragraph({
        spacing: { before: 100, after: 100 },
        children: [new TextRun({ text: "4. 《市场主体登记管理条例》", bold: true, size: 24 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 200 },
        children: [new TextRun({ text: "• 核心内容：规范市场主体登记管理行为，推进法治化市场建设，维护良好市场秩序和市场主体合法权益", size: 22 })]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("二、湖南省重要政策")]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("（一）三高四新战略")]
      }),

      new Paragraph({
        spacing: { before: 100, after: 100 },
        children: [new TextRun({ text: "• 三个高地：", bold: true, size: 24 }), new TextRun({ text: "国家重要先进制造业高地；具有核心竞争力的科技创新高地；内陆地区改革开放高地", size: 24 })]
      }),
      new Paragraph({
        spacing: { before: 100, after: 100 },
        children: [new TextRun({ text: "• 四新使命：", bold: true, size: 24 }), new TextRun({ text: "在推动高质量发展上闯出新路子；在构建新发展格局中展现新作为；在推动中部地区崛起和长江经济带发展中彰显新担当；奋力谱写新时代坚持和发展中国特色社会主义的湖南新篇章", size: 24 })]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("（二）湖南省十四五市场监管规划要点")]
      }),

      new Paragraph({
        spacing: { before: 100, after: 100 },
        children: [new TextRun({ text: "1. 总体目标：到2025年，基本建成统一开放、竞争有序、监管有力的现代市场体系", size: 24 })]
      }),
      new Paragraph({
        spacing: { before: 100, after: 100 },
        children: [new TextRun({ text: "2. 六大重点任务：", size: 24 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "（1）优化营商环境，激发市场主体活力", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "（2）强化竞争政策实施，维护市场公平竞争", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "（3）加强食品安全监管，守护人民群众舌尖上的安全", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "（4）强化药品安全监管，保障人民群众用药安全", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "（5）加强特种设备安全监管，防范重大安全风险", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 200 },
        children: [new TextRun({ text: "（6）强化消费者权益保护，营造安全放心消费环境", size: 22 })]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("（三）2025年湖南省市场监管工作重点")]
      }),

      new Paragraph({
        spacing: { before: 100, after: 100 },
        children: [new TextRun({ text: "1. 工作思路：讲政治、强监管、促发展、保安全，坚持一二三四五六工作思路", size: 24 })]
      }),
      new Paragraph({
        spacing: { before: 100, after: 100 },
        children: [new TextRun({ text: "2. 三品一特安全监管：", bold: true, size: 24 }), new TextRun({ text: "食品、药品、重点工业产品、特种设备", size: 24 })]
      }),
      new Paragraph({
        spacing: { before: 100, after: 100 },
        children: [new TextRun({ text: "3. 服务型执法：推行服务型执法和体检式监管，实现执法与服务有机统一", size: 24 })]
      }),
      new Paragraph({
        spacing: { before: 100, after: 200 },
        children: [new TextRun({ text: "4. 知识产权强省：推进三高四新知识产权强省建设", size: 24 })]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("三、株洲市市场监管工作重点")]
      }),

      new Paragraph({
        spacing: { before: 100, after: 100 },
        children: [new TextRun({ text: "1. 2025年工作目标：锚定六个最优目标", bold: true, size: 24 })]
      }),
      new Paragraph({
        spacing: { before: 100, after: 100 },
        children: [new TextRun({ text: "2. 重点领域：", size: 24 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "• 优化营商环境，深化放管服改革", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "• 强化质量基础设施建设", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "• 加强食品安全全链条监管", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 200 },
        children: [new TextRun({ text: "• 推进知识产权保护与运用", size: 22 })]
      }),

      // ==================== 第二部分：面试素材 ====================
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("第二部分 面试必背素材")]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("一、人物案例素材")]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("（一）科技强国类")]
      }),

      new Paragraph({
        spacing: { before: 100, after: 50 },
        children: [new TextRun({ text: "【黄旭华】", bold: true, size: 24, color: "2E5090" }), new TextRun({ text: "中国核潜艇之父", size: 24 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 100 },
        children: [new TextRun({ text: "事迹：隐姓埋名三十载，为我国核潜艇事业奉献一生。他说对国家的忠，就是对父母最大的孝。荣获国家最高科学技术奖。", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 200 },
        children: [new TextRun({ text: "适用话题：爱国奉献、坚守初心、工匠精神、淡泊名利", size: 22, italics: true, color: "666666" })]
      }),

      new Paragraph({
        spacing: { before: 100, after: 50 },
        children: [new TextRun({ text: "【屠呦呦】", bold: true, size: 24, color: "2E5090" }), new TextRun({ text: "诺贝尔奖获得者", size: 24 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 100 },
        children: [new TextRun({ text: "事迹：发现青蒿素，挽救全球特别是发展中国家数百万人的生命。85岁获诺贝尔生理学或医学奖，是首位获诺贝尔科学奖项的中国本土科学家。", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 200 },
        children: [new TextRun({ text: "适用话题：科技创新、为民服务、坚持不懈、中医药发展", size: 22, italics: true, color: "666666" })]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("（二）基层治理类")]
      }),

      new Paragraph({
        spacing: { before: 100, after: 50 },
        children: [new TextRun({ text: "【黄文秀】", bold: true, size: 24, color: "2E5090" }), new TextRun({ text: "扶贫干部楷模", size: 24 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 100 },
        children: [new TextRun({ text: "事迹：北师大硕士毕业，放弃大城市工作机会，回到家乡担任驻村第一书记，带领88户贫困户脱贫，2019年因公牺牲，年仅30岁。", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 200 },
        children: [new TextRun({ text: "适用话题：脱贫攻坚、初心使命、青年担当、奉献精神", size: 22, italics: true, color: "666666" })]
      }),

      new Paragraph({
        spacing: { before: 100, after: 50 },
        children: [new TextRun({ text: "【毛相林】", bold: true, size: 24, color: "2E5090" }), new TextRun({ text: "当代愚公", size: 24 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 100 },
        children: [new TextRun({ text: "事迹：重庆市巫山县下庄村村委会主任，带领村民历时7年在绝壁上凿出一条8公里长的天路，带领全村脱贫致富。", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 200 },
        children: [new TextRun({ text: "适用话题：艰苦奋斗、为民情怀、实干精神、脱贫攻坚", size: 22, italics: true, color: "666666" })]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("（三）执法榜样类")]
      }),

      new Paragraph({
        spacing: { before: 100, after: 50 },
        children: [new TextRun({ text: "【毛丽】", bold: true, size: 24, color: "2E5090" }), new TextRun({ text: "最美女交警", size: 24 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 100 },
        children: [new TextRun({ text: "事迹：山西阳泉市交警，秉公执法，曾处罚违规领导的车辆，坚持法律面前人人平等，被称为铁面交警。", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 200 },
        children: [new TextRun({ text: "适用话题：公正执法、法治信仰、原则底线、职业操守", size: 22, italics: true, color: "666666" })]
      }),

      // 2.2 面试金句
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("二、面试必背金句")]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("（一）关于理想信念")]
      }),

      new Paragraph({
        spacing: { before: 100, after: 50 },
        children: [new TextRun({ text: "1. 权为民所用，情为民所系，利为民所谋。", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "2. 心中有阳光，脚下有力量，为了理想能坚持、不懈怠，才能创造无愧于时代的人生。", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 100 },
        children: [new TextRun({ text: "3. 当官就不要发财，发财就不要当官。", size: 22 })]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("（二）关于为民服务")]
      }),

      new Paragraph({
        spacing: { before: 100, after: 50 },
        children: [new TextRun({ text: "1. 深入实际，深入基层，深入群众，做到知民情，解民忧，暖民心。", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "2. 没有一种根基，比扎根于人民更坚实；没有一种力量，比从群众中汲取更强大。", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 100 },
        children: [new TextRun({ text: "3. 民之所忧，我必念之；民之所盼，我必行之。", size: 22 })]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("（三）关于法治执法")]
      }),

      new Paragraph({
        spacing: { before: 100, after: 50 },
        children: [new TextRun({ text: "1. 法无授权不可为，法定职责必须为。", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "2. 执法要有力度，更要有温度。", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "3. 法律的生命力在于实施，法律的权威也在于实施。", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 100 },
        children: [new TextRun({ text: "4. 公正司法是维护社会公平正义的最后一道防线。", size: 22 })]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("（四）关于实干担当")]
      }),

      new Paragraph({
        spacing: { before: 100, after: 50 },
        children: [new TextRun({ text: "1. 空谈误国，实干兴邦。", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "2. 一分部署，九分落实。", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "3. 天下难事，必作于易；天下大事，必作于细。", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 100 },
        children: [new TextRun({ text: "4. 功成不必在我，功成必定有我。", size: 22 })]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("（五）湖南特色表述")]
      }),

      new Paragraph({
        spacing: { before: 100, after: 50 },
        children: [new TextRun({ text: "1. 吃得苦、霸得蛮、耐得烦——湖南精神", size: 22, bold: true, color: "C41E3A" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "2. 心忧天下，敢为人先——湖湘文化", size: 22, bold: true, color: "C41E3A" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "3. 屋场会——湖南基层治理特色模式", size: 22, bold: true, color: "C41E3A" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 200 },
        children: [new TextRun({ text: "4. 美丽屋场——湖南农村人居环境整治品牌", size: 22, bold: true, color: "C41E3A" })]
      }),

      // 2.3 热点事件
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("三、热点事件与案例")]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("（一）服务型执法与柔性执法")]
      }),

      new Paragraph({
        spacing: { before: 100, after: 100 },
        children: [new TextRun({ text: "核心内涵：", bold: true, size: 24 }), new TextRun({ text: "推行721工作法——70%的问题用服务手段解决，20%的问题用管理手段解决，10%的问题用执法手段解决。", size: 24 })]
      }),
      new Paragraph({
        spacing: { before: 100, after: 100 },
        children: [new TextRun({ text: "实践案例：", bold: true, size: 24 }), new TextRun({ text: "某市市场监管部门对流动摊贩采取首次违规口头警告、轻微违法教育为主的执法方式，既维护了市场秩序，又体现了执法温度。", size: 24 })]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("（二）优化营商环境")]
      }),

      new Paragraph({
        spacing: { before: 100, after: 100 },
        children: [new TextRun({ text: "政策措施：", bold: true, size: 24 }), new TextRun({ text: "证照分离改革、一网通办、最多跑一次、首违不罚清单", size: 24 })]
      }),
      new Paragraph({
        spacing: { before: 100, after: 100 },
        children: [new TextRun({ text: "面试应用：", bold: true, size: 24 }), new TextRun({ text: "在组织管理题中，可结合惠企政策宣讲、企业帮扶等具体场景作答。", size: 24 })]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("（三）食品安全监管")]
      }),

      new Paragraph({
        spacing: { before: 100, after: 100 },
        children: [new TextRun({ text: "热点方向：", bold: true, size: 24 }), new TextRun({ text: "校园食品安全、网络餐饮监管、预制菜安全、直播带货食品监管", size: 24 })]
      }),
      new Paragraph({
        spacing: { before: 100, after: 100 },
        children: [new TextRun({ text: "监管重点：", bold: true, size: 24 }), new TextRun({ text: "全链条监管（从农田到餐桌）、智慧监管、信用监管、社会共治", size: 24 })]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("（四）新型消费领域监管")]
      }),

      new Paragraph({
        spacing: { before: 100, after: 100 },
        children: [new TextRun({ text: "监管难点：", bold: true, size: 24 }), new TextRun({ text: "直播带货虚假宣传、刷单炒信、大数据杀熟、个人信息泄露", size: 24 })]
      }),
      new Paragraph({
        spacing: { before: 100, after: 200 },
        children: [new TextRun({ text: "应对思路：", bold: true, size: 24 }), new TextRun({ text: "完善法规、平台责任、技术赋能、协同监管", size: 24 })]
      }),

      // ==================== 第三部分：往年真题 ====================
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("第三部分 往年面试真题精选")]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("一、2024年湖南省考面试真题")]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("（一）2024年6月1日湖南省考（县乡卷）")]
      }),

      new Paragraph({
        spacing: { before: 100, after: 50 },
        children: [new TextRun({ text: "【第一题】", bold: true, size: 24, color: "2E5090" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "习近平总书记强调：江山就是人民，人民就是江山，请谈谈你的理解。", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 100 },
        children: [new TextRun({ text: "【答题思路】", bold: true, size: 22, color: "4A7C59" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "1. 点明本质：体现了以人民为中心的发展思想和党的根本宗旨", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "2. 理论阐述：人民是历史的创造者，是党的执政之基、力量之源", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "3. 结合岗位：作为市场监管人员，要守护好人民群众的食品安全、消费安全", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 200 },
        children: [new TextRun({ text: "4. 践行方向：深入基层、服务群众，解决群众急难愁盼问题", size: 22 })]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("（二）2024年10月20日湖南省直市场监督管理局遴选")]
      }),

      new Paragraph({
        spacing: { before: 100, after: 50 },
        children: [new TextRun({ text: "【第一题】", bold: true, size: 24, color: "2E5090" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "对于服务型执法和体检式监管，谈谈你的看法。", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 100 },
        children: [new TextRun({ text: "【答题思路】", bold: true, size: 22, color: "4A7C59" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "1. 概念阐释：服务型执法是指执法与服务相结合，体检式监管是指主动排查风险隐患", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "2. 积极意义：优化营商环境、防范安全风险、提升监管效能", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "3. 实施路径：主动服务、预防为主、分类监管、信用监管", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 200 },
        children: [new TextRun({ text: "4. 注意事项：服务不越位、监管不缺位、执法有温度", size: 22 })]
      }),

      new Paragraph({
        spacing: { before: 100, after: 50 },
        children: [new TextRun({ text: "【第二题】", bold: true, size: 24, color: "2E5090" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "你会如何开展电动自行车安全隐患排查专项行动？", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 100 },
        children: [new TextRun({ text: "【答题思路】", bold: true, size: 22, color: "4A7C59" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "1. 前期准备：制定方案、明确重点、组建队伍、宣传发动", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "2. 组织实施：生产环节（质量检查）、销售环节（认证检查）、使用环节（联合执法）", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "3. 重点内容：非法改装、假冒伪劣、违规充电", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 200 },
        children: [new TextRun({ text: "4. 长效机制：标准完善、信用监管、社会共治", size: 22 })]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("二、2023年湖南省考面试真题")]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("（一）2023年4月9日湖南省市场监督管理局事业面试")]
      }),

      new Paragraph({
        spacing: { before: 100, after: 50 },
        children: [new TextRun({ text: "【第一题】", bold: true, size: 24, color: "2E5090" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "中央下发《全党大兴调查研究之风》，请谈谈市场监管部门如何开展调查研究工作。", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 100 },
        children: [new TextRun({ text: "【答题思路】", bold: true, size: 22, color: "4A7C59" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "1. 明确调研重点：食品安全隐患、消费维权热点、企业发展困难", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "2. 创新调研方式：明察暗访、四不两直、蹲点调研、问卷调查", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "3. 深入基层一线：农贸市场、食品企业、基层所站", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 200 },
        children: [new TextRun({ text: "4. 成果转化运用：形成调研报告、出台政策措施、解决实际问题", size: 22 })]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("（二）2023年6月18日株洲市公务员面试题")]
      }),

      new Paragraph({
        spacing: { before: 100, after: 50 },
        children: [new TextRun({ text: "【第一题】", bold: true, size: 24, color: "2E5090" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "老子曰：天下难事，必作于易；天下大事，必作于细。你怎么理解？", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 100 },
        children: [new TextRun({ text: "【答题思路】", bold: true, size: 22, color: "4A7C59" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "1. 释义：难事从简单做起，大事从细节做起", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "2. 重要性：细节决定成败，基础决定高度", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "3. 反面案例：忽视细节导致的监管漏洞、安全事故", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "4. 践行：从小事做起，注重细节，精益求精", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 200 },
        children: [new TextRun({ text: "5. 结合岗位：市场监管工作需要一丝不苟的态度", size: 22 })]
      }),

      new Paragraph({
        spacing: { before: 100, after: 50 },
        children: [new TextRun({ text: "【第二题】", bold: true, size: 24, color: "2E5090" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "山西交警毛丽在执法过程中惩罚了诸多领导的违规车辆，有人说她没人情味，你怎么看？", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 100 },
        children: [new TextRun({ text: "【答题思路】", bold: true, size: 22, color: "4A7C59" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "1. 表明态度：坚决支持毛丽的做法，这是依法履职的表现", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "2. 法理分析：法律面前人人平等，执法必严、违法必究", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "3. 价值意义：维护法律尊严、树立执法权威、促进社会公平", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "4. 澄清误解：人情味不等于放弃原则，公正才是最大的人情", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 200 },
        children: [new TextRun({ text: "5. 自身践行：学习毛丽精神，坚守法治底线", size: 22 })]
      }),

      // ==================== 第四部分：答题技巧 ====================
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("第四部分 面试答题技巧与方法论")]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("一、四大底层思维")]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("（一）底层逻辑思维")]
      }),

      new Paragraph({
        spacing: { before: 100, after: 100 },
        children: [new TextRun({ text: "核心要义：", bold: true, size: 24 }), new TextRun({ text: "拿到题目后，第一步不是判断题型，而是理清三个核心：", size: 24 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "1. 核心矛盾：问题的本质是什么？", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "2. 作答目的：要解决什么问题、达成什么效果？", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 100 },
        children: [new TextRun({ text: "3. 能力展现：岗位需要我展现什么能力？", size: 22 })]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("（二）务实接地气思维")]
      }),

      new Paragraph({
        spacing: { before: 100, after: 100 },
        children: [new TextRun({ text: "将宏观理念转化为具体的工作细节，用人话表达，让答案充满烟火气。", size: 24 })]
      }),
      new Paragraph({
        spacing: { before: 100, after: 50 },
        children: [new TextRun({ text: "错误示例：", color: "C41E3A", size: 22 }), new TextRun({ text: "我会全心全意为人民服务。", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 100 },
        children: [new TextRun({ text: "正确示例：", color: "4A7C59", size: 22 }), new TextRun({ text: "面对来办事的老年群众，我会一次性讲清流程，能当场办结的绝不拖延，能线上办理的手把手教。", size: 22 })]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("（三）岗位匹配思维")]
      }),

      new Paragraph({
        spacing: { before: 100, after: 100 },
        children: [new TextRun({ text: "执法岗答题要点：", bold: true, size: 24 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "• 突出法理情统一与程序正义", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "• 体现处罚与教育相结合的柔性执法理念", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 100 },
        children: [new TextRun({ text: "• 懂规矩：事前请示、事中反馈、事后汇报的闭环管理", size: 22 })]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("（四）从容平等思维")]
      }),

      new Paragraph({
        spacing: { before: 100, after: 100 },
        children: [new TextRun({ text: "把面试看作与前辈的一次平等工作交流。考官是在选拔未来的同事，期待看到情绪稳定、思维清晰的你。", size: 24 })]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("二、五大高分标准")]
      }),

      new Paragraph({
        spacing: { before: 100, after: 50 },
        children: [new TextRun({ text: "标准一：角色站对", bold: true, size: 24, color: "2E5090" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 100 },
        children: [new TextRun({ text: "站稳人民立场与法治底线，体现既能体现政策高度，又能解决群众急难愁盼", size: 22 })]
      }),

      new Paragraph({
        spacing: { before: 100, after: 50 },
        children: [new TextRun({ text: "标准二：可执行性", bold: true, size: 24, color: "2E5090" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 100 },
        children: [new TextRun({ text: "拒绝万金油答案，强调湖湘实干。用屋场会、恳谈会等湖南特色方式作答", size: 22 })]
      }),

      new Paragraph({
        spacing: { before: 100, after: 50 },
        children: [new TextRun({ text: "标准三：体制化逻辑", bold: true, size: 24, color: "2E5090" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 100 },
        children: [new TextRun({ text: "懂请示汇报与闭环管理，应急题体现双线报告（向领导报情况、向相关部门报需求）", size: 22 })]
      }),

      new Paragraph({
        spacing: { before: 100, after: 50 },
        children: [new TextRun({ text: "标准四：情绪标准", bold: true, size: 24, color: "2E5090" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 100 },
        children: [new TextRun({ text: "体现吃得苦、耐得烦、霸得蛮的湖南精神。声音要大，但语速要慢；态度诚恳，但用词保留", size: 22 })]
      }),

      new Paragraph({
        spacing: { before: 100, after: 50 },
        children: [new TextRun({ text: "标准五：培养价值", bold: true, size: 24, color: "2E5090" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 100 },
        children: [new TextRun({ text: "体现复盘能力和风险意识，结尾要有总结提升环节，体现举一反三、治未病思维", size: 22 })]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("三、万能答题框架")]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("（一）综合分析题框架")]
      }),

      new Paragraph({
        spacing: { before: 100, after: 50 },
        children: [new TextRun({ text: "1. 是什么：点明本质，表明态度", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "2. 为什么：分析原因/意义/影响（多角度：个人、社会、国家）", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "3. 怎么办：提出对策（宏观+微观、当前+长远）", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 100 },
        children: [new TextRun({ text: "4. 结合自身：如何践行（理念+行动）", size: 22 })]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("（二）组织管理题框架")]
      }),

      new Paragraph({
        spacing: { before: 100, after: 50 },
        children: [new TextRun({ text: "1. 前期筹备：调研需求→制定方案→成立专班→宣传动员", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "2. 组织实施：分工协作→有序推进→动态调整→确保效果", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 100 },
        children: [new TextRun({ text: "3. 总结提升：收集反馈→形成报告→宣传推广→长效机制", size: 22 })]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("（三）应急应变题框架")]
      }),

      new Paragraph({
        spacing: { before: 100, after: 50 },
        children: [new TextRun({ text: "1. 稳定局面：控制现场→安抚情绪→防止扩大", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "2. 了解情况：听取诉求→调查核实→掌握全貌", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "3. 解决问题：依法依规→分类处理→及时反馈", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 100 },
        children: [new TextRun({ text: "4. 总结提升：举一反三→完善机制→预防再发", size: 22 })]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("（四）人际关系题框架")]
      }),

      new Paragraph({
        spacing: { before: 100, after: 50 },
        children: [new TextRun({ text: "与领导：", bold: true, size: 22 }), new TextRun({ text: "尊重服从、主动汇报、虚心接受批评、有则改之无则加勉", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "与同事：", bold: true, size: 22 }), new TextRun({ text: "工作为重、主动担责、互帮互助、求同存异", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "与群众：", bold: true, size: 22 }), new TextRun({ text: "热情耐心、换位思考、依法依规、解决问题", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 100 },
        children: [new TextRun({ text: "与亲友：", bold: true, size: 22 }), new TextRun({ text: "坚持原则、灵活有度、动之以情晓之以理", size: 22 })]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("四、执法类岗位答题要点")]
      }),

      new Paragraph({
        spacing: { before: 100, after: 50 },
        children: [new TextRun({ text: "1. 程序正义：", bold: true, size: 24 }), new TextRun({ text: "亮明身份→说明事由→依法检查→记录归档", size: 24 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "2. 柔性执法：", bold: true, size: 24 }), new TextRun({ text: "首违不罚、轻微免罚、教育为主、处罚为辅", size: 24 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "3. 服务型执法：", bold: true, size: 24 }), new TextRun({ text: "执法与服务相结合，帮助企业合规发展", size: 24 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "4. 应急处置：", bold: true, size: 24 }), new TextRun({ text: "快速响应→控制事态→依法处置→善后恢复", size: 24 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 100 },
        children: [new TextRun({ text: "5. 底线思维：", bold: true, size: 24 }), new TextRun({ text: "食品安全、特种设备、药品安全三品一特安全底线", size: 24 })]
      }),

      // ==================== 第五部分：学习计划 ====================
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("第五部分 备考学习计划")]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("一、每日学习任务规划")]
      }),

      new Paragraph({
        spacing: { before: 100, after: 100 },
        children: [new TextRun({ text: "建议备考周期：4-6周，每天学习3-4小时", bold: true, size: 24, color: "2E5090" })]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("第1周：基础积累期")]
      }),

      new Paragraph({
        spacing: { before: 100, after: 50 },
        children: [new TextRun({ text: "【每日任务】", bold: true, size: 24 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "• 晨读（30分钟）：背诵党的二十大报告要点、必背金句", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "• 上午（1小时）：学习政策法规（食品安全法、消费者权益保护法等）", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "• 下午（1小时）：整理人物案例素材，制作记忆卡片", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 100 },
        children: [new TextRun({ text: "• 晚上（30分钟）：复习当天内容，整理笔记", size: 22 })]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("第2周：方法学习期")]
      }),

      new Paragraph({
        spacing: { before: 100, after: 50 },
        children: [new TextRun({ text: "【每日任务】", bold: true, size: 24 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "• 晨读（30分钟）：复习金句+朗读逐字稿", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "• 上午（1小时）：学习答题技巧（四大思维、五大标准）", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "• 下午（1.5小时）：研究往年真题，梳理解题思路", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 100 },
        children: [new TextRun({ text: "• 晚上（30分钟）：总结答题框架，制作模板", size: 22 })]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("第3-4周：强化练习期")]
      }),

      new Paragraph({
        spacing: { before: 100, after: 50 },
        children: [new TextRun({ text: "【每日任务】", bold: true, size: 24 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "• 晨读（30分钟）：热点素材+自己整理的高频表述", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "• 上午（1.5小时）：模拟答题（每天3-5道题，录音回看）", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "• 下午（1.5小时）：复盘改进，针对性强化薄弱环节", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 100 },
        children: [new TextRun({ text: "• 晚上（30分钟）：整理当天答题的问题和改进方向", size: 22 })]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("第5-6周：冲刺模拟期")]
      }),

      new Paragraph({
        spacing: { before: 100, after: 50 },
        children: [new TextRun({ text: "【每日任务】", bold: true, size: 24 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "• 晨读（30分钟）：快速浏览全部素材和框架", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "• 上午（2小时）：全真模拟（按考试流程，一套3道题）", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "• 下午（1小时）：查漏补缺，重点记忆高频考点", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 100 },
        children: [new TextRun({ text: "• 晚上（30分钟）：调整心态，保持状态", size: 22 })]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("二、每周重点回顾清单")]
      }),

      new Paragraph({
        spacing: { before: 100, after: 50 },
        children: [new TextRun({ text: "周一：", bold: true, size: 24 }), new TextRun({ text: "政策文件背诵（二十大报告、市场监管法规）", size: 24 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "周二：", bold: true, size: 24 }), new TextRun({ text: "人物案例记忆（3-5个典型人物，能完整复述）", size: 24 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "周三：", bold: true, size: 24 }), new TextRun({ text: "金句积累（按主题分类，各准备3-5句）", size: 24 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "周四：", bold: true, size: 24 }), new TextRun({ text: "热点事件（本周新增热点，积累表达）", size: 24 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "周五：", bold: true, size: 24 }), new TextRun({ text: "真题演练（至少完成一套真题模拟）", size: 24 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "周六：", bold: true, size: 24 }), new TextRun({ text: "全真模拟（完整流程，录像回看）", size: 24 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 200 },
        children: [new TextRun({ text: "周日：", bold: true, size: 24 }), new TextRun({ text: "复盘总结+休息调整", size: 24 })]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("三、面试前一周冲刺要点")]
      }),

      new Paragraph({
        spacing: { before: 100, after: 50 },
        children: [new TextRun({ text: "1. 素材方面：", bold: true, size: 24 }), new TextRun({ text: "精简记忆内容，只保留高频金句和1-2个万能人物案例", size: 24 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "2. 练习方面：", bold: true, size: 24 }), new TextRun({ text: "保持答题状态，每天2-3题即可，不求多求精", size: 24 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "3. 心态方面：", bold: true, size: 24 }), new TextRun({ text: "调整作息，保证睡眠，积极自我暗示", size: 24 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "4. 仪表方面：", bold: true, size: 24 }), new TextRun({ text: "准备面试服装，提前试穿，确保合身得体", size: 24 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 200 },
        children: [new TextRun({ text: "5. 物资方面：", bold: true, size: 24 }), new TextRun({ text: "检查证件、准考证、文具等，提前规划路线", size: 24 })]
      }),

      // 结束语
      new Paragraph({
        spacing: { before: 600, after: 200 },
        children: [new TextRun({ text: "【备考寄语】", bold: true, size: 28, font: "黑体", color: "2E5090" })]
      }),
      new Paragraph({
        spacing: { before: 100, after: 100 },
        children: [new TextRun({ text: "面试不是背诵考试，而是思维能力的展示。把握四大思维与五大标准，结合湖南本土政务风格，做一个能干事、能扛事、不出事的考生。少一点套路感，多一点实干感，让考官看见一个像同事的你。", size: 24, italics: true })]
      }),
      new Paragraph({
        alignment: AlignmentType.RIGHT,
        spacing: { before: 200, after: 200 },
        children: [new TextRun({ text: "祝你面试顺利，成功上岸！", size: 24, bold: true })]
      }),

    ]
  }]
});

// 保存文档
Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("C:\\Users\\a1206\\WorkBuddy\\20260409140758\\湖南省考株洲市市场监督管理局面试备考资料.docx", buffer);
  console.log("文档创建成功！");
});
