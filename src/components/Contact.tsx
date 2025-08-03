import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Mail, Phone, MessageCircle, MapPin, Check } from 'lucide-react';
import { ScrollAnimation } from './ui/scroll-animation';

export function Contact() {
  // 复制状态
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  // 复制到剪贴板函数
  const copyToClipboard = async (text: string, itemName: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(itemName);
      setTimeout(() => setCopiedItem(null), 2000); // 2秒后清除状态
    } catch (err) {
      console.error('复制失败:', err);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: '邮箱联系',
      value: '332581402@qq.com',
      itemName: 'email'
    },
    {
      icon: Phone,
      title: '电话联系',
      value: '13418034440',
      itemName: 'phone'
    },
    {
      icon: MessageCircle,
      title: '微信联系',
      value: 'Llzzz73',
      itemName: 'wechat'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-16">
          {/* 指示器线条 */}
          <ScrollAnimation stagger={200} staggerIndex={0}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-sm text-gray-500">04 — Contact</span>
            </div>
          </ScrollAnimation>
          {/* 主标题 */}
          <ScrollAnimation stagger={200} staggerIndex={1}>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Let's 一起工作！
            </h2>
          </ScrollAnimation>
          <ScrollAnimation stagger={200} staggerIndex={2}>
            <p className="text-lg text-gray-600 max-w-3xl">
              我随时欢迎聊聊新的机会和有趣的项目。
              让我们一起创造出色的作品吧！
            </p>
          </ScrollAnimation>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => (
            <ScrollAnimation key={index} stagger={200} staggerIndex={3 + index}>
              <Card 
                className="hover:shadow-md transition-shadow shadow-sm bg-white border border-gray-200 cursor-pointer"
                onClick={() => copyToClipboard(info.value, info.itemName)}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col">
                    <div className="w-16 h-16 flex items-start justify-start mb-4">
                      <info.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h4>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600">
                        {info.value}
                      </span>
                      {copiedItem === info.itemName && (
                        <div className="flex items-center gap-1 text-green-600 text-sm">
                          <Check className="h-4 w-4" />
                          <span>已复制</span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}