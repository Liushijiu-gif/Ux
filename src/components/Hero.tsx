import { ArrowRight, User } from 'lucide-react';
import { Button } from './ui/button';
import Particles from './Particles';

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
      className="pt-16 relative h-[80vh] flex items-center justify-center overflow-hidden bg-blue-100"
    >
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleCount={60}
          particleColor="#3b82f6"
          connectionColor="#60a5fa"
          maxDistance={400}
          speed={0.8}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            <span className="text-blue-600">Hello，I'm</span>
            <br />
            <span className="text-gray-900">刘家铃</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            查看我的作品
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}