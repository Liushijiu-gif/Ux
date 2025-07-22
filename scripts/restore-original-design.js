#!/usr/bin/env node

/**
 * 一键恢复原有设计脚本
 * 
 * 这个脚本会帮助您：
 * 1. 检查本地图片文件是否齐全
 * 2. 配置Vercel Blob存储
 * 3. 批量上传图片到云端
 * 4. 更新项目配置文件
 * 5. 验证图片加载
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 项目根目录
const PROJECT_ROOT = path.resolve(__dirname, '..');

// 颜色输出函数
const colors = {
  green: (text) => `\x1b[32m${text}\x1b[0m`,
  red: (text) => `\x1b[31m${text}\x1b[0m`,
  yellow: (text) => `\x1b[33m${text}\x1b[0m`,
  blue: (text) => `\x1b[34m${text}\x1b[0m`,
  cyan: (text) => `\x1b[36m${text}\x1b[0m`,
  bold: (text) => `\x1b[1m${text}\x1b[0m`,
  gray: (text) => `\x1b[90m${text}\x1b[0m`,
  white: (text) => `\x1b[37m${text}\x1b[0m`
};

// 需要的图片文件映射
const requiredImages = {
  // 项目封面图
  covers: {
    'netease-oa.png': '网易OA系统AI助手',
    'xms-lowcode.png': 'XMS低代码平台',
    'apollo-finance.png': 'Apollo财务分摊系统',
    'sigma-system.png': 'Sigma游戏管理系统',
    'bedrock-design-system.png': 'Bedrock设计中台',
    'bedrock-icon-library.png': 'Bedrock图标库3.0',
    'modeling-3d.png': '3D建模作品集',
    'aigc-generation.png': 'AIGC生图探索',
    'ai-website.png': 'AI作品集网站设计',
    'promote-collector.png': 'Promote收集器'
  },
  
  // 网易项目详情图
  netease: {
    'project-context.png': '项目背景',
    'user-journey.png': '用户旅程',
    'design-goals.png': '设计目标',
    'interaction-framework.png': '交互框架',
    'smart-form.png': '智能表单',
    'trigger-position.png': '触发位置',
    'awakening.png': '唤醒机制',
    'expression.png': '表达方式',
    'confirmation.png': '确认流程',
    'feedback.png': '反馈机制',
    'guidelines.png': '使用指南',
    'rule-detection.png': '规则检测',
    'speed-reading.png': '快速阅读',
    'single-field.png': '单字段处理',
    'mobile-framework.png': '移动端框架',
    'mobile-single-field.png': '移动端单字段',
    'mobile-page-display.png': '移动端页面展示'
  },

  // XMS项目详情图
  xms: {
    'project-background.png': '项目背景',
    'user-analysis.png': '用户分析',
    'design-goals.png': '设计目标',
    'learning-threshold-1.png': '学习门槛分析1',
    'learning-threshold-2.png': '学习门槛分析2',
    'configuration-efficiency.png': '配置效率',
    'configuration-mechanism.png': '配置机制',
    'learning-threshold-3.png': '学习门槛分析3',
    'logo-design.png': 'Logo设计'
  },

  // Apollo项目详情图
  apollo: {
    'project-background.png': '项目背景',
    'user-experience-map.png': '用户体验地图',
    'design-goals.png': '设计目标',
    'learning-threshold-1.png': '学习门槛分析1',
    'learning-threshold-2.png': '学习门槛分析2',
    'detail-page-structure.png': '详情页结构',
    'efficiency-fast-draw.png': '效率-快速绘制',
    'efficiency-auto-layout.png': '效率-自动布局',
    'help-documentation.png': '帮助文档',
    'efficiency-auto-arrange.png': '效率-自动排列',
    'efficiency-create-copy.png': '效率-创建副本',
    'efficiency-batch-select.png': '效率-批量选择',
    'efficiency-edit-path.png': '效率-编辑路径',
    'error-prevention-validation.png': '错误预防-验证',
    'error-prevention-correction.png': '错误预防-纠正',
    'connection-optimization.png': '连接优化',
    'login-page-design.png': '登录页设计',
    'data-analytics-feedback.png': '数据分析反馈'
  },

  // Sigma项目详情图
  sigma: {
    'business-requirements.png': '业务需求',
    'problem-analysis.png': '问题分析',
    'user-insights.png': '用户洞察',
    'guiding-objectives.png': '指导目标',
    'interactive-demo.png': '交互演示',
    'global-search-framework.png': '全局搜索框架',
    'high-frequency-operation-optimization.png': '高频操作优化',
    'homepage-global-perspective.png': '首页全局视角',
    'role-specific-game-product-list.png': '角色特定游戏产品列表',
    'detail-page-lifecycle-information.png': '详情页生命周期信息',
    'game-detail-report-display-optimization.png': '游戏详情报告展示优化',
    'analysis-report-data-trends.png': '分析报告数据趋势',
    'login-page-design.png': '登录页设计',
    'onboarding-guide.png': '新手指引'
  },

  // Bedrock项目详情图
  bedrock: {
    'standards-guidelines.png': '标准与规范',
    'identifiability-principle.png': '易识别性原则',
    'style-characteristics.png': '风格特色',
    'size-consistency.png': '大小一致性',
    'proportion-consistency.png': '比例一致性'
  }
};

// 计算所需图片总数
const calculateTotalImages = () => {
  let total = 0;
  Object.values(requiredImages).forEach(folder => {
    total += Object.keys(folder).length;
  });
  return total;
};

// 检查图片文件是否存在
function checkImageFiles() {
  console.log(colors.bold('\n📋 检查本地图片文件...\n'));
  
  const localImagesDir = path.join(PROJECT_ROOT, 'local-images');
  const missingFiles = [];
  const foundFiles = [];
  
  Object.entries(requiredImages).forEach(([folder, files]) => {
    console.log(colors.cyan(`📁 检查 ${folder} 文件夹:`));
    
    Object.entries(files).forEach(([filename, description]) => {
      const filepath = path.join(localImagesDir, folder, filename);
      if (fs.existsSync(filepath)) {
        console.log(colors.green(`  ✅ ${filename} - ${description}`));
        foundFiles.push({ folder, filename, description, filepath });
      } else {
        console.log(colors.red(`  ❌ ${filename} - ${description}`));
        missingFiles.push({ folder, filename, description, filepath });
      }
    });
    console.log('');
  });

  return { foundFiles, missingFiles };
}

// 创建本地图片目录结构
function createLocalImageDirs() {
  console.log(colors.bold('\n📁 创建本地图片目录结构...\n'));
  
  const localImagesDir = path.join(PROJECT_ROOT, 'local-images');
  
  // 创建根目录
  if (!fs.existsSync(localImagesDir)) {
    fs.mkdirSync(localImagesDir, { recursive: true });
    console.log(colors.green(`✅ 创建目录: ${localImagesDir}`));
  }
  
  // 创建子目录
  Object.keys(requiredImages).forEach(folder => {
    const folderPath = path.join(localImagesDir, folder);
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
      console.log(colors.green(`✅ 创建目录: local-images/${folder}/`));
    }
  });
}

// 生成图片收集指南
function generateImageGuide(missingFiles) {
  if (missingFiles.length === 0) return;
  
  console.log(colors.bold('\n📖 图片收集指南\n'));
  console.log(colors.yellow('请按照以下结构准备您的项目图片:\n'));
  
  Object.entries(requiredImages).forEach(([folder, files]) => {
    console.log(colors.cyan(`📁 local-images/${folder}/`));
    Object.entries(files).forEach(([filename, description]) => {
      const isPresent = !missingFiles.some(f => f.folder === folder && f.filename === filename);
      const status = isPresent ? colors.green('✅') : colors.red('❌');
      console.log(`  ${status} ${filename} - ${description}`);
    });
    console.log('');
  });
  
  console.log(colors.yellow('💡 建议图片规格:'));
  console.log(colors.yellow('  • 封面图: 1200×800px, PNG/JPG格式'));
  console.log(colors.yellow('  • 详情图: 800×600px, PNG/JPG格式'));
  console.log(colors.yellow('  • 文件大小: 单张不超过5MB'));
}

// 检查环境配置
function checkEnvironment() {
  console.log(colors.bold('\n🔧 检查环境配置...\n'));
  
  const issues = [];
  
  // 检查package.json中的依赖
  const packageJsonPath = path.join(PROJECT_ROOT, 'package.json');
  if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    const hasBlobDep = packageJson.dependencies?.['@vercel/blob'] || packageJson.devDependencies?.['@vercel/blob'];
    
    if (hasBlobDep) {
      console.log(colors.green('✅ @vercel/blob 依赖已安装'));
    } else {
      console.log(colors.red('❌ @vercel/blob 依赖未安装'));
      issues.push('需要安装 @vercel/blob 依赖');
    }
  }
  
  // 检查环境变量文件
  const envPath = path.join(PROJECT_ROOT, '.env.local');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    if (envContent.includes('BLOB_READ_WRITE_TOKEN')) {
      console.log(colors.green('✅ Vercel Blob token 已配置'));
    } else {
      console.log(colors.yellow('⚠️  .env.local 存在但未配置 BLOB_READ_WRITE_TOKEN'));
      issues.push('需要配置 BLOB_READ_WRITE_TOKEN');
    }
  } else {
    console.log(colors.red('❌ .env.local 文件不存在'));
    issues.push('需要创建 .env.local 文件并配置 BLOB_READ_WRITE_TOKEN');
  }
  
  return issues;
}

// 显示下一步操作指南
function showNextSteps(foundFiles, missingFiles, environmentIssues) {
  console.log(colors.bold('\n🚀 下一步操作指南\n'));
  
  const totalImages = calculateTotalImages();
  const foundCount = foundFiles.length;
  const missingCount = missingFiles.length;
  
  console.log(colors.cyan(`📊 图片统计:`));
  console.log(colors.green(`  • 已找到: ${foundCount} 张图片`));
  console.log(colors.red(`  • 缺失: ${missingCount} 张图片`));
  console.log(colors.blue(`  • 总计需要: ${totalImages} 张图片\n`));
  
  if (environmentIssues.length > 0) {
    console.log(colors.yellow('⚙️  环境配置:'));
    environmentIssues.forEach(issue => {
      console.log(colors.red(`   ❌ ${issue}`));
    });
    console.log('');
    
    console.log(colors.cyan('🔧 修复环境问题:'));
    console.log(colors.white('   1. 安装依赖: npm install @vercel/blob'));
    console.log(colors.white('   2. 获取Blob Token: vercel env pull .env.local'));
    console.log(colors.white('   3. 或手动配置 .env.local 文件\n'));
  }
  
  if (missingCount > 0) {
    console.log(colors.yellow('📷 收集缺失图片:'));
    console.log(colors.white('   1. 从您的设计稿或项目文件中导出图片'));
    console.log(colors.white('   2. 按照上述目录结构保存图片'));
    console.log(colors.white('   3. 确保文件名与列表完全一致\n'));
  }
  
  if (foundCount > 0 && environmentIssues.length === 0) {
    console.log(colors.green('🎉 您可以开始上传图片了!'));
    console.log(colors.white('   运行: npm run upload:blob'));
    console.log(colors.white('   或者: node scripts/upload-to-vercel-blob.js\n'));
  }
  
  console.log(colors.blue('📚 详细文档:'));
  console.log(colors.white('   • Vercel Blob配置: src/components/project-images/vercel-blob-setup.md'));
  console.log(colors.white('   • 图片迁移指南: src/components/project-images/README.md'));
  console.log(colors.white('   • 云存储方案: src/components/project-images/cloud-storage-guide.md'));
}

// 主函数
async function main() {
  console.log(colors.bold(colors.cyan('🎨 作品集原有设计恢复工具\n')));
  console.log(colors.yellow('此工具将帮助您将占位符图片恢复为真实的项目图片\n'));
  
  // 创建目录结构
  createLocalImageDirs();
  
  // 检查图片文件
  const { foundFiles, missingFiles } = checkImageFiles();
  
  // 生成收集指南
  generateImageGuide(missingFiles);
  
  // 检查环境配置
  const environmentIssues = checkEnvironment();
  
  // 显示下一步操作
  showNextSteps(foundFiles, missingFiles, environmentIssues);
  
  console.log(colors.bold(colors.cyan('\n🎯 完成后，您的作品集将展示真实的项目图片!')));
  console.log(colors.gray('如需帮助，请参考 src/components/project-images/ 目录下的详细文档\n'));
}

// 运行脚本
main().catch(console.error); 