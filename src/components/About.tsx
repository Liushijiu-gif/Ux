import React from 'react';
import { Award, Palette, Coffee, Heart } from 'lucide-react';
import { Card, CardContent } from './ui/card';

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
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span className="text-sm text-gray-500">01 — About</span>
          </div>
          {/* 主标题 */}
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
            关于我
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            
            <p className="text-gray-700 leading-relaxed">
              我认为，优秀的B端设计应当自然且直观。它需要将复杂的业务逻辑拆解为用户易于理解的概念和步骤。为此，设计师必须深入理解用户需求、业务目标和业务限制，才能创造出既美观又实用的界面。
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">我的专长</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  设计系统构建与组件化设计
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  企业级产品与B2B平台设计
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  AI工具产品与智能界面设计
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  3D设计与视觉创新体验
                </li>
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="relative overflow-hidden p-6 hover:shadow-lg transition-shadow shadow-sm min-h-[140px]">
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}