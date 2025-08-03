import React from 'react';
import { Card, CardContent } from './ui/card';
import { Progress } from './ui/progress';
import { ScrollAnimation } from './ui/scroll-animation';

export function Skills() {
  const skillCategories = [
    {
      title: '设计工具',
      skills: [
        { name: 'Figma', level: 95 },
        { name: 'Photoshop', level: 85 },
        { name: 'AIGC', level: 65 },
      ]
    },
    {
      title: '用户体验方法',
      skills: [
        { name: '用户研究', level: 90 },
        { name: '用户旅程地图', level: 92 },
        { name: '信息架构', level: 95 },
        { name: '可用性测试', level: 85 },
      ]
    },
    {
      title: '技术技能',
      skills: [
        { name: '响应式设计', level: 80 },
        { name: '设计系统', level: 90 },
      ]
    }
  ];

  const tools = [
    { name: 'Figma', category: '界面设计', logo: '🎨' },
    { name: 'Sketch', category: '界面设计', logo: '💎' },
    { name: 'Cursor', category: 'AI编程', logo: '💻' },
    { name: 'Framer', category: '网页设计', logo: '🚀' },
    { name: 'C4D', category: '3D建模', logo: '🎯' },
    { name: 'Blender', category: '3D建模', logo: '🔷' },
    { name: 'Mid Journey', category: 'AI生成', logo: '🤖' },
    { name: 'Stable Diffusion', category: 'AI生成', logo: '🧠' },
    { name: 'Photoshop', category: '图像处理', logo: '🖼️' },
    { name: '动效设计', category: '动画制作', logo: '⚡' },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-16">
          {/* 指示器线条 */}
          <ScrollAnimation stagger={200} staggerIndex={0}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-sm text-gray-500">03 — Skills</span>
            </div>
          </ScrollAnimation>
          {/* 主标题 */}
          <ScrollAnimation stagger={200} staggerIndex={1}>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
              技能与专长
            </h2>
          </ScrollAnimation>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Skills Progress */}
          <ScrollAnimation stagger={200} staggerIndex={2}>
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">核心能力</h3>
              {skillCategories.map((category, categoryIndex) => (
                <ScrollAnimation key={categoryIndex} stagger={200} staggerIndex={3 + categoryIndex}>
                  <div className="space-y-6">
                    <h4 className="text-lg font-medium text-gray-800">{category.title}</h4>
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <ScrollAnimation key={skillIndex} stagger={100} staggerIndex={6 + (categoryIndex * 4) + skillIndex}>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                              <span className="text-sm text-gray-500">{skill.level}%</span>
                            </div>
                            <Progress value={skill.level} className="h-2 bg-gray-200" />
                          </div>
                        </ScrollAnimation>
                      ))}
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </ScrollAnimation>

          {/* Tools & Technologies */}
          <ScrollAnimation stagger={200} staggerIndex={2}>
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">工具与平台</h3>
              <div className="grid grid-cols-2 gap-4">
                {tools.map((tool, index) => (
                  <ScrollAnimation key={index} stagger={100} staggerIndex={18 + index}>
                    <Card className="hover:shadow-md transition-shadow shadow-sm">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className="text-2xl">{tool.logo}</div>
                          <div>
                            <div className="font-medium text-gray-900">{tool.name}</div>
                            <div className="text-sm text-gray-500">{tool.category}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}