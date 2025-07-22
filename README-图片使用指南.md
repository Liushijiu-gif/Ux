# 图片使用指南

## 已修复的问题

✅ 修复了Resume.tsx中重复的图片导入声明  
✅ 将所有Figma资源导入替换为本地图片路径  
✅ 项目现在可以正常启动运行  

## 使用您的本地图片

### 方法1：使用public目录（推荐）

1. 将您的图片文件复制到 `public/images/` 目录下
2. 按照以下命名规则重命名图片：

**Hero组件图片：**
- `hero-image-1.jpg` - 主要头像图片
- `hero-image-2.jpg` - 作品展示图片
- `hero-image-3.jpg` - 技能展示图片
- 等等...

**Resume组件图片：**
- `profile-image.jpg` - 个人简历头像
- `resume-image.jpg` - 简历背景图片

### 方法2：修改图片路径

如果您不想重命名图片，可以直接修改组件文件中的路径：

**在 `src/components/Hero.tsx` 中：**
```typescript
const image_75e7db36aabcd69336d304040051e76761eb9d4b = '/images/您的图片名称.jpg';
```

**在 `src/components/Resume.tsx` 中：**
```typescript
const image_c45826329011dcdd90b4016b66618f39ba4d4023 = '/images/您的图片名称.jpg';
```

### 支持的图片格式

- JPG/JPEG
- PNG
- WebP
- GIF

## 项目状态

🚀 **开发服务器已启动**  
📍 **访问地址：http://localhost:3000**  
✅ **所有依赖已安装**  
✅ **所有配置文件已创建**  

## 下一步

1. 将您的图片复制到 `public/images/` 目录
2. 在浏览器中访问 http://localhost:3000 查看效果
3. 根据需要调整图片和样式

如果图片无法显示，浏览器会自动使用ImageWithFallback组件显示占位图。 