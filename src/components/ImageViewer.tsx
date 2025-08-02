import React, { useState, useEffect, useRef, useCallback } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface ImageViewerProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}

export function ImageViewer({ images, currentIndex, isOpen, onClose, onIndexChange }: ImageViewerProps) {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // 重置图片状态
  const resetImageState = useCallback(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
    setIsLoading(true);
    setHasError(false);
  }, []);

  // 当图片索引改变时重置状态
  useEffect(() => {
    if (isOpen) {
      resetImageState();
    }
  }, [currentIndex, isOpen, resetImageState]);

  // 键盘事件处理
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          handlePrevious();
          break;
        case 'ArrowRight':
          handleNext();
          break;
        case '+':
        case '=':
          handleZoomIn();
          break;
        case '-':
          handleZoomOut();
          break;
        case '0':
          resetImageState();
          break;
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, currentIndex, images.length]);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      onIndexChange(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      onIndexChange(currentIndex + 1);
    }
  };

  const handleZoomIn = () => {
    setScale(prev => Math.min(prev * 1.25, 5));
  };

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev / 1.25, 0.1));
  };

  const handleFitToScreen = () => {
    resetImageState();
  };

  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    setScale(prev => Math.min(Math.max(prev * delta, 0.1), 5));
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (scale <= 1) return;
    
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  }, [scale, position]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || scale <= 1) return;

    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  }, [isDragging, dragStart, scale]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleImageLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const currentImage = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black bg-opacity-95 flex items-center justify-center"
      onClick={handleBackdropClick}
      ref={containerRef}
    >
      {/* 工具栏 */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-3 z-10 shadow-lg">
        <button
          onClick={handleZoomOut}
          className="text-white hover:text-blue-400 transition-colors p-1 rounded hover:bg-white hover:bg-opacity-10"
          title="缩小 (-)"
        >
          <ZoomOut size={18} />
        </button>
        
        <span className="text-white text-sm min-w-[60px] text-center font-mono">
          {Math.round(scale * 100)}%
        </span>
        
        <button
          onClick={handleZoomIn}
          className="text-white hover:text-blue-400 transition-colors p-1 rounded hover:bg-white hover:bg-opacity-10"
          title="放大 (+)"
        >
          <ZoomIn size={18} />
        </button>
        
        <div className="w-px h-5 bg-gray-600"></div>
        
        <button
          onClick={handleFitToScreen}
          className="text-white hover:text-blue-400 transition-colors p-1 rounded hover:bg-white hover:bg-opacity-10"
          title="适应屏幕 (0)"
        >
          <Maximize2 size={18} />
        </button>
        
        <button
          onClick={resetImageState}
          className="text-white hover:text-blue-400 transition-colors p-1 rounded hover:bg-white hover:bg-opacity-10"
          title="重置位置"
        >
          <RotateCcw size={18} />
        </button>
        
        <div className="w-px h-5 bg-gray-600"></div>
        
        <span className="text-white text-sm font-medium">
          {currentIndex + 1} / {images.length}
        </span>
      </div>

      {/* 关闭按钮 */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-red-400 transition-colors z-10 bg-black bg-opacity-50 backdrop-blur-sm rounded-full p-2 hover:bg-opacity-70 shadow-lg"
        title="关闭 (ESC)"
      >
        <X size={24} />
      </button>

      {/* 导航按钮 */}
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-400 transition-colors disabled:opacity-30 disabled:cursor-not-allowed z-10 bg-black bg-opacity-50 backdrop-blur-sm rounded-full p-3 hover:bg-opacity-70 shadow-lg"
            title="上一张 (←)"
          >
            <ChevronLeft size={28} />
          </button>
          
          <button
            onClick={handleNext}
            disabled={currentIndex === images.length - 1}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-400 transition-colors disabled:opacity-30 disabled:cursor-not-allowed z-10 bg-black bg-opacity-50 backdrop-blur-sm rounded-full p-3 hover:bg-opacity-70 shadow-lg"
            title="下一张 (→)"
          >
            <ChevronRight size={28} />
          </button>
        </>
      )}

      {/* 加载指示器 */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mb-4"></div>
            <span className="text-white text-sm">加载中...</span>
          </div>
        </div>
      )}

      {/* 错误提示 */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-center">
            <div className="text-4xl mb-2">⚠️</div>
            <div className="text-lg mb-2">图片加载失败</div>
            <div className="text-sm text-gray-400">请检查图片路径是否正确</div>
          </div>
        </div>
      )}

      {/* 图片容器 */}
      {!hasError && (
        <div
          className="flex items-center justify-center w-full h-full overflow-hidden"
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          style={{ cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default' }}
        >
          <img
            ref={imageRef}
            src={currentImage}
            alt={`图片 ${currentIndex + 1}`}
            className="max-w-none transition-opacity duration-200 select-none"
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
              opacity: isLoading ? 0 : 1,
              maxHeight: scale === 1 ? '90vh' : 'none',
              maxWidth: scale === 1 ? '90vw' : 'none',
            }}
            onLoad={handleImageLoad}
            onError={handleImageError}
            draggable={false}
          />
        </div>
      )}

      {/* 使用提示 */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 backdrop-blur-sm rounded-lg px-4 py-2 text-white text-xs text-center shadow-lg">
        <div className="flex flex-wrap justify-center gap-4">
          <span className="flex items-center gap-1">
            <span className="w-4 h-4 bg-white bg-opacity-20 rounded text-center leading-4">⚲</span>
            滚轮缩放
          </span>
          <span className="flex items-center gap-1">
            <span className="w-4 h-4 bg-white bg-opacity-20 rounded text-center leading-4">✋</span>
            拖拽移动
          </span>
          <span className="flex items-center gap-1">
            <span className="w-4 h-4 bg-white bg-opacity-20 rounded text-center leading-4">←</span>
            <span className="w-4 h-4 bg-white bg-opacity-20 rounded text-center leading-4">→</span>
            切换图片
          </span>
          <span className="flex items-center gap-1">
            <span className="px-1 h-4 bg-white bg-opacity-20 rounded text-center leading-4 text-xs">ESC</span>
            关闭
          </span>
        </div>
      </div>
    </div>
  );
} 