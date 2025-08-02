import React from 'react';
import { Card, CardContent } from './ui/card';
import { Mail, Phone, MessageCircle, MapPin } from 'lucide-react';

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: '邮箱',
      value: '332581402@qq.com',
      link: 'mailto:332581402@qq.com'
    },
    {
      icon: Phone,
      title: '电话',
      value: '13418034440',
      link: 'tel:13418034440'
    },
    {
      icon: MessageCircle,
      title: '微信',
      value: 'Llzzz73',
      link: '#'
    },
    {
      icon: MapPin,
      title: '位置',
      value: '广州',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-16">
          {/* 指示器线条 */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span className="text-sm text-gray-500">04 — Contact</span>
          </div>
          {/* 主标题 */}
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Let's 一起工作！
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            我随时欢迎聊聊新的机会和有趣的项目。
            让我们一起创造出色的作品吧！
          </p>
        </div>

        <div>
          {/* Contact Information */}
          <div className="space-y-8">


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow shadow-sm bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <info.icon className="h-8 w-8 text-blue-600 mr-4 mt-1" />
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h4>
                        <a 
                          href={info.link}
                          className="text-sm text-gray-600 hover:text-blue-600 transition-colors block"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}