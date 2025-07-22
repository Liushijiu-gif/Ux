#!/usr/bin/env node

/**
 * Vercel Blob 图片批量上传脚本
 * 
 * 此脚本将：
 * 1. 检查环境配置
 * 2. 批量上传图片到 Vercel Blob
 * 3. 生成 URL 映射
 * 4. 更新项目配置文件
 */

import { put } from '@vercel/blob';
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

// 上传配置映射
const uploadMap = {
  // 项目封面图
  'covers/netease-oa.png': '../local-images/covers/netease-oa.png',
  'covers/xms-lowcode.png': '../local-images/covers/xms-lowcode.png',
  'covers/apollo-finance.png': '../local-images/covers/apollo-finance.png',
  'covers/sigma-system.png': '../local-images/covers/sigma-system.png',
  'covers/bedrock-design-system.png': '../local-images/covers/bedrock-design-system.png',
  'covers/bedrock-icon-library.png': '../local-images/covers/bedrock-icon-library.png',
  'covers/modeling-3d.png': '../local-images/covers/modeling-3d.png',
  'covers/aigc-generation.png': '../local-images/covers/aigc-generation.png',
  'covers/ai-website.png': '../local-images/covers/ai-website.png',
  'covers/promote-collector.png': '../local-images/covers/promote-collector.png',

  // 网易项目详情图
  'netease/project-context.png': '../local-images/netease/project-context.png',
  'netease/user-journey.png': '../local-images/netease/user-journey.png',
  'netease/design-goals.png': '../local-images/netease/design-goals.png',
  'netease/interaction-framework.png': '../local-images/netease/interaction-framework.png',
  'netease/smart-form.png': '../local-images/netease/smart-form.png',
  'netease/trigger-position.png': '../local-images/netease/trigger-position.png',
  'netease/awakening.png': '../local-images/netease/awakening.png',
  'netease/expression.png': '../local-images/netease/expression.png',
  'netease/confirmation.png': '../local-images/netease/confirmation.png',
  'netease/feedback.png': '../local-images/netease/feedback.png',
  'netease/guidelines.png': '../local-images/netease/guidelines.png',
  'netease/rule-detection.png': '../local-images/netease/rule-detection.png',
  'netease/speed-reading.png': '../local-images/netease/speed-reading.png',
  'netease/single-field.png': '../local-images/netease/single-field.png',
  'netease/mobile-framework.png': '../local-images/netease/mobile-framework.png',
  'netease/mobile-single-field.png': '../local-images/netease/mobile-single-field.png',
  'netease/mobile-page-display.png': '../local-images/netease/mobile-page-display.png',

  // XMS项目详情图
  'xms/project-background.png': '../local-images/xms/project-background.png',
  'xms/user-analysis.png': '../local-images/xms/user-analysis.png',
  'xms/design-goals.png': '../local-images/xms/design-goals.png',
  'xms/learning-threshold-1.png': '../local-images/xms/learning-threshold-1.png',
  'xms/learning-threshold-2.png': '../local-images/xms/learning-threshold-2.png',
  'xms/configuration-efficiency.png': '../local-images/xms/configuration-efficiency.png',
  'xms/configuration-mechanism.png': '../local-images/xms/configuration-mechanism.png',
  'xms/learning-threshold-3.png': '../local-images/xms/learning-threshold-3.png',
  'xms/logo-design.png': '../local-images/xms/logo-design.png',

  // Apollo项目详情图
  'apollo/project-background.png': '../local-images/apollo/project-background.png',
  'apollo/user-experience-map.png': '../local-images/apollo/user-experience-map.png',
  'apollo/design-goals.png': '../local-images/apollo/design-goals.png',
  'apollo/learning-threshold-1.png': '../local-images/apollo/learning-threshold-1.png',
  'apollo/learning-threshold-2.png': '../local-images/apollo/learning-threshold-2.png',
  'apollo/detail-page-structure.png': '../local-images/apollo/detail-page-structure.png',
  'apollo/efficiency-fast-draw.png': '../local-images/apollo/efficiency-fast-draw.png',
  'apollo/efficiency-auto-layout.png': '../local-images/apollo/efficiency-auto-layout.png',
  'apollo/help-documentation.png': '../local-images/apollo/help-documentation.png',
  'apollo/efficiency-auto-arrange.png': '../local-images/apollo/efficiency-auto-arrange.png',
  'apollo/efficiency-create-copy.png': '../local-images/apollo/efficiency-create-copy.png',
  'apollo/efficiency-batch-select.png': '../local-images/apollo/efficiency-batch-select.png',
  'apollo/efficiency-edit-path.png': '../local-images/apollo/efficiency-edit-path.png',
  'apollo/error-prevention-validation.png': '../local-images/apollo/error-prevention-validation.png',
  'apollo/error-prevention-correction.png': '../local-images/apollo/error-prevention-correction.png',
  'apollo/connection-optimization.png': '../local-images/apollo/connection-optimization.png',
  'apollo/login-page-design.png': '../local-images/apollo/login-page-design.png',
  'apollo/data-analytics-feedback.png': '../local-images/apollo/data-analytics-feedback.png',

  // Sigma项目详情图
  'sigma/business-requirements.png': '../local-images/sigma/business-requirements.png',
  'sigma/problem-analysis.png': '../local-images/sigma/problem-analysis.png',
  'sigma/user-insights.png': '../local-images/sigma/user-insights.png',
  'sigma/guiding-objectives.png': '../local-images/sigma/guiding-objectives.png',
  'sigma/interactive-demo.png': '../local-images/sigma/interactive-demo.png',
  'sigma/global-search-framework.png': '../local-images/sigma/global-search-framework.png',
  'sigma/high-frequency-operation-optimization.png': '../local-images/sigma/high-frequency-operation-optimization.png',
  'sigma/homepage-global-perspective.png': '../local-images/sigma/homepage-global-perspective.png',
  'sigma/role-specific-game-product-list.png': '../local-images/sigma/role-specific-game-product-list.png',
  'sigma/detail-page-lifecycle-information.png': '../local-images/sigma/detail-page-lifecycle-information.png',
  'sigma/game-detail-report-display-optimization.png': '../local-images/sigma/game-detail-report-display-optimization.png',
  'sigma/analysis-report-data-trends.png': '../local-images/sigma/analysis-report-data-trends.png',
  'sigma/login-page-design.png': '../local-images/sigma/login-page-design.png',
  'sigma/onboarding-guide.png': '../local-images/sigma/onboarding-guide.png',

  // Bedrock项目详情图
  'bedrock/standards-guidelines.png': '../local-images/bedrock/standards-guidelines.png',
  'bedrock/identifiability-principle.png': '../local-images/bedrock/identifiability-principle.png',
  'bedrock/style-characteristics.png': '../local-images/bedrock/style-characteristics.png',
  'bedrock/size-consistency.png': '../local-images/bedrock/size-consistency.png',
  'bedrock/proportion-consistency.png': '../local-images/bedrock/proportion-consistency.png',
};

