import React from 'react';
import { Award, Palette, Coffee, Heart } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { ScrollAnimation } from './ui/scroll-animation';

export function About() {
  const stats = [
    { icon: Award, value: '20+', label: '完成项目数' },
    { icon: Palette, value: '1800+', label: '绘制icon数' },
    { icon: Coffee, value: '100+', label: '喝咖啡杯数' },
    { icon: Heart, value: '100%', label: '设计热情' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-16">
          {/* 指示器线条 */}
          <ScrollAnimation stagger={200} staggerIndex={0}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-sm text-gray-500">01 — About</span>
            </div>
          </ScrollAnimation>
          {/* 主标题 */}
          <ScrollAnimation stagger={200} staggerIndex={1}>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
              关于我
            </h2>
          </ScrollAnimation>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <ScrollAnimation stagger={200} staggerIndex={2}>
              <p className="text-gray-700 leading-relaxed">
                我认为，优秀的B端设计应当自然且直观。它需要将复杂的业务逻辑拆解为用户易于理解的概念和步骤。为此，设计师必须深入理解用户需求、业务目标和业务限制，才能创造出既美观又实用的界面。
              </p>
            </ScrollAnimation>
            
            <ScrollAnimation stagger={200} staggerIndex={3}>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">我的专长</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-gray-900 rounded-md flex items-center justify-center flex-shrink-0 mr-4 shadow-sm">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-900 font-medium">设计系统构建与组件化设计 - 建立统一的设计规范和可复用组件库</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-gray-900 rounded-md flex items-center justify-center flex-shrink-0 mr-4 shadow-sm">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-900 font-medium">企业级产品与B2B平台设计 - 专注于复杂业务场景的用户体验优化</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-gray-900 rounded-md flex items-center justify-center flex-shrink-0 mr-4 shadow-sm">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-900 font-medium">AI工具产品与智能界面设计 - 探索AI技术在用户体验中的应用</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-gray-900 rounded-md flex items-center justify-center flex-shrink-0 mr-4 shadow-sm">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    </div>
                    <span className="text-gray-900 font-medium">3D设计与视觉创新体验 - 运用3D技术创造沉浸式视觉体验</span>
                  </li>
                </ul>
              </div>
            </ScrollAnimation>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <ScrollAnimation key={index} stagger={200} staggerIndex={4 + index}>
                <Card className="relative overflow-hidden p-6 hover:shadow-lg transition-shadow shadow-sm min-h-[140px]">
                  <CardContent className="relative z-10 h-full flex flex-col justify-between p-0">
                    {/* 数值 - 左上角 */}
                    <div className="text-left">
                      <div className="text-5xl font-bold text-gray-900">{stat.value}</div>
                    </div>
                    
                    {/* 标签 - 右下角 */}
                    <div className="text-right">
                      <div className="text-sm text-gray-600 leading-tight">{stat.label}</div>
                    </div>
                  </CardContent>
                  
                  {/* 背景图标 - 底部，只露出上半部分 */}
                  <div className="absolute -bottom-10 -right-10 opacity-10">
                    <stat.icon className="h-36 w-36 text-gray-400" />
                  </div>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}