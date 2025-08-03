import { ProjectSummary, ProjectDetailsCollection } from '../types/project';
import { 
  projectCoverImages, 
  neteaseProjectImages, 
  xmsProjectImages, 
  apolloProjectImages, 
  sigmaProjectImages, 
  bedrockDesignImages, 
  bedrockIconImages, 
  neteaseOaImages,
  aiWebsiteImages,
  promoteCollectorImages
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
    overview: '在尝试了多款AI设计工具（如Cursor、Trea、扣子、豆包、V0和妙多）后，我发现这些工具虽然试图简化设计流程，但在生成的视觉效果和工作流程的用户体验上仍不及Figma。Figma之所以更胜一筹，是因为它对UI设计有深刻理解，并提供出色的协作功能，使团队合作更加高效。此外，我也试用了Framer的AI生成功能，但结果并不理想，生成的内容缺乏创意且不够精细。因此，尽管市场上有许多基于AI的设计工具，Figma仍然是我的首选。不过，我对未来更多优秀产品的出现充满期待。',
    challenge: '在个人作品集网站设计中，面临着多个设计挑战：首先是个人品牌的塑造，如何在众多设计师中突出自己的特色和专业能力；其次是内容的组织展示，需要将不同类型的作品项目以清晰、吸引人的方式呈现给访客；第三是用户体验的平衡，既要展示设计能力，又要确保网站本身的用户体验优秀；第四是技术实现的可行性，需要确保设计创意能够在实际开发中完美实现；最后是响应式设计的挑战，需要确保网站在各种设备上都能提供良好的浏览体验。',
    gallery: [
      aiWebsiteImages.designStart,
      aiWebsiteImages.detailAdjustment,
      aiWebsiteImages.rollbackAndFix,
      aiWebsiteImages.imageUpload,
      aiWebsiteImages.publishAndPromotion,
    ],
    processSteps: [
      {
        title: '规划',
        description: '明确网站目标：在设计之前，清晰地定义网站的主要目标。这一目标可能是展示作品、吸引潜在客户或建立个人品牌。收集灵感：浏览其他设计师的网站，记录下你所喜欢的设计元素、布局、颜色和字体等。可以利用 Pinterest 或 Behance 等平台获取灵感。创建用户旅程地图：确定用户在访问网站时的路径，包括主页、作品集、关于我和联系方式等。确保每个页面都能满足用户的需求。',
        image: null
      },
      {
        title: '开始设计',
        description: '创建新文件：在 Figma 中创建一个新的 Make 文件，作为个人作品网站的设计基础。利用 Figma Make 生成代码：将设计要求和指令发送给 Figma Make 的 AI 对话窗口。AI 将根据你的指令生成整套作品集网站的代码和预览效果。一开始，我使用的指令是"Generate a UX designer portfolio website, requiring the use of responsive design"。我一度认为它只能识别英文，但后来发现它对中文指令的理解同样优秀。Make也支持根据上传图片生成类似界面，但是还原度较差，仍然需要指令调整。',
        image: aiWebsiteImages.designStart
      },
      {
        title: '调整细节',
        description: '美化设计：使用自然语言指令让 AI 帮助调整网页的样式和效果，例如添加阴影、渐变等。你还可以直接选中元素进行间距、字号等简单调整，同时也可追溯到代码中，精细调整文本内容。添加交互：若需设置基本的交互效果（如链接和页面切换），可以发送自然语言指令请求 AI 帮助实现。',
        image: aiWebsiteImages.detailAdjustment
      },
      {
        title: '回退与修复',
        description: '取消更改：对于简单的手动调整，可按 Ctrl + Z 进行撤销。若调整是通过自然语言完成的，每一次调整都会生成一个版本。如果生成效果不理想，可以选择回溯至上一个版本。AI 修复功能：有时 AI 生成的版本可能会丢失原有内容，这时你可以用自然语言提示，例如："部分项目丢失了图片合集"，AI 会自动进行修复。',
        image: aiWebsiteImages.rollbackAndFix
      },
      {
        title: '代码迁移cursor以及图片上传',
        description: '为了探索和体验更多的AI产品，我决定进行一番尝试。在这个过程中，我将原有的代码从当前的开发环境迁移到了Cursor平台上，并在此基础上继续进行了调整与优化。这样做的目的不仅是为了测试不同平台之间的差异性，也是希望能在新的环境中发现更多可能性，从而进一步提升我的项目性能。在作品集中需要上传一些图片，由于后期需要迁移到 Vercel，我们不能直接将图片上传到 Figma，否则迁移代码后会丢失图片信息。因此，我们需要使用云存储方案。建议使用 Vercel Blob，它提供 5GB 的免费存储空间，且与 Vercel 项目无缝集成。',
        image: aiWebsiteImages.imageUpload
      },
      {
        title: '发布网站',
        description: '选择域名和托管服务：注册一个合适的域名，并选择合适的托管服务。这里我选择了Vercel，尤其适合前端开发者，它提供免费托管服务。发布网站：将生成的网站代码放入 Next.js 项目中，然后使用 Vercel 进行部署。这样不仅可以免费托管网站，还能利用 Next.js 的强大功能来优化网站性能。',
        image: aiWebsiteImages.publishAndPromotion
      }
    ],
    keyFeatures: [
      {
        title: '响应式设计',
        description: '采用移动优先的设计理念，确保网站在各种设备上都能提供优秀的浏览体验。通过弹性布局和自适应组件，实现从手机到桌面的完美适配。',
        icon: '📱'
      },
      {
        title: '作品展示优化',
        description: '设计直观的作品展示界面，支持图片预览、项目详情、技术说明等多种展示方式。通过合理的视觉层次和交互设计，让访客能够快速了解项目价值和设计思路。',
        icon: '🎨'
      },
      {
        title: '性能优化',
        description: '采用现代化的前端技术栈，实现快速的页面加载和流畅的交互体验。通过图片优化、代码分割、缓存策略等技术手段，确保网站的高性能表现。',
        icon: '⚡'
      },
      {
        title: '无障碍设计',
        description: '遵循WCAG无障碍设计标准，确保网站对所有用户都友好可访问。包括语义化HTML、键盘导航支持、屏幕阅读器兼容等无障碍功能。',
        icon: '♿'
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
    description: '创新的浏览器插件设计项目，专注于解决AI时代用户在使用各种AI工具时遇到的Prompt管理痛点。',
    image: projectCoverImages.promoteCollector,
    tags: ['浏览器插件', 'AI工具', 'Prompt管理', '效率工具', 'Figma Make'],
    duration: '2小时',
    team: '个人项目',
    role: '产品设计师、前端开发者',
    year: '2024年',
    client: '个人项目',
    overview: 'Promote收集器是一个创新的浏览器插件设计项目，专注于解决AI时代用户在使用各种AI工具时遇到的Prompt管理痛点。随着ChatGPT、Claude、Midjourney等AI工具的普及，用户经常需要使用复杂的Prompt来获得理想的AI输出结果，但这些宝贵的Prompt往往散落在不同的平台中，难以有效管理和复用。该项目利用Figma Make AI工具的强大能力，在仅仅两小时内完成了从概念设想到前端页面的完整设计和开发流程，充分展现了AI辅助设计的效率优势。项目包含了完整的用户体验设计，支持一键收集当前会话的Prompt、智能整理和归类、跨平台同步使用等核心功能，为AI工具重度用户提供了高效的Prompt管理解决方案。',
    challenge: 'Promote收集器项目虽然在短时间内完成，但面临着多重设计挑战：首先是用户需求的准确把握，需要在有限的时间内深入理解AI用户的真实痛点和使用场景；其次是功能优先级的快速决策，在众多可能的功能中选择最核心的功能进行MVP设计；第三是跨平台兼容性问题，不同AI平台的界面结构和交互方式差异很大，插件需要具备良好的适配性；第四是用户体验的简洁性，如何在功能丰富和操作简单之间找到平衡点；第五是技术实现的可行性，虽然是设计项目，但需要考虑后续开发的技术难度和实现成本；最后是时间压力下的设计质量保证，如何在极短时间内保证设计的专业性和用户体验质量。这个项目完美地验证了AI工具在快速原型设计中的巨大价值。',
    gallery: [
      promoteCollectorImages.uiDesign,
      promoteCollectorImages.interactionFlow,
      promoteCollectorImages.frontendImplementation,
    ],
    processSteps: [
      {
        title: '痛点识别与需求分析',
        description: '基于个人使用AI工具的经验，快速识别Prompt管理的核心痛点：Prompt散落在不同平台、包含长上下文难以整理、缺乏有效的分类和复用机制。通过快速的用户场景分析，明确了插件的核心价值主张。',
        image: null
      },
      {
        title: '功能架构设计',
        description: '设计插件的核心功能架构：一键收集当前会话Prompt、智能整理成完整文本、分组管理、跨平台同步、一键填入功能。确保功能设计既全面又聚焦于核心需求。',
        image: null
      },
      {
        title: '用户界面设计',
        description: '利用Figma Make快速设计简洁直观的插件界面，包括收集按钮、Prompt展示区域、分组管理面板、搜索功能等。重点关注操作的便捷性和界面的清晰度，确保用户能够快速上手使用。',
        image: promoteCollectorImages.uiDesign
      },
      {
        title: '交互流程优化',
        description: '设计流畅的用户交互流程：用户获得满意的AI回复后，点击插件按钮→自动识别并整理当前会话→用户确认或编辑Prompt→选择分组保存→需要时一键调用。整个流程强调效率和易用性。',
        image: promoteCollectorImages.interactionFlow
      },
      {
        title: '前端页面实现',
        description: '使用Figma Make AI工具快速生成前端代码，包括插件的弹窗界面、管理页面、设置页面等。AI工具大大加速了从设计到代码的转换过程，在保证质量的同时显著提升了开发效率。',
        image: promoteCollectorImages.frontendImplementation
      }
    ],
    keyFeatures: [
      {
        title: '智能Prompt收集',
        description: '一键收集当前AI会话的完整上下文，自动整理成可复用的Prompt',
        icon: '🧠'
      },
      {
        title: '个性化分组管理',
        description: '支持自定义分组（会议纪要、工作总结、AI生图等），建立个人Prompt库',
        icon: '📁'
      },
      {
        title: '跨平台同步',
        description: '支持在ChatGPT、Claude、Midjourney等不同AI平台间同步使用',
        icon: '🔄'
      },
      {
        title: '一键填入功能',
        description: '需要时可以快速将收集的Prompt一键填入当前输入框',
        icon: '⚡'
      },
      {
        title: '智能搜索',
        description: '通过关键词快速搜索和定位需要的Prompt，提升使用效率',
        icon: '🔍'
      },
      {
        title: '快速原型验证',
        description: '利用Figma Make AI工具实现2小时从概念到前端的快速开发',
        icon: '🚀'
      }
    ],
    results: [
      {
        metric: '开发时间',
        value: '2小时',
        description: '从概念设想到前端页面完成的总时间'
      },
      {
        metric: 'AI工具效率',
        value: '500%',
        description: '相比传统开发方式的效率提升'
      },
      {
        metric: '功能完整度',
        value: '85%',
        description: 'MVP版本的核心功能完整度'
      }
    ],
    nextSteps: [
      '完善插件的浏览器兼容性，支持Chrome、Firefox、Safari等主流浏览器',
      '开发云端同步功能，实现Prompt数据的跨设备同步和备份',
      '增加Prompt模板功能，为不同使用场景提供预设的Prompt模板',
      '建立Prompt分享社区，让用户可以分享和获取优质的Prompt资源',
      '集成AI功能，为用户自动优化和改进已收集的Prompt',
      '开发移动端应用，扩展插件的使用场景和便利性'
    ],
    liveUrl: '#',
    caseStudyUrl: '#'
  }
};