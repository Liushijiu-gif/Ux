import { ProjectSummary, ProjectDetailsCollection } from '../types/project';
import { 
  projectCoverImages,
  neteaseProjectImages,
  xmsProjectImages,
  apolloProjectImages,
  sigmaProjectImages,
  bedrockDesignImages,
  bedrockIconImages,
  neteaseOaImages
} from '../components/project-images/image-imports';

// 项目列表数据
export const projectsData: ProjectSummary[] = [
  {
    id: 1,
    title: '网易OA系统AI助手探索',
    category: 'AI技术应用',
    description: '基于大语言模型的智能办公助手，为企业员工提供智能问答、流程指导、智能填单、问题检测等服务。',
    image: projectCoverImages.netease,
    tags: ['AI助手', '自然语言处理', '企业办公', '智能问答']
  },
  {
    id: 9,
    title: '网易OA系统AI助手体验优化',
    category: 'AI技术应用',
    description: '针对网易OA系统AI助手的用户体验深度优化项目，通过用户研究和交互设计改进，显著提升智能助手的易用性和用户满意度。',
    image: projectCoverImages.neteaseOa,
    tags: ['体验优化', 'AI助手', '交互设计', '用户研究', '企业级产品']
  },
  {
    id: 2,
    title: 'XMS低代码平台',
    category: '企业级产品',  
    description: '面向企业的低代码开发平台，支持可视化界面设计，快速构建应用、数据表和表单。',
    image: projectCoverImages.xms,
    tags: ['低代码', '可视化开发', '拖拽设计', '流程引擎']
  },
  {
    id: 3,
    title: 'Apollo 财务分摊系统',
    category: '企业级产品',
    description: '通过可视化的流程设计，将复杂的财务分摊业务转化为清晰易懂的流程节点，帮助财务人员提高工作效率。',
    image: projectCoverImages.apollo,
    tags: ['财务管理', '成本核算', '数据分析', '报表系统']
  },
  {
    id: 4,
    title: 'Sigma 游戏管理与分析系统',
    category: '企业级产品',
    description: '游戏成本及收入数据分析平台，提供成本营收统计服务。',
    image: projectCoverImages.sigma,
    tags: ['游戏分析', '数据可视化', '用户画像', '运营工具']
  },
  {
    id: 5,
    title: 'Bedrock 设计中台',
    category: '设计系统',
    description: '企业级设计中台系统，统一设计规范、组件库管理和设计资源分发，提升设计效率。',
    image: projectCoverImages.bedrockDesign,
    tags: ['设计系统', '组件库', '设计规范', '协作工具']
  },
  {
    id: 6,
    title: 'Bedrock 图标库 3.0',
    category: '设计系统',
    description: '新一代企业图标资源管理系统，支持图标搜索、分类管理、批量导出和版本控制功能。',
    image: projectCoverImages.bedrockIcon,
    tags: ['图标管理', '资源库', '版本控制', 'SVG优化']
  },
  {
    id: 7,
    title: 'AI作品集网站设计',
    category: '个人创作',
    description: '个人作品集网站设计项目，展示设计师的创意能力和设计思维，体现对用户体验和视觉设计的深度理解。',
    image: projectCoverImages.aiWebsite,
    tags: ['个人作品集', '网站设计', '用户体验', '视觉设计']
  },
  {
    id: 8,
    title: 'Promote收集器',
    category: '个人创作',
    description: '创意设计工具项目，帮助设计师收集和整理灵感素材，提升设计工作效率和创意质量。',
    image: projectCoverImages.promoteCollector,
    tags: ['设计工具', '素材收集', '创意管理', '效率工具']
  },

];

