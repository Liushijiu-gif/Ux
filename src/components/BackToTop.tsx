import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { Button } from './ui/button';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // 监听滚动事件
  useEffect(() => {
    const toggleVisibility = () => {
      // 当滚动距离超过一个视窗高度时显示按钮
      if (window.pageYOffset > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // 滚动到顶部
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <Button
        onClick={scrollToTop}
        size="lg"
        className="w-12 h-12 rounded-full bg-gray-900 hover:bg-gray-800 text-white hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 p-0"
        aria-label="回到顶部"
      >
        <ChevronUp className="h-6 w-6" />
      </Button>
    </div>
  );
}