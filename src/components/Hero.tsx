// 使用本地图片路径替代Figma资源（您可以将图片放在 public/images/ 目录下）
const image_75e7db36aabcd69336d304040051e76761eb9d4b = '/images/hero-image-1.png';
const image_097958650da955e70cb8e3ea92e81809a45043a8 = '/images/hero-image-2.png';
const image_4001e5c1836fe82cb0ca73617c9bab27bea0e31d = '/images/hero-image-4.png';
const image_446c81d38d39d282af561a1bea604e321eb70f2a = '/images/hero-image-5.png';
const image_c07984ac85a54106d67622431d9a698f6172e23c = '/images/hero-image-3.png';
import { ArrowRight, User } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroProps {
  onResumeClick: () => void;
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
      className="pt-16 relative bg-gradient-to-br from-blue-50 to-slate-100"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
          {/* Left: Avatar and Intro */}
          <div className="lg:col-span-5 flex items-center space-x-6">
            <div className="w-28 h-28 rounded-full overflow-hidden bg-gray-50 border border-gray-200 flex-shrink-0">
              <ImageWithFallback
                src={image_75e7db36aabcd69336d304040051e76761eb9d4b}
                alt="刘家铃"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-xl text-[20px] font-normal">
                <span className="text-blue-600 text-[24px]">Hello，我是</span>
                <span className="text-gray-700 text-[24px]">刘家铃，</span>
              </p>
              <p className="text-gray-700 text-[24px]">一名UI/UX设计师。</p>
            </div>
          </div>

          {/* Right: Buttons */}
          <div className="lg:col-span-7 lg:text-right">
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <Button 
                onClick={onResumeClick}
                variant="outline" 
                size="lg"
                className="!border-gray-200 bg-white text-gray-700 hover:bg-gray-100 hover:!border-gray-300 hover:text-gray-800"
              >
                <User className="mr-2 h-5 w-5" />
                查看我的简历
              </Button>
              <Button 
                onClick={scrollToPortfolio}
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                查看我的作品
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Stats and Images Grid - 减少间距为 gap-4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {/* Column 1: Image on top, Data on bottom */}
          <div className="flex flex-col gap-4">
            {/* Image 1 - Rectangle */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
              <ImageWithFallback
                src={image_c07984ac85a54106d67622431d9a698f6172e23c}
                alt="设计工作台"
                className="w-full h-112 object-cover"
              />
            </div>
            {/* Stat 1 - Square - 更新样式 */}
            <div className="bg-[#FCFDFF] rounded-3xl shadow-sm h-40 flex flex-col justify-center p-4">
              <div className="text-[28px] font-bold text-gray-900 mb-1">4</div>
              <p className="text-gray-500">年工作经验</p>
            </div>
          </div>

          {/* Column 2: Data on top, Image on bottom */}
          <div className="flex flex-col gap-4">
            {/* Stat 2 - Square - 更新样式 */}
            <div className="bg-[#FCFDFF] rounded-3xl shadow-sm h-40 flex flex-col justify-center p-4">
              <div className="text-[28px] font-bold text-gray-900 mb-1">15+</div>
              <p className="text-gray-500">完成项目</p>
            </div>
            {/* Image 2 - Rectangle */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
              <ImageWithFallback
                src={image_446c81d38d39d282af561a1bea604e321eb70f2a}
                alt="团队协作"
                className="w-full h-112 object-cover"
              />
            </div>
          </div>

          {/* Column 3: Image on top, Data on bottom */}
          <div className="flex flex-col gap-4">
            {/* Image 3 - Rectangle */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
              <ImageWithFallback
                src={image_4001e5c1836fe82cb0ca73617c9bab27bea0e31d}
                alt="用户体验设计"
                className="w-full h-112 object-cover"
              />
            </div>
            {/* Stat 3 - Square - 更新样式 */}
            <div className="bg-[#FCFDFF] rounded-3xl shadow-sm h-40 flex flex-col justify-center p-4">
              <div className="text-[28px] font-bold text-gray-900 mb-1">150+</div>
              <p className="text-gray-500">设计组件</p>
            </div>
          </div>

          {/* Column 4: Data on top, Image on bottom */}
          <div className="flex flex-col gap-4">
            {/* Stat 4 - Square - 更新样式 */}
            <div className="bg-[#FCFDFF] rounded-3xl shadow-sm h-40 flex flex-col justify-center p-4">
              <div className="text-[28px] font-bold text-gray-900 mb-1">100%</div>
              <p className="text-gray-500">设计热情</p>
            </div>
            {/* Image 4 - Rectangle */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
              <ImageWithFallback
                src={image_097958650da955e70cb8e3ea92e81809a45043a8}
                alt="数据可视化"
                className="w-full h-112 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}