// 完整项目详情数据
export const projectDetails: ProjectDetailsCollection = {
  1: {
    id: 1,
    title: '网易OA系统AI助手探索',
    category: 'AI技术应用',
    description: '基于大语言模型的智能办公助手，为企业员工提供智能问答、流程指导、智能填单、问题检测等服务。',
    image: projectCoverImages.netease,
    tags: ['AI助手', '自然语言处理', '企业办公', '智能问答', '大语言模型'],
    duration: '6个月',
    team: '12人团队',
    role: 'UX设计师',
    year: '2024年',
    client: '网易科技有限公司',
    overview: '网易OA系统AI助手是基于大语言模型技术的企业级智能办公解决方案，旨在通过人工智能技术提升企业员工的办公效率和工作体验。项目结合了自然语言处理、机器学习和用户体验设计，为企业用户提供智能问答、流程指导、智能填单、问题检测、文档处理等全方位的AI辅助服务。该系统不仅能够理解用户的自然语言指令，还能根据企业的业务流程和规范，为用户提供个性化的操作建议和自动化处理方案。通过深度学习和持续优化，AI助手能够不断提升服务质量，为企业数字化转型和智能化办公提供强有力的技术支撑。',
    challenge: '在企业级AI助手设计过程中，面临着多重复杂挑战：首先是用户需求的多样性和复杂性，不同部门、不同岗位的员工对AI助手的期望和使用方式差异很大，需要设计一套既统一又灵活的交互体验；其次是AI技术的不确定性和准确性问题，大语言模型虽然功能强大，但在特定业务场景下可能存在理解偏差或输出不准确的情况，需要设计有效的错误处理和用户引导机制；第三是企业数据安全和隐私保护要求，AI助手需要处理大量敏感的企业信息，必须确保数据的安全性和合规性；第四是系统集成的复杂性，需要与现有的OA系统、业务流程、权限管理等多个系统进行深度集成；最后是用户接受度和学习成本问题，如何让员工快速理解和信任AI助手，并愿意改变原有的工作习惯。',
    gallery: [
      neteaseProjectImages.projectContext,
      neteaseProjectImages.userJourney,
      neteaseProjectImages.designGoals,
      neteaseProjectImages.interactionFramework,
      neteaseProjectImages.smartForm,
      neteaseProjectImages.triggerPosition,
      neteaseProjectImages.awakening,
      neteaseProjectImages.expression,
      neteaseProjectImages.confirmation,
      neteaseProjectImages.feedback,
      neteaseProjectImages.guidelines,
      neteaseProjectImages.ruleDetection,
      neteaseProjectImages.speedReading,
      neteaseProjectImages.singleField,
      neteaseProjectImages.mobileFramework,
      neteaseProjectImages.mobileSingleField,
      neteaseProjectImages.mobilePageDisplay,
    ],
    processSteps: [],
    keyFeatures: [],
    results: [
      {
        metric: '用户满意度',
        value: '87%',
        description: '内测阶段用户满意度评分'
      },
      {
        metric: '效率提升',
        value: '35%',
        description: '文档处理效率平均提升幅度'
      },
      {
        metric: '使用率',
        value: '72%',
        description: '试点部门员工日活跃使用率'
      }
    ],
    nextSteps: [
      '优化AI助手的对话交互体验，支持更自然的语音和手势交互',
      '完善移动端用户界面，提升小屏幕设备的操作便利性',
      '建立用户行为分析体系，基于数据洞察持续优化交互流程',
      '增强个性化定制功能，为不同部门提供定制化的用户体验',
      '扩展无障碍设计，确保所有用户都能便捷使用AI助手功能'
    ],
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  2: {
    id: 2,
    title: 'XMS低代码平台',
    category: '企业级产品',
    description: '面向企业的低代码开发平台，支持可视化界面设计，快速构建应用、数据表和表单。',
    image: projectCoverImages.xms,
    tags: ['低代码', '可视化开发', '拖拽设计', '流程引擎', '企业应用'],
    duration: '8个月',
    team: '15人团队',
    role: 'UX设计师',
    year: '2023年',
    client: '企业内部项目',
    overview: '',
    challenge: '',
    gallery: [
      xmsProjectImages.projectBackground,
      xmsProjectImages.userAnalysis,
      xmsProjectImages.designGoals,
      xmsProjectImages.learningThreshold1,
      xmsProjectImages.learningThreshold2,
      xmsProjectImages.configurationEfficiency,
      xmsProjectImages.configurationMechanism,
      xmsProjectImages.learningThreshold3,
      xmsProjectImages.logoDesign,
    ],
    processSteps: [],
    keyFeatures: [],
    results: [
      {
        metric: '配置效率',
        value: '65%',
        description: '相比传统配置方式的效率提升'
      },
      {
        metric: '学习成本',
        value: '2天',
        description: '业务人员平均学习上手时间'
      },
      {
        metric: '应用交付',
        value: '80%',
        description: '应用交付速度提升幅度'
      }
    ],
    nextSteps: [
      '优化拖拽式界面设计，提升组件操作的直观性和流畅度',
      '完善用户引导体系，为新手用户提供更详细的交互指导',
      '增强移动端响应式设计，支持移动设备上的低代码开发体验',
      '建立用户反馈收集机制，持续优化平台的易用性和用户满意度',
      '设计更丰富的模板库和组件库，满足不同业务场景的用户需求'
    ],
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  3: {
    id: 3,
    title: 'Apollo 财务分摊系统',
    category: '企业级产品',
    description: '通过可视化的流程设计，将复杂的财务分摊业务转化为清晰易懂的流程节点，帮助财务人员提高工作效率。',
    image: projectCoverImages.apollo,
    tags: ['财务管理', '成本核算', '数据分析', '报表系统', '可视化流程'],
    duration: '10个月',
    team: '8人团队',
    role: 'UX设计师',
    year: '2022年',
    client: '企业内部项目',
    overview: '',
    challenge: '',
    gallery: [
      apolloProjectImages.projectBackground,
      apolloProjectImages.userExperienceMap,
      apolloProjectImages.designGoals,
      apolloProjectImages.learningThreshold1,
      apolloProjectImages.learningThreshold2,
      apolloProjectImages.detailPageStructure,
      apolloProjectImages.efficiencyFastDraw,
      apolloProjectImages.efficiencyAutoLayout,
      apolloProjectImages.helpDocumentation,
      apolloProjectImages.efficiencyAutoArrange,
      apolloProjectImages.efficiencyCreateCopy,
      apolloProjectImages.efficiencyBatchSelect,
      apolloProjectImages.efficiencyEditPath,
      apolloProjectImages.errorPreventionValidation,
      apolloProjectImages.errorPreventionCorrection,
      apolloProjectImages.connectionOptimization,
      apolloProjectImages.loginPageDesign,
      apolloProjectImages.dataAnalyticsAndFeedback,
    ],
    processSteps: [],
    keyFeatures: [],
    results: [
      {
        metric: '效率提升',
        value: '每月节省22人天',
        description: '通过系统化流程大幅提升工作效率'
      },
      {
        metric: '用户满意度',
        value: '3.89/5.0',
        description: '用户对系统整体体验的满意度评分'
      },
      {
        metric: '错误率',
        value: '95%',
        description: '分摊错误率降低幅度'
      }
    ],
    nextSteps: [
      '深化可视化流程编辑体验，提升流程图绘制的直观性和操作流畅度',
      '优化用户界面设计，简化复杂功能的操作路径和学习成本',
      '完善错误预防和引导修正机制，进一步降低用户操作失误率',
      '建立持续的用户体验研究体系，基于用户反馈持续迭代界面设计',
      '增强系统的响应式设计，支持多设备和多场景下的一致用户体验'
    ],
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  4: {
    id: 4,
    title: 'Sigma 游戏管理与分析系统',
    category: '企业级产品',
    description: '游戏成本及收入数据分析平台，提供成本营收统计服务。',
    image: projectCoverImages.sigma,
    tags: ['游戏分析', '数据可视化', '用户画像', '运营工具', '业务分析'],
    duration: '4个月',
    team: '6人团队',
    role: '产品设计师',
    year: '2021年',
    client: '企业内部项目',
    overview: '',
    challenge: '',
    gallery: [
      sigmaProjectImages.businessRequirements,
      sigmaProjectImages.problemAnalysis,
      sigmaProjectImages.userInsights,
      sigmaProjectImages.guidingObjectives,
      sigmaProjectImages.interactiveDemo,
      sigmaProjectImages.globalSearchFramework,
      sigmaProjectImages.highFrequencyOperationOptimization,
      sigmaProjectImages.homepageGlobalPerspective,
      sigmaProjectImages.roleSpecificGameProductList,
      sigmaProjectImages.detailPageLifecycleInformation,
      sigmaProjectImages.gameDetailReportDisplayOptimization,
      sigmaProjectImages.analysisReportDataTrends,
      sigmaProjectImages.loginPageDesign,
      sigmaProjectImages.onboardingGuide,
    ],
    processSteps: [],
    keyFeatures: [],
    results: [
      {
        metric: '数据查询效率',
        value: '300%',
        description: '相比传统方式的效率提升'
      },
      {
        metric: '屏效比优化',
        value: '28%',
        description: '屏幕显示密度提升幅度'
      },
      {
        metric: '新用户上手成功率',
        value: '95%',
        description: '通过新手指引系统的成功率'
      }
    ],
    nextSteps: [
      '深化专业视觉设计语言，建立更完整的品牌视觉识别系统',
      '优化新手指引的交互性，增加更多实际操作练习环节',
      '完善用户首次使用体验，提供更精准的用户画像和个性化推荐',
      '增强登录页的功能性，提供更多快速入口和最近访问记录',
      '建立用户使用行为分析，持续优化引导流程和核心功能体验'
    ],
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  5: {
    id: 5,
    title: 'Bedrock 设计中台',
    category: '设计系统',
    description: '企业级设计中台系统，统一设计规范、组件库管理和设计资源分发，提升设计效率。',
    image: projectCoverImages.bedrockDesign,
    tags: ['设计系统', '组件库', '设计规范', '协作工具', '企业级', '资源管理'],
    duration: '6个月',
    team: '10人团队',
    role: 'UI设计师',
    year: '2021年',
    client: '企业内部项目',
    overview: '在企业级设计系统的持续演进中，我作为核心 UI 设计成员，深度参与了组件库的迭代升级、体验维护以及业务组件的创新设计工作。通过新增高频需求组件、优化既有组件性能、全链路体验走查、升级富文本编辑器等方式，推动设计系统在业务场景中高效落地，同时保障产品体验的一致性与专业性。业务选择类组件：聚焦效率的场景化设计；既有组件维护：基于数据的精细化迭代；全链路体验走查：从设计到落地的闭环保障；富文本编辑器：从功能完善到体验升级',
    challenge: 'Bedrock组件库作为公司内部和外部项目的统一设计开发基础，在3.0版本更新中面临多重挑战。首先是28个核心组件的系统性优化，需要在保证向下兼容的前提下提升用户体验；其次是业务组件的标准化归纳，要解决各业务线选择操作繁琐、准确性低的问题；第三是建立可持续的组件质量保障机制，确保组件在8条核心业务线中的应用规范性；最后是富文本编辑器的全面重构，要解决格式兼容差、操作卡顿、高级功能缺失等历史遗留问题。整个项目需要在6个月内完成，同时保证现有产品的正常运行。',
    gallery: [
      bedrockDesignImages.componentIteration,
      bedrockDesignImages.businessComponents,
      bedrockDesignImages.experienceReview,
      bedrockDesignImages.richtextEditor,
      bedrockDesignImages.overview,
    ],
    processSteps: [
      {
        title: '基础组件的更新迭代',
        description: '针对组件库中28个核心组件，建立"季度体检+动态优化"机制，通过用户反馈收集、线上体验监测、业务适配性评估三维度数据，推动组件持续进化。针对"弹窗组件""按钮组件"等高频使用元素，根据品牌视觉升级需求，同步更新了圆角值、色值规范与hover状态动效，确保组件与整体设计语言保持一致性，减少跨页面的视觉跳跃感。对更新后的组件进行多轮用户测试，收集反馈并进行迭代优化。',
        image: bedrockDesignImages.componentIteration
      },
      {
        title: '业务组件的归纳整理',
        description: '为了解决业务系统中各类选择操作繁琐、准确性低的问题，我设计了人员选择、部门选择、地址选择、产品选择、合同选择、流程选择等一系列业务组件，每个组件都紧密贴合具体业务场景，实现了选择效率的大幅提升。编写详细的组件使用文档，提供清晰的使用指南和示例代码。',
        image: bedrockDesignImages.businessComponents
      },
      {
        title: '全链路体验走查',
        description: '建立"双周走查+版本复盘"机制，覆盖公司8条核心业务线的线上产品，重点检查组件应用规范性、交互逻辑一致性与视觉还原度。通过这种系统性的走查机制，确保设计系统在业务场景中的高效落地，保障产品体验的一致性与专业性。',
        image: bedrockDesignImages.experienceReview
      },
      {
        title: '富文本编辑器升级',
        description: '富文本编辑器作为公司内容生产类产品的核心工具，此前存在格式兼容差、操作卡顿、高级编辑功能缺失等问题。我从用户实际编辑场景出发，开展了系统性的优化工作，从功能完善到体验升级，全面提升了编辑器的性能和用户体验。',
        image: bedrockDesignImages.richtextEditor
      }
    ],
    keyFeatures: [
      {
        title: '系统化设计思维',
        description: '建立完整的设计系统框架，确保组件设计的一致性和系统性',
        icon: '🎨'
      },
      {
        title: '用户体验导向',
        description: '深度理解用户需求，设计符合用户期望的高质量组件',
        icon: '👥'
      },
      {
        title: '精细化视觉设计',
        description: '注重设计细节，确保每个组件都具备优秀的视觉表现',
        icon: '✨'
      },
      {
        title: '标准化设计流程',
        description: '建立规范的设计流程，提高设计效率和质量',
        icon: '🔄'
      },
      {
        title: '高效协作能力',
        description: '与开发团队紧密配合，确保设计方案的准确落地',
        icon: '🤝'
      },
      {
        title: '持续迭代优化',
        description: '基于用户反馈持续优化设计，保持组件的先进性',
        icon: '🚀'
      }
    ],
    results: [
      {
        metric: '组件设计数量',
        value: '150+',
        description: '维护和新增设计的UI组件总数'
      },
      {
        metric: '设计一致性',
        value: '95%',
        description: '组件库在各产品线中的设计一致性'
      },
      {
        metric: '设计效率提升',
        value: '70%',
        description: '相比之前设计师的工作效率提升'
      }
    ],
    nextSteps: [
      '智能化用户体验研究，建立基于数据驱动的组件优化机制',
      '探索新的设计趋势和技术，保持组件库的先进性和竞争力',
      '建立设计知识库，积累和分享组件设计的最佳实践和经验'
    ],
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  6: {
    id: 6,
    title: 'Bedrock 图标库 3.0',
    category: '设计系统',
    description: '新一代企业图标资源管理系统，支持图标搜索、分类管理、批量导出和版本控制功能。',
    image: projectCoverImages.bedrockIcon,
    tags: ['图标管理', '资源库', '版本控制', 'SVG优化', '智能搜索', '批量操作'],
    duration: '3个月',
    team: '4人团队',
    role: '产品设计师',
    year: '2020年',
    client: '企业内部项目',
    overview: 'Bedrock图标库3.0是一个专注于图标设计标准化和一致性原则的企业级图标管理系统。该项目通过建立系统性的图标设计方法论，从基础的设计规范制定到高级的一致性原则应用，形成了一套完整的9步设计标准化流程。项目核心在于通过科学的设计原则指导，确保每个图标都具备良好的易识别性、鲜明的风格特色和严格的一致性标准。特别是在一致性原则的应用上，我们建立了从大小统一到比例统一的渐进式设计方法，将相关的设计原则有机结合，形成了更加逻辑清晰、易于理解和执行的设计体系。最终通过标准化的操作流程，确保每个图标的制作都能严格遵循既定的设计标准，为企业建立了高质量、可持续的图标生态系统。',
    challenge: '在图标设计的标准化过程中，我们面临着多重设计挑战：首先是设计原则的系统性问题，如何建立一套既科学又实用的图标设计标准，确保设计师能够准确理解并执行；其次是一致性原则的层次化管理，不同的一致性要求（大小、比例、圆角、粗细、间距）之间存在内在联系，需要合理排序以便设计师循序渐进地掌握；第三是设计标准与实际应用的平衡，既要保证严格的标准化要求，又要允许一定程度的灵活性来适应不同的业务场景；第四是设计流程的可操作性，如何将复杂的设计理论转化为清晰可执行的操作步骤；最后是设计质量的可控性，如何通过标准化流程确保每个图标都能达到统一的质量水准。这些挑战要求我们不仅要有深厚的设计理论基础，还要具备强大的流程设计和标准制定能力。',
    gallery: [
      bedrockIconImages.standardsAndGuidelines,
      bedrockIconImages.identifiabilityPrinciple,
      bedrockIconImages.styleCharacteristics,
      bedrockIconImages.sizeConsistency,
      bedrockIconImages.proportionConsistency,
    ],
    processSteps: [
      {
        title: '设计标准与规范制定',
        description: '制定统一的图标设计标准和使用规范，包括视觉风格、尺寸体系、命名规则、文件格式等。确保所有图标在视觉上保持一致，在技术上符合各平台要求。建立三大核心设计原则：易识别、有特色、一致性，为后续的图标设计和管理提供明确的指导方向。',
        image: bedrockIconImages.standardsAndGuidelines
      },
      {
        title: '易识别性原则实施',
        description: '主要通过贴合大众认知与物理世界映射、保证视觉清晰来实现。从语义层面上，规范为不同类型图标设定对应模板，如正圆形模板适用于时钟、播放/暂停等符合大众对圆形关联事物认知的图标，横向矩形模板对应手机、文件等现实中多为矩形的物品，遵循了物理世界映射和大众认知惯例。视觉上，24x24px的画板尺寸、20x20px的实际绘制区域以及明确的线条粗细（2px）和间距规范，确保图标既不会因过小过细而看不清，也不会因元素拥挤或无关元素过多导致识别混乱，提升了视觉易读性。',
        image: bedrockIconImages.identifiabilityPrinciple
      },
      {
        title: '风格特色定义',
        description: '指的是图标风格，是可爱/硬朗/还是传统等，需要根据品牌的调性去选择，可根据品牌调性进一步强化风格特征——若追求硬朗风格，可保持清晰的线条和明确的圆角对比；若偏向可爱风格，可在统一规范下适当调整细节以呼应品牌气质，使图标在符合规范的同时展现独特风格。由于这套图标是要用在B端系统中的，所以采用简洁硬朗的风格，确保在专业工作环境中具有良好的识别度和使用体验。',
        image: bedrockIconImages.styleCharacteristics
      },
      {
        title: '一致性原则：大小统一',
        description: '在图标绘制规范中，规定系统图标统一采用24x24px的画板制作，实际绘制区域为20x20px。这体现了设计中的一致性原则。一致性原则要求在同一系统或产品中，相似功能或同类别的元素应保持统一的外观和行为。大小统一能让用户在识别和使用图标时，形成稳定的视觉认知模式，减少因图标大小差异带来的认知负担。例如，在应用程序的导航栏中，所有功能图标大小一致，用户无需花费额外精力去适应不同大小图标，可快速定位所需功能，提升交互效率。',
        image: bedrockIconImages.sizeConsistency
      },
      {
        title: '一致性原则：比例统一',
        description: '不同形状的图标通过特定的轮廓尺寸保持视觉平衡，如正圆20px、三角22px、正方18px等，这遵循了设计中的比例与尺度原则。比例与尺度原则关注元素之间以及元素与整体之间的大小关系。在图标绘制中，确保比例统一能使各种形状的图标在视觉上看起来体量相近，不会因为形状差异而导致某个图标在视觉上过于突出或过于弱小。例如，尽管圆形和三角形的几何形状不同，但通过合理的比例设定，它们在图标系统中能保持和谐的视觉关系，共同构成协调统一的视觉界面，提升用户对整个图标体系的视觉接受度与审美感受。',
        image: bedrockIconImages.proportionConsistency
      }
    ],
    keyFeatures: [],
    results: [
      {
        metric: '绘制图标数量',
        value: '1700+',
        description: '通过9步标准化流程成功绘制的高质量图标总数'
      },
      {
        metric: '设计标准化程度',
        value: '98%',
        description: '通过9步流程实现的图标设计标准化覆盖率'
      },
      {
        metric: '一致性原则执行率',
        value: '96%',
        description: '五大一致性原则在图标制作中的严格执行率'
      }
    ],
    nextSteps: [
      '建立设计标准的自动化检测工具，通过技术手段确保每个图标都符合9步流程要求',
      '完善设计培训体系，将9步标准化流程推广到更多设计团队和外部合作伙伴',
      '建立图标设计质量评估模型，基于一致性原则建立量化的质量评价标准',
      '开发设计标准的版本管理系统，支持设计规范的迭代升级和历史版本追溯',
      '探索AI辅助设计标准化，研究如何通过人工智能技术自动化执行设计原则和流程检查'
    ],
    liveUrl: '#',
    caseStudyUrl: '#'
  },

  9: {
    id: 9,
    title: '网易OA系统AI助手体验优化',
    category: 'AI技术应用',
    description: '针对网易OA系统AI助手的用户体验深度优化项目，通过用户研究和交互设计改进，显著提升智能助手的易用性和用户满意度。',
    image: projectCoverImages.neteaseOa,
    tags: ['体验优化', 'AI助手', '交互设计', '用户研究', '企业级产品'],
    duration: '4个月',
    team: '5人团队',
    role: 'UX设计师、用户研究',
    year: '2024年',
    client: '网易集团',
    overview: '网易OA系统AI助手体验优化项目是一个专注于提升企业级AI助手用户体验的深度优化项目。该项目通过系统性的用户研究、交互设计改进和体验评估，全面提升了网易OA系统中AI助手的易用性、准确性和用户满意度。项目涵盖了从用户行为分析、问题识别、解决方案设计到效果验证的完整优化流程，为企业级AI助手的体验设计提供了宝贵的实践经验和设计指导。',
    challenge: '在企业级OA系统中，AI助手的用户体验优化面临着多重挑战：首先是用户群体的多样性，不同部门、不同职位的员工对AI助手的使用习惯和期望差异很大；其次是功能复杂性，OA系统涉及流程审批、信息查询、任务管理等多个业务场景，需要AI助手能够准确理解并响应各类需求；第三是交互效率要求，在快节奏的办公环境中，用户对AI助手的响应速度和准确性有很高期望；第四是系统集成挑战，需要确保AI助手与现有OA系统的无缝集成；最后是持续优化机制，如何建立有效的用户反馈收集和体验迭代机制是项目的关键挑战。',
    gallery: [
      neteaseOaImages.image1,
      neteaseOaImages.image2,
      neteaseOaImages.image3,
      neteaseOaImages.image4,
      neteaseOaImages.image5,
      neteaseOaImages.image6,
      neteaseOaImages.image7,
      neteaseOaImages.image8,
      neteaseOaImages.image9,
      neteaseOaImages.image10,
    ],
    processSteps: [],
    keyFeatures: [],
    results: [
      {
        metric: '用户满意度',
        value: '91%',
        description: '优化后用户满意度评分'
      },
      {
        metric: '任务完成率',
        value: '78%',
        description: '用户首次尝试成功完成任务的比例'
      },
      {
        metric: '使用频率',
        value: '2.3倍',
        description: '相比优化前的使用频率提升'
      }
    ],
    nextSteps: [
      '基于用户反馈进一步优化语音交互功能，提升自然语言理解准确性',
      '扩展AI助手的个性化服务能力，为不同用户群体提供定制化体验',
      '建立更完善的用户行为分析体系，实现持续的体验优化迭代',
      '探索多模态交互方式，结合语音、文字、图像等多种交互形式',
      '推广优化经验到其他企业产品，建立标准化的AI助手体验设计规范'
    ],
    liveUrl: '#',
    caseStudyUrl: '#'
  },

  7: {
    id: 7,
    title: 'AI作品集网站设计',
    category: '个人创作',
    description: '个人作品集网站设计项目，展示设计师的创意能力和设计思维，体现对用户体验和视觉设计的深度理解。',
    image: projectCoverImages.aiWebsite,
    tags: ['个人作品集', '网站设计', '用户体验', '视觉设计'],
    duration: '3个月',
    team: '个人项目',
    role: 'UX设计师、UI设计师',
    year: '2024年',
    client: '个人项目',
    overview: 'AI作品集网站设计是一个展示设计师创意能力和设计思维的个人项目。该项目通过现代化的网页设计技术，结合用户体验设计原则，创建了一个既美观又实用的个人作品集网站。项目体现了设计师对用户体验、视觉设计、交互设计和前端技术的综合理解，展示了从概念构思到最终实现的完整设计流程。',
    challenge: '在个人作品集网站设计中，面临着多个设计挑战：首先是个人品牌的塑造，如何在众多设计师中突出自己的特色和专业能力；其次是内容的组织展示，需要将不同类型的作品项目以清晰、吸引人的方式呈现给访客；第三是用户体验的平衡，既要展示设计能力，又要确保网站本身的用户体验优秀；第四是技术实现的可行性，需要确保设计创意能够在实际开发中完美实现；最后是响应式设计的挑战，需要确保网站在各种设备上都能提供良好的浏览体验。',
    gallery: [
      '/images/projects/ai-website/overview.png',
      '/images/projects/ai-website/design-process.png',
      '/images/projects/ai-website/user-research.png',
      '/images/projects/ai-website/wireframes.png',
      '/images/projects/ai-website/visual-design.png',
      '/images/projects/ai-website/prototype.png',
      '/images/projects/ai-website/responsive-design.png',
      '/images/projects/ai-website/performance.png',
      '/images/projects/ai-website/accessibility.png',
      '/images/projects/ai-website/final-result.png',
    ],
    processSteps: [
      {
        title: '需求分析与用户研究',
        description: '深入分析个人作品集网站的目标用户需求，包括潜在雇主、客户和同行设计师的浏览习惯和期望。通过用户访谈和竞品分析，确定网站的核心功能和信息架构。',
        image: '/images/projects/ai-website/user-research.png'
      },
      {
        title: '信息架构与内容规划',
        description: '设计清晰的信息架构，规划网站的主要页面结构，包括首页、作品展示、关于我、联系方式等。确定内容的优先级和展示方式，确保用户能够快速找到所需信息。',
        image: '/images/projects/ai-website/information-architecture.png'
      },
      {
        title: '线框图与交互设计',
        description: '创建详细的线框图，定义页面的布局结构和交互流程。设计用户浏览作品、了解设计师背景、联系设计师等关键任务的交互路径，确保用户体验流畅自然。',
        image: '/images/projects/ai-website/wireframes.png'
      },
      {
        title: '视觉设计与品牌塑造',
        description: '制定视觉设计规范，包括色彩方案、字体选择、图标设计等。通过视觉设计体现个人品牌特色，创造独特而专业的视觉印象，同时确保设计的现代感和专业性。',
        image: '/images/projects/ai-website/visual-design.png'
      },
      {
        title: '原型制作与用户测试',
        description: '制作高保真原型，进行用户测试以验证设计方案的可行性。收集用户反馈，优化交互细节和视觉呈现，确保网站能够有效传达设计师的专业能力和个人特色。',
        image: '/images/projects/ai-website/prototype.png'
      },
      {
        title: '开发实现与性能优化',
        description: '将设计方案转化为实际可用的网站，确保代码质量和性能表现。优化页面加载速度、响应式适配、无障碍访问等关键指标，提供优秀的用户体验。',
        image: '/images/projects/ai-website/development.png'
      }
    ],
    keyFeatures: [
      {
        title: '响应式设计',
        description: '采用移动优先的设计理念，确保网站在各种设备上都能提供优秀的浏览体验。通过弹性布局和自适应组件，实现从手机到桌面的完美适配。',
        image: '/images/projects/ai-website/responsive-design.png'
      },
      {
        title: '作品展示优化',
        description: '设计直观的作品展示界面，支持图片预览、项目详情、技术说明等多种展示方式。通过合理的视觉层次和交互设计，让访客能够快速了解项目价值和设计思路。',
        image: '/images/projects/ai-website/portfolio-showcase.png'
      },
      {
        title: '性能优化',
        description: '采用现代化的前端技术栈，实现快速的页面加载和流畅的交互体验。通过图片优化、代码分割、缓存策略等技术手段，确保网站的高性能表现。',
        image: '/images/projects/ai-website/performance.png'
      },
      {
        title: '无障碍设计',
        description: '遵循WCAG无障碍设计标准，确保网站对所有用户都友好可访问。包括语义化HTML、键盘导航支持、屏幕阅读器兼容等无障碍功能。',
        image: '/images/projects/ai-website/accessibility.png'
      }
    ],
    results: [
      {
        metric: '页面加载速度',
        value: '<2s',
        description: '网站平均加载时间'
      },
      {
        metric: '用户停留时间',
        value: '3.5分钟',
        description: '访客平均停留时间'
      },
      {
        metric: '作品展示效果',
        value: '95%',
        description: '作品项目展示的完整性和吸引力评分'
      }
    ],
    nextSteps: [
      '增加更多交互式元素，提升网站的参与度和趣味性',
      '优化移动端体验，确保在小屏幕设备上的最佳浏览效果',
      '添加作品项目的详细案例研究，展示设计思路和过程',
      '集成博客功能，分享设计思考和行业见解',
      '建立访客反馈收集机制，持续优化网站体验'
    ],
    liveUrl: '#',
    caseStudyUrl: '#'
  },

  8: {
    id: 8,
    title: 'Promote收集器',
    category: '个人创作',
    description: '创意设计工具项目，帮助设计师收集和整理灵感素材，提升设计工作效率和创意质量。',
    image: projectCoverImages.promoteCollector,
    tags: ['设计工具', '素材收集', '创意管理', '效率工具'],
    duration: '2个月',
    team: '个人项目',
    role: '产品设计师、开发者',
    year: '2024年',
    client: '个人项目',
    overview: 'Promote收集器是一个专为设计师打造的创意素材收集和管理工具。该项目旨在解决设计师在日常工作中面临的灵感收集、素材整理和创意管理等问题，通过直观的用户界面和强大的功能特性，帮助设计师更高效地收集、组织和利用设计灵感，从而提升设计工作效率和创意质量。',
    challenge: '在设计工具类产品中，面临着多个技术和管理挑战：首先是用户需求的多样性，不同设计师的工作习惯和需求差异很大，需要设计灵活且个性化的解决方案；其次是素材管理的复杂性，需要处理各种格式的设计文件、图片、链接等不同类型的内容；第三是用户体验的流畅性，工具类产品需要确保操作简单直观，不增加用户的学习成本；第四是数据同步和备份，需要确保用户收集的素材能够安全保存和跨设备同步；最后是性能优化，需要确保在处理大量素材时保持良好的响应速度。',
    gallery: [],
    processSteps: [],
    keyFeatures: [],
    results: [
      {
        metric: '素材收集效率',
        value: '提升60%',
        description: '相比传统方式的素材收集效率提升'
      },
      {
        metric: '创意整理时间',
        value: '减少45%',
        description: '素材整理和分类时间减少比例'
      },
      {
        metric: '用户满意度',
        value: '88%',
        description: '内测用户满意度评分'
      }
    ],
    nextSteps: [
      '增加AI智能分类功能，自动识别和归类收集的素材',
      '开发团队协作功能，支持多人共享和协作管理素材库',
      '优化移动端体验，支持随时随地收集和管理素材',
      '集成更多第三方平台，扩展素材来源和分享渠道',
      '建立用户社区，促进设计师之间的素材分享和交流'
    ],
    liveUrl: '#',
    caseStudyUrl: '#'
  }
};