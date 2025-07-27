import { ArrowRight, User } from 'lucide-react';
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
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="pt-16 relative h-[900px] flex items-center justify-start overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100"
    >
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="mb-24">
          {/* 第一模块：小字欢迎语 */}
          <FadeInElement delay={2600}>
            <p className="text-lg text-gray-500 mb-6 font-futura">
              欢迎来到我的个人网站！
            </p>
          </FadeInElement>
          
          {/* 标签模块 */}
          <div className="flex flex-wrap gap-3 mb-24">
            <FadeInElement delay={3100}>
              <span className="px-3 py-1 border border-gray-500 text-gray-500 rounded text-sm font-medium font-futura">
                AI TOOLS
              </span>
            </FadeInElement>
            <FadeInElement delay={3200}>
              <span className="px-3 py-1 border border-gray-500 text-gray-500 rounded text-sm font-medium font-futura">
                LOW CODE
              </span>
            </FadeInElement>
            <FadeInElement delay={3300}>
              <span className="px-3 py-1 border border-gray-500 text-gray-500 rounded text-sm font-medium font-futura">
                UI\UX
              </span>
            </FadeInElement>
            <FadeInElement delay={3400}>
              <span className="px-3 py-1 border border-gray-500 text-gray-500 rounded text-sm font-medium font-futura">
                DESIGN SYSTEM
              </span>
            </FadeInElement>
          </div>
          
          {/* 第二模块：大字自我介绍 */}
          <h1 className="text-7xl md:text-8xl text-gray-800 mb-4 leading-[1.5] font-futura">
            <span className="text-blue-600 font-black">
              <TypewriterText 
                text="JiaLing's Design Portfolio" 
                delay={300} 
                speed={120}
              />
            </span>
            <br />
            <span className="text-gray-900 font-black text-6xl md:text-5xl">
              <TypewriterText 
                text="Creating natural designs" 
                delay={2000} 
                speed={100}
              />
            </span>
          </h1>
          

        </div>

        {/* 第四模块：按钮 */}
        <FadeInElement delay={3700} className="flex flex-col sm:flex-row gap-4">
          <Button 
            onClick={onResumeClick}
            variant="outline" 
            size="lg"
            className="!border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:!border-gray-400"
          >
            <User className="mr-2 h-5 w-5" />
            查看我的简历
          </Button>
          <Button 
            onClick={scrollToPortfolio}
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <ArrowRight className="mr-2 h-5 w-5" />
            查看我的作品
          </Button>
        </FadeInElement>
      </div>
    </section>
  );
}