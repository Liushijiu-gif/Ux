import { ProjectSummary, ProjectDetailsCollection } from '../types/project';

// 使用占位图片的简化项目数据
export const projectsData: ProjectSummary[] = [
  {
    id: 1,
    title: '网易OA系统AI助手探索',
    category: 'AI技术应用',
    description: '基于大语言模型的智能办公助手，为企业员工提供智能问答、流程指导、智能填单、问题检测等服务。',
    image: 'https://via.placeholder.com/600x400?text=AI助手',
    tags: ['AI助手', '自然语言处理', '企业办公', '智能问答']
  },
  {
    id: 2,
    title: 'XMS低代码平台',
    category: '企业级产品',  
    description: '面向企业的低代码开发平台，支持可视化界面设计，快速构建应用、数据表和表单。',
    image: 'https://via.placeholder.com/600x400?text=低代码平台',
    tags: ['低代码', '可视化开发', '拖拽设计', '流程引擎']
  },
  {
    id: 3,
    title: 'Apollo 财务分摊系统',
    category: '企业级产品',
    description: '通过可视化的流程设计，将复杂的财务分摊业务转化为清晰易懂的流程节点，帮助财务人员提高工作效率。',
    image: 'https://via.placeholder.com/600x400?text=财务系统',
    tags: ['财务管理', '成本核算', '数据分析', '报表系统']
  }
];

// 简化的项目详情数据
export const projectDetails: ProjectDetailsCollection = {
  1: {
    id: 1,
    title: '网易OA系统AI助手探索',
    category: 'AI技术应用',
    description: '基于大语言模型的智能办公助手，为企业员工提供智能问答、流程指导、智能填单、问题检测等服务。',
    image: 'https://via.placeholder.com/800x600?text=AI助手详情',
    tags: ['AI助手', '自然语言处理', '企业办公', '智能问答'],
    duration: '2023.06 - 2023.12',
    team: '产品设计师(我) + 前端工程师 + 后端工程师 + 算法工程师',
    role: 'UX设计师 - 负责用户研究、交互设计、界面设计',
    year: '2023',
    client: '网易',
    overview: '基于大语言模型技术，为企业内部办公场景设计智能助手产品...',
    challenge: '如何让AI助手真正理解用户意图，提供准确有用的帮助...',
    processSteps: [],
    keyFeatures: [],
    results: [],
    nextSteps: ['持续优化AI算法', '扩展更多场景应用'],
    liveUrl: '',
    caseStudyUrl: '',
    gallery: []
  },
  2: {
    id: 2,
    title: 'XMS低代码平台',
    category: '企业级产品',
    description: '面向企业的低代码开发平台，支持可视化界面设计，快速构建应用、数据表和表单。',
    image: 'https://via.placeholder.com/800x600?text=低代码平台详情',
    tags: ['低代码', '可视化开发', '拖拽设计', '流程引擎'],
    duration: '2022.08 - 2023.05',
    team: '产品设计师(我) + 产品经理 + 前端团队 + 后端团队',
    role: 'UX设计师 - 负责整体用户体验设计、组件系统设计',
    year: '2023',
    client: '内部项目',
    overview: '面向企业的低代码开发平台，让非技术用户也能快速构建应用...',
    challenge: '如何平衡易用性和功能性，让平台既简单又强大...',
    processSteps: [],
    keyFeatures: [],
    results: [],
    nextSteps: ['增加更多组件模板', '优化用户体验'],
    liveUrl: '',
    caseStudyUrl: '',
    gallery: []
  },
  3: {
    id: 3,
    title: 'Apollo 财务分摊系统',
    category: '企业级产品',
    description: '通过可视化的流程设计，将复杂的财务分摊业务转化为清晰易懂的流程节点，帮助财务人员提高工作效率。',
    image: 'https://via.placeholder.com/800x600?text=财务系统详情',
    tags: ['财务管理', '成本核算', '数据分析', '报表系统'],
    duration: '2022.01 - 2022.07',
    team: '产品设计师(我) + 产品经理 + 财务专家 + 开发团队',
    role: 'UX设计师 - 负责业务流程梳理、界面设计、用户培训',
    year: '2022',
    client: '内部项目',
    overview: '将复杂的财务分摊业务流程可视化，提高财务工作效率...',
    challenge: '复杂的财务业务逻辑如何用直观的界面表达...',
    processSteps: [],
    keyFeatures: [],
    results: [],
    nextSteps: ['完善业务规则配置', '增加报表功能'],
    liveUrl: '',
    caseStudyUrl: '',
    gallery: []
  }
}; 