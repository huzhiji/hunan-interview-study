const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, BorderStyle, Table, TableRow, TableCell, WidthType, ShadingType } = require('docx');
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
        children: [new TextRun({ text: "面试必背金句大全", bold: true, size: 48, font: "黑体", color: "1E3A5F" })]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 600 },
        children: [new TextRun({ text: "（含用法示例·直接背诵版）", size: 28, font: "宋体", color: "666666" })]
      }),

      // 使用说明
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("使用说明")]
      }),
      new Paragraph({
        spacing: { before: 100, after: 50 },
        children: [new TextRun({ text: "【背诵方法】", bold: true, size: 24, color: "C41E3A" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "1. 每个主题选2-3句最顺口的背诵，不要贪多", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "2. 每天早晚各读3遍，坚持一周就能脱口而出", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "3. 结合实际题目练习使用，做到信手拈来", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 100, after: 200 },
        children: [new TextRun({ text: "【标注说明】", bold: true, size: 24, color: "C41E3A" }), new TextRun({ text: "★★★=必背（使用率最高） ★★=重点背诵 ★=了解即可", size: 22 })]
      }),

      // ========== 第一板块：理想信念类 ==========
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("第一板块 理想信念类")]
      }),
      new Paragraph({
        spacing: { before: 100, after: 200 },
        children: [new TextRun({ text: "适用题型：", bold: true, size: 24 }), new TextRun({ text: "自我认知、综合分析、演讲题", size: 24 })]
      }),

      // 金句1
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("★★★ 金句一")]
      }),
      new Paragraph({
        spacing: { before: 100, after: 100 },
        shading: { fill: "FFF8DC", type: ShadingType.CLEAR },
        children: [new TextRun({ text: ""权为民所用，情为民所系，利为民所谋。"", bold: true, size: 28, font: "楷体", color: "1E3A5F" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "【出处】", bold: true, size: 22, color: "2E5090" }), new TextRun({ text: "胡锦涛同志提出的重要论断", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 100 },
        children: [new TextRun({ text: "【核心含义】", bold: true, size: 22, color: "2E5090" }), new TextRun({ text: "权力来自人民，必须用来为人民服务；情感要贴近人民；利益要为人民谋取", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "【用法示例】", bold: true, size: 22, color: "C41E3A" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "示例1（自我认知题）：", italics: true, size: 22, color: "666666" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 100 },
        children: [new TextRun({ text: ""我之所以报考公务员，是因为我始终牢记'权为民所用，情为民所系，利为民所谋'。作为一名年轻人，我希望能够用自己的知识和能力，真正为人民群众办实事、解难题。"", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "示例2（综合分析题-谈干部作风）：", italics: true, size: 22, color: "666666" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 200 },
        children: [new TextRun({ text: ""对于题目中提到的部分干部脱离群众的现象，我认为根本原因在于忘记了'权为民所用，情为民所系，利为民所谋'的初心。权力是人民赋予的，必须用来为人民服务..."", size: 22 })]
      }),

      // 金句2
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("★★★ 金句二")]
      }),
      new Paragraph({
        spacing: { before: 100, after: 100 },
        shading: { fill: "FFF8DC", type: ShadingType.CLEAR },
        children: [new TextRun({ text: ""心中有阳光，脚下有力量，为了理想能坚持、不懈怠，才能创造无愧于时代的人生。"", bold: true, size: 28, font: "楷体", color: "1E3A5F" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "【出处】", bold: true, size: 22, color: "2E5090" }), new TextRun({ text: "习近平总书记在知识分子、劳动模范、青年代表座谈会上的讲话", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 100 },
        children: [new TextRun({ text: "【核心含义】", bold: true, size: 22, color: "2E5090" }), new TextRun({ text: "理想信念是精神支柱，只有坚定信念、脚踏实地、持之以恒，才能实现人生价值", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "【用法示例】", bold: true, size: 22, color: "C41E3A" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "示例（演讲题/自我认知）：", italics: true, size: 22, color: "666666" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 200 },
        children: [new TextRun({ text: ""正如总书记所说，'心中有阳光，脚下有力量'。作为新时代的青年人，我们要坚定理想信念，扎根基层、服务群众，在平凡的岗位上创造不平凡的业绩..."", size: 22 })]
      }),

      // 金句3
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("★★ 金句三")]
      }),
      new Paragraph({
        spacing: { before: 100, after: 100 },
        shading: { fill: "F0F8FF", type: ShadingType.CLEAR },
        children: [new TextRun({ text: ""当官就不要发财，发财就不要当官。"", bold: true, size: 28, font: "楷体", color: "1E3A5F" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "【出处】", bold: true, size: 22, color: "2E5090" }), new TextRun({ text: "习近平总书记系列重要讲话", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 100 },
        children: [new TextRun({ text: "【核心含义】", bold: true, size: 22, color: "2E5090" }), new TextRun({ text: "当官与发财是两条道，不能既想当官又想发财，要廉洁自律", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "【用法示例】", bold: true, size: 22, color: "C41E3A" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 200 },
        children: [new TextRun({ text: ""在面对诱惑时，我会时刻牢记总书记的告诫：'当官就不要发财，发财就不要当官'。作为一名公务员，必须守住廉洁底线，清清白白做人、干干净净做事..."", size: 22 })]
      }),

      // ========== 第二板块：为民服务类 ==========
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("第二板块 为民服务类")]
      }),
      new Paragraph({
        spacing: { before: 100, after: 200 },
        children: [new TextRun({ text: "适用题型：", bold: true, size: 24 }), new TextRun({ text: "综合分析、人际关系、应急应变、组织管理", size: 24 })]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("★★★ 金句一")]
      }),
      new Paragraph({
        spacing: { before: 100, after: 100 },
        shading: { fill: "FFF8DC", type: ShadingType.CLEAR },
        children: [new TextRun({ text: ""民之所忧，我必念之；民之所盼，我必行之。"", bold: true, size: 28, font: "楷体", color: "1E3A5F" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "【出处】", bold: true, size: 22, color: "2E5090" }), new TextRun({ text: "习近平总书记2022年新年贺词", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 100 },
        children: [new TextRun({ text: "【核心含义】", bold: true, size: 22, color: "2E5090" }), new TextRun({ text: "人民关心的就是我们关注的，人民期盼的就是我们要做的", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "【用法示例】", bold: true, size: 22, color: "C41E3A" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "示例（应急应变-群众投诉）：", italics: true, size: 22, color: "666666" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 200 },
        children: [new TextRun({ text: ""面对群众的诉求，我会牢记'民之所忧，我必念之；民之所盼，我必行之'。首先耐心倾听群众诉求，然后迅速核实情况，在三个工作日内给予明确答复..."", size: 22 })]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("★★★ 金句二")]
      }),
      new Paragraph({
        spacing: { before: 100, after: 100 },
        shading: { fill: "FFF8DC", type: ShadingType.CLEAR },
        children: [new TextRun({ text: ""江山就是人民，人民就是江山，打江山、守江山，守的是人民的心。"", bold: true, size: 28, font: "楷体", color: "1E3A5F" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "【出处】", bold: true, size: 22, color: "2E5090" }), new TextRun({ text: "习近平总书记在庆祝中国共产党成立100周年大会上的讲话", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 100 },
        children: [new TextRun({ text: "【核心含义】", bold: true, size: 22, color: "2E5090" }), new TextRun({ text: "人民是历史的创造者，是决定党和国家前途命运的根本力量", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "【用法示例】", bold: true, size: 22, color: "C41E3A" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 200 },
        children: [new TextRun({ text: ""总书记深刻指出：'江山就是人民，人民就是江山'。作为基层公务员，我们的工作直接关系群众切身利益，必须把群众满意作为最高标准..."", size: 22 })]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("★★ 金句三")]
      }),
      new Paragraph({
        spacing: { before: 100, after: 100 },
        shading: { fill: "F0F8FF", type: ShadingType.CLEAR },
        children: [new TextRun({ text: ""没有一种根基，比扎根于人民更坚实；没有一种力量，比从群众中汲取更强大。"", bold: true, size: 28, font: "楷体", color: "1E3A5F" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "【用法示例】", bold: true, size: 22, color: "C41E3A" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 200 },
        children: [new TextRun({ text: ""要做好基层工作，必须深入群众。正如那句话所说：'没有一种根基，比扎根于人民更坚实'。我会主动走进田间地头，倾听群众心声，解决实际问题..."", size: 22 })]
      }),

      // ========== 第三板块：法治执法类 ==========
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("第三板块 法治执法类（执法岗必背）")]
      }),
      new Paragraph({
        spacing: { before: 100, after: 200 },
        children: [new TextRun({ text: "适用题型：", bold: true, size: 24 }), new TextRun({ text: "综合分析、应急应变、情景模拟（执法场景）", size: 24 })]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("★★★ 金句一")]
      }),
      new Paragraph({
        spacing: { before: 100, after: 100 },
        shading: { fill: "FFF8DC", type: ShadingType.CLEAR },
        children: [new TextRun({ text: ""法无授权不可为，法定职责必须为。"", bold: true, size: 28, font: "楷体", color: "1E3A5F" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 100 },
        children: [new TextRun({ text: "【核心含义】", bold: true, size: 22, color: "2E5090" }), new TextRun({ text: "没有法律授权不能乱作为，法律规定必须履行的职责不能不作为", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "【用法示例】", bold: true, size: 22, color: "C41E3A" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "示例（情景模拟-执法遇阻）：", italics: true, size: 22, color: "666666" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 200 },
        children: [new TextRun({ text: ""王总，我理解您的难处，但'法无授权不可为，法定职责必须为'。按照《食品安全法》规定，我们必须对经营场所进行检查，这是为了保障消费者的安全，也是对您负责..."", size: 22 })]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("★★★ 金句二")]
      }),
      new Paragraph({
        spacing: { before: 100, after: 100 },
        shading: { fill: "FFF8DC", type: ShadingType.CLEAR },
        children: [new TextRun({ text: ""执法要有力度，更要有温度。"", bold: true, size: 28, font: "楷体", color: "1E3A5F" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 100 },
        children: [new TextRun({ text: "【核心含义】", bold: true, size: 22, color: "2E5090" }), new TextRun({ text: "严格执法的同时要考虑情理，体现人文关怀", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "【用法示例】", bold: true, size: 22, color: "C41E3A" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 200 },
        children: [new TextRun({ text: ""在今后的执法工作中，我会坚持'执法要有力度，更要有温度'。对于首次轻微违法，以教育引导为主；对于严重违法，坚决依法查处，维护法律尊严..."", size: 22 })]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("★★★ 金句三")]
      }),
      new Paragraph({
        spacing: { before: 100, after: 100 },
        shading: { fill: "FFF8DC", type: ShadingType.CLEAR },
        children: [new TextRun({ text: ""法律的生命力在于实施，法律的权威也在于实施。"", bold: true, size: 28, font: "楷体", color: "1E3A5F" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "【出处】", bold: true, size: 22, color: "2E5090" }), new TextRun({ text: "习近平总书记关于全面依法治国的重要论述", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "【用法示例】", bold: true, size: 22, color: "C41E3A" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 200 },
        children: [new TextRun({ text: ""法律的生命力在于实施。作为市场监管执法人员，我们要严格依法履职，让每一部法律都落到实处，让每一次执法都经得起检验..."", size: 22 })]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("★★ 金句四")]
      }),
      new Paragraph({
        spacing: { before: 100, after: 100 },
        shading: { fill: "F0F8FF", type: ShadingType.CLEAR },
        children: [new TextRun({ text: ""法律面前人人平等。"", bold: true, size: 28, font: "楷体", color: "1E3A5F" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "【用法示例】", bold: true, size: 22, color: "C41E3A" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 200 },
        children: [new TextRun({ text: ""在执法过程中，我会坚持'法律面前人人平等'的原则，不管是大企业还是小商户，一视同仁，公正执法，维护市场公平竞争秩序..."", size: 22 })]
      }),

      // ========== 第四板块：实干担当类 ==========
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("第四板块 实干担当类")]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("★★★ 金句一")]
      }),
      new Paragraph({
        spacing: { before: 100, after: 100 },
        shading: { fill: "FFF8DC", type: ShadingType.CLEAR },
        children: [new TextRun({ text: ""空谈误国，实干兴邦。"", bold: true, size: 28, font: "楷体", color: "1E3A5F" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "【用法示例】", bold: true, size: 22, color: "C41E3A" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 200 },
        children: [new TextRun({ text: ""正如总书记强调的'空谈误国，实干兴邦'。对于这项工作任务，我不会停留在口头表态，而是会制定详细的工作计划，逐项落实..."", size: 22 })]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("★★★ 金句二")]
      }),
      new Paragraph({
        spacing: { before: 100, after: 100 },
        shading: { fill: "FFF8DC", type: ShadingType.CLEAR },
        children: [new TextRun({ text: ""一分部署，九分落实。"", bold: true, size: 28, font: "楷体", color: "1E3A5F" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "【用法示例】", bold: true, size: 22, color: "C41E3A" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 200 },
        children: [new TextRun({ text: ""'一分部署，九分落实'。方案制定只是第一步，关键在于执行。我会建立工作台账，明确责任分工，每周跟进进度，确保各项任务落到实处..."", size: 22 })]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("★★★ 金句三")]
      }),
      new Paragraph({
        spacing: { before: 100, after: 100 },
        shading: { fill: "FFF8DC", type: ShadingType.CLEAR },
        children: [new TextRun({ text: ""功成不必在我，功成必定有我。"", bold: true, size: 28, font: "楷体", color: "1E3A5F" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "【用法示例】", bold: true, size: 22, color: "C41E3A" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 200 },
        children: [new TextRun({ text: ""对于这项需要长期推进的工作，我会保持'功成不必在我'的境界和'功成必定有我'的担当，一任接着一任干，久久为功..."", size: 22 })]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("★★ 金句四")]
      }),
      new Paragraph({
        spacing: { before: 100, after: 100 },
        shading: { fill: "F0F8FF", type: ShadingType.CLEAR },
        children: [new TextRun({ text: ""天下难事，必作于易；天下大事，必作于细。"", bold: true, size: 28, font: "楷体", color: "1E3A5F" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "【出处】", bold: true, size: 22, color: "2E5090" }), new TextRun({ text: "《道德经》", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "【用法示例】", bold: true, size: 22, color: "C41E3A" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 200 },
        children: [new TextRun({ text: ""老子说：'天下难事，必作于易；天下大事，必作于细。'市场监管工作涉及千家万户，每一个细节都关系到群众切身利益，必须从细节抓起..."", size: 22 })]
      }),

      // ========== 第五板块：湖南特色类 ==========
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("第五板块 湖南特色类（高分亮点）")]
      }),
      new Paragraph({
        spacing: { before: 100, after: 200 },
        children: [new TextRun({ text: "⚠️ 重要提示：", bold: true, size: 24, color: "C41E3A" }), new TextRun({ text: "以下内容是湖南面试的加分项，体现湖湘文化和本土特色，建议必背！", size: 24 })]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("★★★ 金句一")]
      }),
      new Paragraph({
        spacing: { before: 100, after: 100 },
        shading: { fill: "FFF8DC", type: ShadingType.CLEAR },
        children: [new TextRun({ text: ""吃得苦、霸得蛮、耐得烦"——湖南精神", bold: true, size: 28, font: "楷体", color: "C41E3A" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 100 },
        children: [new TextRun({ text: "【含义解读】", bold: true, size: 22, color: "2E5090" }), new TextRun({ text: "吃得苦：艰苦奋斗；霸得蛮：敢闯敢拼；耐得烦：耐心细致", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "【用法示例】", bold: true, size: 22, color: "C41E3A" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 200 },
        children: [new TextRun({ text: ""作为湖南的基层干部，我会发扬'吃得苦、霸得蛮、耐得烦'的湖南精神，面对困难不退缩，面对挑战敢担当，在一线岗位上干出实绩..."", size: 22 })]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("★★★ 金句二")]
      }),
      new Paragraph({
        spacing: { before: 100, after: 100 },
        shading: { fill: "FFF8DC", type: ShadingType.CLEAR },
        children: [new TextRun({ text: ""心忧天下，敢为人先"——湖湘文化", bold: true, size: 28, font: "楷体", color: "C41E3A" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 100 },
        children: [new TextRun({ text: "【含义解读】", bold: true, size: 22, color: "2E5090" }), new TextRun({ text: "心系国家民族，勇于开拓创新", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "【用法示例】", bold: true, size: 22, color: "C41E3A" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 200 },
        children: [new TextRun({ text: ""湖湘文化倡导'心忧天下，敢为人先'。在推进市场监管创新工作中，我会敢于打破思维定势，探索新型监管模式..."", size: 22 })]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("★★ 金句三")]
      }),
      new Paragraph({
        spacing: { before: 100, after: 100 },
        shading: { fill: "F0F8FF", type: ShadingType.CLEAR },
        children: [new TextRun({ text: "屋场会——湖南基层治理特色模式", bold: true, size: 28, font: "楷体", color: "1E3A5F" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 100 },
        children: [new TextRun({ text: "【含义】", bold: true, size: 22, color: "2E5090" }), new TextRun({ text: "不设主席台、不念稿子，在屋场（院子）与群众面对面拉家常、讲政策", size: 22 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "【用法示例】", bold: true, size: 22, color: "C41E3A" })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 200 },
        children: [new TextRun({ text: ""在开展政策宣传时，我会借鉴湖南'屋场会'的经验，不设主席台，不念稿子，用方言和群众拉家常，把政策讲透..."", size: 22 })]
      }),

      // 背诵计划
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("背诵计划建议")]
      }),
      new Paragraph({
        spacing: { before: 100, after: 50 },
        children: [new TextRun({ text: "第一周：", bold: true, size: 24 }), new TextRun({ text: "背诵理想信念类（3句）+ 为民服务类（3句）", size: 24 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "第二周：", bold: true, size: 24 }), new TextRun({ text: "背诵法治执法类（4句）+ 湖南特色类（3句）", size: 24 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 50 },
        children: [new TextRun({ text: "第三周：", bold: true, size: 24 }), new TextRun({ text: "背诵实干担当类 + 全面复习", size: 24 })]
      }),
      new Paragraph({
        spacing: { before: 50, after: 200 },
        children: [new TextRun({ text: "第四周起：", bold: true, size: 24 }), new TextRun({ text: "每天快速过一遍，在练习中使用", size: 24 })]
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
  fs.writeFileSync("C:\\Users\\a1206\\WorkBuddy\\20260409140758\\01-面试必背金句大全（含用法示例）.docx", buffer);
  console.log("金句文档创建成功！");
});