// 检查环境变量
function checkEnvironment() {
  console.log(colors.bold('\n🔧 检查环境配置...\n'));
  
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) {
    console.log(colors.red('❌ 缺少 BLOB_READ_WRITE_TOKEN 环境变量'));
    console.log(colors.yellow('请执行以下命令获取 token:'));
    console.log(colors.white('   vercel env pull .env.local\n'));
    console.log(colors.yellow('或者手动在 .env.local 文件中添加:'));
    console.log(colors.white('   BLOB_READ_WRITE_TOKEN=your_token_here\n'));
    return false;
  }
  
  console.log(colors.green('✅ Blob token 已配置'));
  return true;
}

// 检查本地图片文件
function checkLocalImages() {
  console.log(colors.bold('\n📋 检查本地图片文件...\n'));
  
  const existingFiles = [];
  const missingFiles = [];
  
  Object.entries(uploadMap).forEach(([blobPath, localPath]) => {
    const fullLocalPath = path.resolve(__dirname, localPath);
    
    if (fs.existsSync(fullLocalPath)) {
      const stats = fs.statSync(fullLocalPath);
      existingFiles.push({
        blobPath,
        localPath: fullLocalPath,
        size: stats.size
      });
      console.log(colors.green(`  ✅ ${blobPath} (${(stats.size / 1024).toFixed(1)} KB)`));
    } else {
      missingFiles.push({ blobPath, localPath });
      console.log(colors.red(`  ❌ ${blobPath}`));
    }
  });
  
  console.log(colors.cyan(`\n📊 图片统计:`));
  console.log(colors.green(`  • 找到: ${existingFiles.length} 张图片`));
  console.log(colors.red(`  • 缺失: ${missingFiles.length} 张图片`));
  console.log(colors.blue(`  • 总计: ${Object.keys(uploadMap).length} 张图片\n`));
  
  if (missingFiles.length > 0) {
    console.log(colors.yellow('缺失的图片文件:'));
    missingFiles.forEach(({ blobPath, localPath }) => {
      console.log(colors.red(`  ❌ ${localPath}`));
    });
    console.log(colors.yellow('\n请先准备这些图片文件，然后再次运行上传脚本。\n'));
    return { existingFiles, missingFiles, canProceed: false };
  }
  
  return { existingFiles, missingFiles, canProceed: true };
}

