const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, ShadingType } = require('docx');
const fs = require('fs');

const doc = new Document({
  styles: {
    default: { document: { run: { font: "宋体", size: 24 } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 36, bold: true, font: "黑体", color: "1E3A5F" },
        paragraph: { spacing: { before: 400, after: 200 } } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, font: "黑体", color: "C41E3A" },
        paragraph: { spacing: { before: 300, after: 150 } } },
      { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 26, bold: true, font: "宋体", color: "2E5090" },
        paragraph: { spacing: { before: 200, after: 100 } } }
    ]
  },
  sections: [{
    properties: {
      page: { size: { width: 11906, height: 16838 }, margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } }
    },
    children: [
      // 标题
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 400, after: 400 },
        children: [new TextRun({ text: "面试人物素材大全", bold: true, size: 48, font: "黑体", color: "1E3A5F" })]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 600 },
        children: [new TextRun({ text: "（含具体事迹·用法示例·直接背诵版）", size: 28, font: "宋体", color: "666666" })]
      }),

      // 使用说明
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("使用说明")]
      }),
      new Paragraph({
        spacing: { before: 100, after: 50 },
        children: [new TextRun({ text: "【背诵要点】", bold: true, size: 24, color: "C41E3A" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "1. 每个人物记住：姓名+身份+核心事迹（3句话）+适用话题", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "2. 不要死记硬背全部细节，抓住最感人的点", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 100 },
        children: [new TextRun({ text: "3. 练习时要自然引用，不要生硬堆砌", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 100, after: 200 },
        children: [new TextRun({ text: "【标注说明】", bold: true, size: 24, color: "C41E3A" }), new TextRun({ text: "★★★=必背万能人物（适用多个话题） ★★=重点人物 ★=拓展了解", size: 22 })]
      }),

      // ========== 第一板块：科技强国类 ==========
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("第一板块 科技强国类")]
      }),
      new Paragraph({
        spacing: { before: 100, after: 200 },
        children: [new TextRun({ text: "适用话题：", bold: true, size: 24 }), new TextRun({ text: "爱国奉献、科技创新、工匠精神、坚守初心、淡泊名利", size: 24 })]
      }),

      // 人物1：黄旭华
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("★★★ 人物一：黄旭华")]
      }),
      new Paragraph({
        spacing: { before: 100, after: 100 },
        shading: { fill: "FFF8DC", type: ShadingType.CLEAR },
        children: [new TextRun({ text: "【身份定位】中国核潜艇之父、共和国勋章获得者、国家最高科学技术奖得主", bold: true, size: 24, color: "1E3A5F" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "【核心事迹】", bold: true, size: 22, color: "2E5090" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "• 1958年，34岁的黄旭华被秘密召集，从此隐姓埋名30年", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "• 在没有任何外援的情况下，带领团队用算盘计算数据，成功研制出中国第一艘核潜艇", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "• 为严守国家秘密，30年没回过广东老家，父亲去世也未能见最后一面", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 100 },
        children: [new TextRun({ text: "• 他说：对国家的忠，就是对父母最大的孝", size: 22, bold: true, color: "C41E3A" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "【适用话题】", bold: true, size: 22, color: "2E5090" }), new TextRun({ text: "爱国奉献、坚守初心、工匠精神、淡泊名利、科技强国", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "【答题模板】", bold: true, size: 22, color: "C41E3A" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 200 },
        children: [new TextRun({ text: ""正如中国核潜艇之父黄旭华，隐姓埋名三十载，用算盘计算数据，成功研制出中国第一艘核潜艇。他说'对国家的忠，就是对父母最大的孝'。这种舍小家为大家的奉献精神，值得我们每一个人学习..."", size: 22 })]
      }),

      // 人物2：屠呦呦
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("★★★ 人物二：屠呦呦")]
      }),
      new Paragraph({
        spacing: { before: 100, after: 100 },
        shading: { fill: "FFF8DC", type: ShadingType.CLEAR },
        children: [new TextRun({ text: "【身份定位】中国首位诺贝尔生理学或医学奖获得者、药学家", bold: true, size: 24, color: "1E3A5F" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "【核心事迹】", bold: true, size: 22, color: "2E5090" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "• 1969年接受中草药抗疟研究任务，带领团队整理2000多本古籍，筛选2000多个方药", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "• 历经190多次失败，终于从青蒿中提取出青蒿素", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "• 以身试药，亲自服用提取物，确保安全性", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 100 },
        children: [new TextRun({ text: "• 85岁高龄获得诺贝尔奖，挽救全球数百万人生命", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "【适用话题】", bold: true, size: 22, color: "2E5090" }), new TextRun({ text: "科技创新、坚持不懈、为民服务、中医药发展、奉献精神", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "【答题模板】", bold: true, size: 22, color: "C41E3A" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 200 },
        children: [new TextRun({ text: ""诺贝尔奖获得者屠呦呦，历经190多次失败，终于从青蒿中提取出青蒿素，挽救了全球特别是发展中国家数百万人的生命。她的事迹告诉我们，科学研究需要坚持不懈的精神..."", size: 22 })]
      }),

      // 人物3：袁隆平
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("★★★ 人物三：袁隆平")]
      }),
      new Paragraph({
        spacing: { before: 100, after: 100 },
        shading: { fill: "FFF8DC", type: ShadingType.CLEAR },
        children: [new TextRun({ text: "【身份定位】杂交水稻之父、共和国勋章获得者", bold: true, size: 24, color: "1E3A5F" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "【核心事迹】", bold: true, size: 22, color: "2E5090" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "• 毕生致力于杂交水稻研究，解决了十几亿人的吃饭问题", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "• 90岁高龄仍坚持下田，他说：我不在家，就在试验田；不在试验田，就在去试验田的路上", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 100 },
        children: [new TextRun({ text: "• 有两个梦想：禾下乘凉梦、杂交水稻覆盖全球梦", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "【适用话题】", bold: true, size: 22, color: "2E5090" }), new TextRun({ text: "为民服务、坚守初心、科技创新、奋斗精神", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 200 },
        children: [new TextRun({ text: "【答题模板】杂交水稻之父袁隆平，毕生致力于让中国人端稳饭碗。90岁高龄仍坚持下田，他说'我不在家，就在试验田'。这种扎根基层、为民服务的精神，正是我们基层公务员应该学习的...", size: 22 })]
      }),

      // ========== 第二板块：基层治理类 ==========
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("第二板块 基层治理类（必背！）")]
      }),
      new Paragraph({
        spacing: { before: 100, after: 200 },
        children: [new TextRun({ text: "适用话题：", bold: true, size: 24 }), new TextRun({ text: "脱贫攻坚、初心使命、青年担当、为民情怀、实干精神", size: 24 })]
      }),

      // 人物4：黄文秀
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("★★★ 人物四：黄文秀（重点背诵！）")]
      }),
      new Paragraph({
        spacing: { before: 100, after: 100 },
        shading: { fill: "FFF8DC", type: ShadingType.CLEAR },
        children: [new TextRun({ text: "【身份定位】广西百色市乐业县百坭村驻村第一书记、北师大硕士", bold: true, size: 24, color: "1E3A5F" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "【核心事迹】", bold: true, size: 22, color: "2E5090" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "• 2016年北师大硕士毕业，放弃北京高薪工作，主动回到家乡扶贫", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "• 遍访全村195户贫困户，绘制贫困户分布图，日记本写满村民困难", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "• 带领村民发展砂糖橘产业、电商销售，88户418人脱贫", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 100 },
        children: [new TextRun({ text: "• 2019年6月17日，因暴雨连夜回村救灾，不幸遇难，年仅30岁", size: 22, bold: true, color: "C41E3A" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "【颁奖词】", bold: true, size: 22, color: "2E5090" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 100 },
        children: [new TextRun({ text: "有些人从山里走了，就不再回来；你从城里回来，便不再离开。来的时候惴惴，怕自己不够勇敢；走的时候匆匆，留下最美的韶华。", size: 22, italics: true, color: "666666" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "【适用话题】", bold: true, size: 22, color: "2E5090" }), new TextRun({ text: "脱贫攻坚、青年担当、初心使命、基层奉献、选择", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "【答题模板·自我认知】", bold: true, size: 22, color: "C41E3A" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 200 },
        children: [new TextRun({ text: ""黄文秀北师大硕士毕业后，放弃大城市的工作机会，毅然回到家乡担任驻村第一书记，带领88户贫困户脱贫，30岁因公牺牲。她说'只有扎根泥土，才能懂得人民'。这种选择让我深受触动，也坚定了我服务基层的决心..."", size: 22 })]
      }),

      // 人物5：毛相林
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("★★★ 人物五：毛相林")]
      }),
      new Paragraph({
        spacing: { before: 100, after: 100 },
        shading: { fill: "FFF8DC", type: ShadingType.CLEAR },
        children: [new TextRun({ text: "【身份定位】重庆市巫山县下庄村村委会主任、当代愚公", bold: true, size: 24, color: "1E3A5F" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "【核心事迹】", bold: true, size: 22, color: "2E5090" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "• 下庄村四面绝壁，世代被困悬崖上，几乎与世隔绝", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "• 1997年起，带领村民用最原始的工具，历时7年在绝壁上凿出一条8公里长的天路", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "• 修路期间，6位村民献出了生命，但他没有放弃", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 100 },
        children: [new TextRun({ text: "• 路通后带领村民发展柑橘产业，全村脱贫致富", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "【适用话题】", bold: true, size: 22, color: "2E5090" }), new TextRun({ text: "艰苦奋斗、为民情怀、脱贫攻坚、愚公精神", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "【答题模板】", bold: true, size: 22, color: "C41E3A" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 200 },
        children: [new TextRun({ text: ""被称为当代愚公的毛相林，带领村民历时7年在绝壁上凿出天路，6位村民为此献出生命。他说'山凿一尺宽一尺，路修一丈长一丈'。这种不等不靠、艰苦奋斗的精神，正是脱贫攻坚最需要的..."", size: 22 })]
      }),

      // 人物6：张桂梅
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("★★★ 人物六：张桂梅")]
      }),
      new Paragraph({
        spacing: { before: 100, after: 100 },
        shading: { fill: "FFF8DC", type: ShadingType.CLEAR },
        children: [new TextRun({ text: "【身份定位】云南华坪女高校长、时代楷模", bold: true, size: 24, color: "1E3A5F" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "【核心事迹】", bold: true, size: 22, color: "2E5090" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "• 扎根云南贫困山区40多年，创办全国第一所全免费女子高中", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "• 帮助1800多名贫困山区女孩圆了大学梦", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "• 身患20多种疾病，每天靠吃止疼药坚持工作", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 100 },
        children: [new TextRun({ text: "• 她说：我救了一代人，不管多少，她们后面走得比我好，比我幸福，就足够了", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "【适用话题】", bold: true, size: 22, color: "2E5090" }), new TextRun({ text: "教育扶贫、无私奉献、坚守初心、女性力量", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 200 },
        children: [new TextRun({ text: "【答题模板】张桂梅校长扎根贫困山区40多年，创办免费女子高中，帮助1800多名女孩圆了大学梦。她身患20多种疾病，却坚持每天5点起床陪学生早读。这种无私奉献的精神，让我明白什么是真正的教育情怀...", size: 22 })]
      }),

      // ========== 第三板块：执法榜样类 ==========
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("第三板块 执法榜样类（执法岗必背）")]
      }),
      new Paragraph({
        spacing: { before: 100, after: 200 },
        children: [new TextRun({ text: "适用话题：", bold: true, size: 24 }), new TextRun({ text: "公正执法、法治信仰、原则底线、职业操守", size: 24 })]
      }),

      // 人物7：毛丽
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("★★★ 人物七：毛丽（重点背诵！）")]
      }),
      new Paragraph({
        spacing: { before: 100, after: 100 },
        shading: { fill: "FFF8DC", type: ShadingType.CLEAR },
        children: [new TextRun({ text: "【身份定位】山西阳泉市公安局交警支队四大队民警、最美女交警", bold: true, size: 24, color: "1E3A5F" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "【核心事迹】", bold: true, size: 22, color: "2E5090" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "• 在执法过程中，坚持原则，秉公执法", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "• 曾处罚过违规的公安局领导车辆，引起广泛关注", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 100 },
        children: [new TextRun({ text: "• 被称为铁面交警，体现法律面前人人平等", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "【适用话题】", bold: true, size: 22, color: "2E5090" }), new TextRun({ text: "公正执法、法治信仰、原则底线、职业操守", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "【答题模板】", bold: true, size: 22, color: "C41E3A" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 200 },
        children: [new TextRun({ text: ""被称为最美女交警的毛丽，在执法过程中坚持原则，曾处罚违规领导的车辆。有人说她没人情味，但正是这种秉公执法的精神，维护了法律的尊严。正如她所说，法律面前人人平等..."", size: 22 })]
      }),

      // 人物8：陈清洲
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("★★ 人物八：陈清洲")]
      }),
      new Paragraph({
        spacing: { before: 100, after: 100 },
        shading: { fill: "F0F8FF", type: ShadingType.CLEAR },
        children: [new TextRun({ text: "【身份定位】厦门市公安局集美分局民警、时代楷模", bold: true, size: 24, color: "1E3A5F" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "【核心事迹】", bold: true, size: 22, color: "2E5090" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "• 扎根基层20年，是群众的贴心人", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "• 开通微博@交警陈清洲，帮助寻找走失人员300多人", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 100 },
        children: [new TextRun({ text: "• 身患肝癌仍坚持工作，被誉为亮灯警察", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 200 },
        children: [new TextRun({ text: "【答题模板】时代楷模陈清洲，扎根基层20年，通过微博帮助寻找走失人员300多人。他告诉我们，执法不仅要有力度，更要有温度，要真正成为群众的贴心人...", size: 22 })]
      }),

      // ========== 第四板块：新时代青年榜样 ==========
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("第四板块 新时代青年榜样")]
      }),

      // 人物9：戍边英雄
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("★★★ 人物九：戍边英雄群体")]
      }),
      new Paragraph({
        spacing: { before: 100, after: 100 },
        shading: { fill: "FFF8DC", type: ShadingType.CLEAR },
        children: [new TextRun({ text: "【代表人物】祁发宝、陈红军、陈祥榕、肖思远、王焯冉", bold: true, size: 24, color: "1E3A5F" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "【核心事迹】", bold: true, size: 22, color: "2E5090" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "• 2020年6月，外军越线挑衅，戍边官兵英勇反击", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "• 团长祁发宝身负重伤，营长陈红军、战士陈祥榕、肖思远、王焯冉牺牲", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 100 },
        children: [new TextRun({ text: "• 陈祥榕写下：清澈的爱，只为中国", size: 22, bold: true, color: "C41E3A" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 200 },
        children: [new TextRun({ text: "【答题模板】戍边英雄陈祥榕，18岁为国捐躯，留下'清澈的爱，只为中国'的战斗口号。他们用青春和生命诠释了什么是爱国，什么是担当。作为新时代青年，我们要传承这份精神...", size: 22 })]
      }),

      // 人物10：航天青年
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("★★ 人物十：航天青年团队")]
      }),
      new Paragraph({
        spacing: { before: 100, after: 100 },
        shading: { fill: "F0F8FF", type: ShadingType.CLEAR },
        children: [new TextRun({ text: "【代表】嫦娥团队、天问团队、北斗团队平均年龄30多岁", bold: true, size: 24, color: "1E3A5F" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 200 },
        children: [new TextRun({ text: "【答题模板】航天报国的嫦娥团队、天问团队平均年龄只有30多岁，他们用青春托举中国航天。这告诉我们，青年一代有理想、有本领、有担当，国家就有前途，民族就有希望...", size: 22 })]
      }),

      // 背诵建议
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("背诵建议")]
      }),
      new Paragraph({
        spacing: { before: 100, after: 50 },
        children: [new TextRun({ text: "【必背3人】", bold: true, size: 24, color: "C41E3A" }), new TextRun({ text: "黄文秀（基层）、黄旭华（科技）、毛丽（执法）——覆盖所有话题", size: 24 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "【备用2人】", bold: true, size: 24 }), new TextRun({ text: "屠呦呦（坚持）、袁隆平（为民）", size: 24 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 200 },
        children: [new TextRun({ text: "【记忆口诀】", bold: true, size: 24 }), new TextRun({ text: "文秀基层献青春，旭华隐姓铸重器，毛丽执法不徇私", size: 24 })]
      }),

      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 600, after: 200 },
        children: [new TextRun({ text: "祝你面试顺利，成功上岸！", bold: true, size: 28, font: "楷体", color: "C41E3A" })]
      }),
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("C:\\Users\\a1206\\WorkBuddy\\20260409140758\\02-面试人物素材大全（含事迹和用法）.docx", buffer);
  console.log("人物素材文档创建成功！");
});
