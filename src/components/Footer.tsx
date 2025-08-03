import React from 'react';
import { ScrollAnimation } from './ui/scroll-animation';
import { Mail, Phone, MessageCircle, Github, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: '首页', href: '#home' },
    { name: '关于', href: '#about' },
    { name: '作品集', href: '#portfolio' },
    { name: '技能', href: '#skills' },
    { name: '联系', href: '#contact' },
  ];

  const contactInfo = [
    { icon: Mail, label: '邮箱', value: '332581402@qq.com', href: 'mailto:332581402@qq.com' },
    { icon: Phone, label: '电话', value: '13418034440', href: 'tel:13418034440' },
    { icon: MessageCircle, label: '微信', value: 'Llzzz73', href: '#' },
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com', color: 'hover:text-gray-400' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com', color: 'hover:text-blue-400' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 主要内容区域 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* 导航链接 */}
          <ScrollAnimation stagger={200} staggerIndex={0}>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">快速导航</h4>
              <nav className="space-y-2">
                {navigationLinks.map((link, index) => (
                  <ScrollAnimation key={link.name} stagger={100} staggerIndex={1 + index}>
                    <a
                      href={link.href}
                      className="block text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </ScrollAnimation>
                ))}
              </nav>
            </div>
          </ScrollAnimation>

          {/* 联系方式 */}
          <ScrollAnimation stagger={200} staggerIndex={1}>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">联系方式</h4>
              <div className="space-y-3">
                {contactInfo.map((contact, index) => (
                  <ScrollAnimation key={contact.label} stagger={100} staggerIndex={6 + index}>
                    <a
                      href={contact.href}
                      className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      <contact.icon className="h-4 w-4" />
                      <span>{contact.label}: {contact.value}</span>
                    </a>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* 分隔线 */}
        <ScrollAnimation stagger={200} staggerIndex={2}>
          <div className="border-t border-gray-800 pt-8 mb-8"></div>
        </ScrollAnimation>

        {/* 底部区域 */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* 版权信息 */}
          <ScrollAnimation stagger={200} staggerIndex={3}>
            <p className="text-gray-400 text-sm">
              © {currentYear} 刘家铃。保留所有权利。
            </p>
          </ScrollAnimation>

          {/* 社交媒体链接 */}
          <ScrollAnimation stagger={200} staggerIndex={4}>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <ScrollAnimation key={social.label} stagger={100} staggerIndex={5 + index}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 transition-colors ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                </ScrollAnimation>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </footer>
  );
}