// 上传图片到 Vercel Blob
async function uploadImages(filesToUpload) {
  console.log(colors.bold('\n🚀 开始上传图片到 Vercel Blob...\n'));
  
  const results = [];
  let successCount = 0;
  let failCount = 0;
  
  for (const { blobPath, localPath, size } of filesToUpload) {
    try {
      console.log(colors.cyan(`📤 上传: ${blobPath}...`));
      
      // 读取文件
      const fileBuffer = fs.readFileSync(localPath);
      const fileName = path.basename(blobPath);
      const fileExt = path.extname(fileName).slice(1);
      
      // 上传到Vercel Blob
      const blob = await put(`projects/${blobPath}`, fileBuffer, {
        access: 'public',
        contentType: `image/${fileExt === 'jpg' ? 'jpeg' : fileExt}`,
      });
      
      console.log(colors.green(`   ✅ 成功: ${blob.url}`));
      console.log(colors.gray(`   📏 大小: ${(fileBuffer.length / 1024).toFixed(2)} KB\n`));
      
      results.push({
        blobPath,
        url: blob.url,
        size: fileBuffer.length,
        success: true
      });
      
      successCount++;
      
      // 添加小延迟，避免请求过于频繁
      await new Promise(resolve => setTimeout(resolve, 100));
      
    } catch (error) {
      console.log(colors.red(`   ❌ 失败: ${error.message}\n`));
      
      results.push({
        blobPath,
        error: error.message,
        success: false
      });
      
      failCount++;
    }
  }
  
  console.log(colors.bold(colors.cyan('🎉 上传完成!\n')));
  console.log(colors.green(`✅ 成功: ${successCount} 张图片`));
  console.log(colors.red(`❌ 失败: ${failCount} 张图片`));
  console.log(colors.blue(`📊 总大小: ${(results.filter(r => r.success).reduce((sum, r) => sum + r.size, 0) / (1024 * 1024)).toFixed(2)} MB\n`));
  
  return results;
}

// 生成 URL 映射文件
function generateUrlMapping(results) {
  console.log(colors.bold('\n📄 生成 URL 映射文件...\n'));
  
  const successfulUploads = results.filter(r => r.success);
  const urlMapping = {};
  
  successfulUploads.forEach(({ blobPath, url }) => {
    urlMapping[blobPath] = url;
  });
  
  // 保存 URL 映射到文件
  const mappingPath = path.resolve(PROJECT_ROOT, 'src/components/project-images/blob-urls.json');
  fs.writeFileSync(mappingPath, JSON.stringify(urlMapping, null, 2));
  
  console.log(colors.green(`✅ URL 映射已保存: ${mappingPath}`));
  console.log(colors.cyan(`📋 包含 ${Object.keys(urlMapping).length} 个图片 URL\n`));
  
  return urlMapping;
}

