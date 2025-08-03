
import { Button } from './ui/button';
import { useState, useEffect } from 'react';

interface HeroProps {
  onResumeClick: () => void;
}

// 打字机效果组件
function TypewriterText({ 
  text, 
  delay = 0, 
  speed = 50, 
  className = "",
  showCursor = true 
}: { 
  text: string; 
  delay?: number; 
  speed?: number; 
  className?: string;
  showCursor?: boolean;
}) {
  const [displayText, setDisplayText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!isVisible) return;

    setIsTyping(true);
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, isVisible]);

  return (
    <span className={className}>
      {displayText}
      {showCursor && isTyping && (
        <span className="animate-pulse text-blue-500">|</span>
      )}
    </span>
  );
}

// 淡入动画组件
function FadeInElement({ 
  children, 
  delay = 0, 
  className = "" 
}: { 
  children: React.ReactNode; 
  delay?: number; 
  className?: string; 
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function Hero({ onResumeClick }: HeroProps) {

  return (
    <section 
      id="home" 
      className="pt-20 pb-[104px] relative flex items-center justify-center overflow-hidden bg-gray-100"
    >
      {/* 弥散光圆形背景 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* 左侧弥散光 - 只露出半个圆形 */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[calc(100vh-208px)] h-[calc(100vh-208px)] bg-blue-200 rounded-full opacity-35 blur-3xl animate-float-slow -translate-x-1/2"></div>
        
        {/* 右侧弥散光 - 只露出半个圆形 */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[calc(100vh-208px)] h-[calc(100vh-208px)] bg-purple-200 rounded-full opacity-30 blur-3xl animate-float-medium translate-x-1/2"></div>
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          {/* Year Badge */}
          <FadeInElement delay={300}>
            <div className="inline-flex items-center gap-2 mb-8 mt-[72px]">
              <div className="w-3 h-3 rounded-full bg-blue-600"></div>
              <span className="text-gray-600 text-sm font-medium">2024-2025</span>
            </div>
          </FadeInElement>

          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <FadeInElement delay={600}>
              <span>Hey, I'm </span>
              <span className="inline-flex items-center">
                <img 
                  src="/images/hero-image-1.png?v=5" 
                  alt="设计师头像" 
                  className="hidden sm:inline h-[1em] w-[1.5em] object-cover rounded-full shadow-md mr-2" 
                />
                <span className="text-blue-600 mx-2">6+0</span>
              </span>
            </FadeInElement>
            <FadeInElement delay={900}>
              <div className="mt-2 whitespace-nowrap">
                <span className="inline-flex items-center">
                  <span>Design</span>
                  <img 
                    src="/images/hero-image-2.png?v=5" 
                    alt="工作场景" 
                    className="hidden sm:inline h-[1em] w-[1.5em] object-cover rounded-full shadow-sm mx-3" 
                  />
                  <span className="ml-3 sm:ml-0">Natural Interactions</span>
                </span>
              </div>
            </FadeInElement>
            <FadeInElement delay={1200}>
              <div className="mt-2">
                <span className="inline-flex items-center">
                  <span className="mr-2">For </span>
                  <img 
                    src="/images/hero-image-5.png?v=5" 
                    alt="专业图片" 
                    className="hidden sm:inline h-[1em] w-[1.5em] object-cover rounded-full shadow-md mr-2" 
                  />
                  <span>Real Users<span className="text-blue-600 font-medium">.</span></span>
                </span>
              </div>
            </FadeInElement>
          </h1>

          {/* Description */}
          <FadeInElement delay={1500}>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            我是一名充满好奇心和热情的用户体验设计师，致力于创造以用户为中心的解决方案， 探索并发现更多有意思的事物。
            </p>
          </FadeInElement>

          {/* CTA Buttons */}
          <FadeInElement delay={1800} className="flex justify-center">
            <Button 
              onClick={onResumeClick}
              size="lg"
              className="bg-gray-900 hover:bg-gray-800 text-white px-4 sm:px-8 md:px-10 lg:px-12 py-2 sm:py-3 rounded-full text-sm sm:text-base md:text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 min-h-[44px] sm:min-h-[48px] md:min-h-[50px]"
            >
              查看我的简历
            </Button>
          </FadeInElement>
        </div>
      </div>
    </section>
  );
}