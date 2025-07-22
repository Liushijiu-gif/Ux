# UX设计师作品集网站

一个使用Figma Make AI工具构建的现代化个人作品集网站，展示UX设计项目和技能。

## 🚀 快速开始

### 开发环境
```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

### 图片管理
```bash
# 检查环境配置
npm run check-env

# 优化图片（可选）
npm run optimize-images

# 上传图片到Vercel Blob
npm run upload-images
```

## 📁 项目结构

```
├── components/          # React组件
│   ├── ui/             # UI组件库（shadcn/ui）
│   ├── project-images/ # 图片管理相关
│   └── figma/          # Figma特定组件
├── data/               # 项目数据
├── types/              # TypeScript类型定义
├── scripts/            # 工具脚本
└── styles/             # 样式文件
```

## 🖼️ 图片管理

本项目使用Vercel Blob进行图片存储和管理：

1. **本地开发**：将图片放入`local-images/`目录
2. **图片优化**：运行`npm run optimize-images`
3. **上传云端**：运行`npm run upload-images`
4. **更新引用**：使用生成的代码更新`image-imports.ts`

## 🚀 部署指南

### Vercel部署（推荐）

1. **连接Git仓库**
   - 将代码推送到GitHub/GitLab/Bitbucket
   - 在Vercel Dashboard中导入项目

2. **配置环境变量**
   ```bash
   BLOB_READ_WRITE_TOKEN=your_vercel_blob_token
   ```

3. **自动部署**
   - 推送代码自动触发部署
   - 支持预览部署和生产部署

### 其他部署选项

#### Netlify
```bash
# 构建命令
npm run build

# 发布目录
dist
```

#### GitHub Pages
```bash
# 安装gh-pages
npm install --save-dev gh-pages

# 添加部署脚本
npm run build && gh-pages -d dist
```

## 🛠️ 技术栈

- **框架**：React 18 + TypeScript
- **构建工具**：Vite
- **样式**：Tailwind CSS v4
- **UI组件**：shadcn/ui + Radix UI
- **图标**：Lucide React
- **图片存储**：Vercel Blob
- **部署**：Vercel

## 📱 响应式设计

网站采用移动优先的响应式设计：
- 移动端：< 768px
- 平板端：768px - 1024px  
- 桌面端：> 1024px

## ♿ 无障碍设计

- 语义化HTML标签
- 键盘导航支持
- 屏幕阅读器友好
- 高对比度颜色方案
- ARIA标签支持

## 🔧 自定义配置

### 主题定制
修改`styles/globals.css`中的CSS变量来自定义主题颜色。

### 项目数据
在`data/projects.ts`中更新项目信息和内容。

### 组件定制
所有组件都支持自定义，遵循shadcn/ui的设计原则。

## 📊 性能优化

- 图片懒加载
- 代码分割
- 静态资源缓存
- CDN加速（Vercel）
- 响应式图片
- 预加载关键资源

## 🐛 故障排除

### 图片加载问题
1. 检查环境变量配置
2. 验证Blob URL有效性
3. 确认图片已成功上传

### 构建错误
1. 检查TypeScript类型错误
2. 确认所有依赖已安装
3. 清除缓存：`rm -rf node_modules .next && npm install`

### 部署问题
1. 检查构建命令和输出目录
2. 确认环境变量设置正确
3. 查看部署日志获取详细错误信息

## 📄 许可证

MIT License - 详见LICENSE文件

## 🤝 贡献

欢迎提交Issue和Pull Request！

## 📞 联系方式

- 邮箱：[your-email@example.com]
- LinkedIn：[your-linkedin-profile]
- 作品集：[your-portfolio-url]

---

使用 ❤️ 和 Figma Make AI 构建