// 生成更新后的 image-imports.ts 文件
function generateImageImports(urlMapping) {
  console.log(colors.bold('\n🔄 生成更新的 image-imports.ts 文件...\n'));
  
  // 构建项目封面图配置
  const coverImages = {};
  const neteaseImages = {};
  const xmsImages = {};
  const apolloImages = {};
  const sigmaImages = {};
  const bedrockImages = {};
  
  // 映射键名到代码变量名
  const keyMappings = {
    covers: {
      'netease-oa.png': 'netease',
      'xms-lowcode.png': 'xms', 
      'apollo-finance.png': 'apollo',
      'sigma-system.png': 'sigma',
      'bedrock-design-system.png': 'bedrockDesign',
      'bedrock-icon-library.png': 'bedrockIcon',
      'modeling-3d.png': 'modeling3D',
      'aigc-generation.png': 'aigc',
      'ai-website.png': 'aiWebsite',
      'promote-collector.png': 'promoteCollector'
    },
    netease: {
      'project-context.png': 'projectContext',
      'user-journey.png': 'userJourney',
      'design-goals.png': 'designGoals',
      'interaction-framework.png': 'interactionFramework',
      'smart-form.png': 'smartForm',
      'trigger-position.png': 'triggerPosition',
      'awakening.png': 'awakening',
      'expression.png': 'expression',
      'confirmation.png': 'confirmation',
      'feedback.png': 'feedback',
      'guidelines.png': 'guidelines',
      'rule-detection.png': 'ruleDetection',
      'speed-reading.png': 'speedReading',
      'single-field.png': 'singleField',
      'mobile-framework.png': 'mobileFramework',
      'mobile-single-field.png': 'mobileSingleField',
      'mobile-page-display.png': 'mobilePageDisplay'
    },
    xms: {
      'project-background.png': 'projectBackground',
      'user-analysis.png': 'userAnalysis',
      'design-goals.png': 'designGoals',
      'learning-threshold-1.png': 'learningThreshold1',
      'learning-threshold-2.png': 'learningThreshold2',
      'configuration-efficiency.png': 'configurationEfficiency',
      'configuration-mechanism.png': 'configurationMechanism',
      'learning-threshold-3.png': 'learningThreshold3',
      'logo-design.png': 'logoDesign'
    },
    apollo: {
      'project-background.png': 'projectBackground',
      'user-experience-map.png': 'userExperienceMap',
      'design-goals.png': 'designGoals',
      'learning-threshold-1.png': 'learningThreshold1',
      'learning-threshold-2.png': 'learningThreshold2',
      'detail-page-structure.png': 'detailPageStructure',
      'efficiency-fast-draw.png': 'efficiencyFastDraw',
      'efficiency-auto-layout.png': 'efficiencyAutoLayout',
      'help-documentation.png': 'helpDocumentation',
      'efficiency-auto-arrange.png': 'efficiencyAutoArrange',
      'efficiency-create-copy.png': 'efficiencyCreateCopy',
      'efficiency-batch-select.png': 'efficiencyBatchSelect',
      'efficiency-edit-path.png': 'efficiencyEditPath',
      'error-prevention-validation.png': 'errorPreventionValidation',
      'error-prevention-correction.png': 'errorPreventionCorrection',
      'connection-optimization.png': 'connectionOptimization',
      'login-page-design.png': 'loginPageDesign',
      'data-analytics-feedback.png': 'dataAnalyticsAndFeedback'
    },
    sigma: {
      'business-requirements.png': 'businessRequirements',
      'problem-analysis.png': 'problemAnalysis',
      'user-insights.png': 'userInsights',
      'guiding-objectives.png': 'guidingObjectives',
      'interactive-demo.png': 'interactiveDemo',
      'global-search-framework.png': 'globalSearchFramework',
      'high-frequency-operation-optimization.png': 'highFrequencyOperationOptimization',
      'homepage-global-perspective.png': 'homepageGlobalPerspective',
      'role-specific-game-product-list.png': 'roleSpecificGameProductList',
      'detail-page-lifecycle-information.png': 'detailPageLifecycleInformation',
      'game-detail-report-display-optimization.png': 'gameDetailReportDisplayOptimization',
      'analysis-report-data-trends.png': 'analysisReportDataTrends',
      'login-page-design.png': 'loginPageDesign',
      'onboarding-guide.png': 'onboardingGuide'
    },
    bedrock: {
      'standards-guidelines.png': 'standardsAndGuidelines',
      'identifiability-principle.png': 'identifiabilityPrinciple',
      'style-characteristics.png': 'styleCharacteristics',
      'size-consistency.png': 'sizeConsistency',
      'proportion-consistency.png': 'proportionConsistency'
    }
  };
  
  // 填充各个图片组
  Object.entries(urlMapping).forEach(([blobPath, url]) => {
    const [folder, filename] = blobPath.split('/');
    const keyMapping = keyMappings[folder];
    
    if (keyMapping && keyMapping[filename]) {
      const variableName = keyMapping[filename];
      
      switch (folder) {
        case 'covers':
          coverImages[variableName] = url;
          break;
        case 'netease':
          neteaseImages[variableName] = url;
          break;
        case 'xms':
          xmsImages[variableName] = url;
          break;
        case 'apollo':
          apolloImages[variableName] = url;
          break;
        case 'sigma':
          sigmaImages[variableName] = url;
          break;
        case 'bedrock':
          bedrockImages[variableName] = url;
          break;
      }
    }
  });
  
  // 生成新的 image-imports.ts 内容
  const imageImportsContent = `// 项目图片导入配置
// 此文件由 upload-to-vercel-blob.js 自动生成，请勿手动修改

// 项目封面图片
export const projectCoverImages = ${JSON.stringify(coverImages, null, 2)};

// 网易项目详情图片
export const neteaseProjectImages = ${JSON.stringify(neteaseImages, null, 2)};

// XMS项目详情图片
export const xmsProjectImages = ${JSON.stringify(xmsImages, null, 2)};

// Apollo项目详情图片  
export const apolloProjectImages = ${JSON.stringify(apolloImages, null, 2)};

// Sigma项目详情图片
export const sigmaProjectImages = ${JSON.stringify(sigmaImages, null, 2)};

// Bedrock图标库项目详情图片
export const bedrockIconImages = ${JSON.stringify(bedrockImages, null, 2)};
`;
  
  // 保存更新的文件
  const imageImportsPath = path.resolve(PROJECT_ROOT, 'src/components/project-images/image-imports.ts');
  fs.writeFileSync(imageImportsPath, imageImportsContent);
  
  console.log(colors.green(`✅ 已更新 image-imports.ts 文件`));
  console.log(colors.cyan(`📝 包含以下图片组:`));
  console.log(colors.white(`   • 封面图: ${Object.keys(coverImages).length} 张`));
  console.log(colors.white(`   • 网易项目: ${Object.keys(neteaseImages).length} 张`));
  console.log(colors.white(`   • XMS项目: ${Object.keys(xmsImages).length} 张`));
  console.log(colors.white(`   • Apollo项目: ${Object.keys(apolloImages).length} 张`));
  console.log(colors.white(`   • Sigma项目: ${Object.keys(sigmaImages).length} 张`));
  console.log(colors.white(`   • Bedrock项目: ${Object.keys(bedrockImages).length} 张`));
}

