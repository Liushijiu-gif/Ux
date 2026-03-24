import { ProjectSummary, ProjectDetailsCollection } from '../types/project';
import { projectCoverImages, 
  aiWebsiteImages,
  promoteCollectorImages
} from '../components/project-images/image-imports';

// 项目列表数据
export const projectsData: ProjectSummary[] = [
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
    description: '创新的浏览器插件设计项目，专注于解决AI时代用户在使用各种AI工具时遇到的Prompt管理痛点。',
    image: projectCoverImages.promoteCollector,
    tags: ['浏览器插件', 'AI工具', 'Prompt管理', '效率工具', 'Figma Make']
  },

];

// 完整项目详情数据
export const projectDetails: ProjectDetailsCollection = {

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