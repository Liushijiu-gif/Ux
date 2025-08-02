import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}

interface PortfolioProps {
  projects: Project[];
  onProjectClick: (projectId: number) => void;
}

export function Portfolio({ projects, onProjectClick }: PortfolioProps) {
  const [selectedCategory, setSelectedCategory] = useState('全部');
  
  const categories = ['全部', '企业级产品', 'AI技术应用', '设计系统', '个人创作'];

  const filteredProjects = selectedCategory === '全部' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-16">
          {/* 指示器线条 */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span className="text-sm text-gray-500">02 — Portfolio</span>
          </div>
          {/* 主标题 */}
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            我的作品集
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            专注企业级产品设计与创新技术应用，涵盖B端产品、AI技术、设计系统等领域，致力于通过设计创造更好的用户体验。
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category 
                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                : '!border-gray-200 bg-white hover:bg-blue-50 hover:!border-blue-200 hover:text-blue-600'
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id} 
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer shadow-md bg-white"
              onClick={() => onProjectClick(project.id)}
            >
              <div className="relative overflow-hidden">
                {/* 项目封面图片 */}
                <div className="w-full aspect-[2/1] bg-gray-50 rounded-t-lg overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}