// 显示完成总结
function showCompletionSummary(results, urlMapping) {
  console.log(colors.bold(colors.cyan('\n🎉 图片上传完成总结\n')));
  
  const successfulUploads = results.filter(r => r.success);
  const failedUploads = results.filter(r => !r.success);
  
  console.log(colors.green(`✅ 成功上传: ${successfulUploads.length} 张图片`));
  if (failedUploads.length > 0) {
    console.log(colors.red(`❌ 上传失败: ${failedUploads.length} 张图片`));
    console.log(colors.yellow('\n失败的文件:'));
    failedUploads.forEach(({ blobPath, error }) => {
      console.log(colors.red(`   • ${blobPath}: ${error}`));
    });
  }
  
  const totalSize = successfulUploads.reduce((sum, r) => sum + r.size, 0);
  console.log(colors.blue(`📊 总上传大小: ${(totalSize / (1024 * 1024)).toFixed(2)} MB`));
  
  console.log(colors.bold(colors.cyan('\n📄 生成的文件:')));
  console.log(colors.white('   • src/components/project-images/blob-urls.json'));
  console.log(colors.white('   • src/components/project-images/image-imports.ts (已更新)'));
  
  console.log(colors.bold(colors.yellow('\n🚀 下一步:')));
  console.log(colors.white('   1. 重启开发服务器: npm run dev'));
  console.log(colors.white('   2. 检查网站显示是否正常'));
  console.log(colors.white('   3. 部署到 Vercel: vercel --prod'));
  
  console.log(colors.bold(colors.green('\n🎯 恭喜！您的作品集现在使用真实的项目图片了！')));
}

// 主函数
async function main() {
  console.log(colors.bold(colors.cyan('📤 Vercel Blob 图片批量上传工具\n')));
  
  // 检查环境配置
  if (!checkEnvironment()) {
    process.exit(1);
  }
  
  // 检查本地图片文件
  const { existingFiles, missingFiles, canProceed } = checkLocalImages();
  
  if (!canProceed) {
    console.log(colors.red('❌ 存在缺失的图片文件，请先准备完整的图片再运行上传脚本。'));
    console.log(colors.yellow('💡 提示: 运行 npm run restore:check 查看详细的图片收集指南。'));
    process.exit(1);
  }
  
  // 确认上传
  console.log(colors.bold(colors.yellow('⚠️  即将上传图片到 Vercel Blob 存储')));
  console.log(colors.yellow('继续上传将覆盖云端的同名文件。'));
  
  // 开始上传
  const results = await uploadImages(existingFiles);
  
  // 生成 URL 映射文件
  const urlMapping = generateUrlMapping(results);
  
  // 生成更新的 image-imports.ts 文件
  generateImageImports(urlMapping);
  
  // 显示完成总结
  showCompletionSummary(results, urlMapping);
}

// 运行脚本
main().catch((error) => {
  console.error(colors.red('❌ 上传过程中出现错误:'));
  console.error(error);
  process.exit(1);
});