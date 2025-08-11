import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectDetail } from './components/ProjectDetail';
import { Resume } from './components/Resume';
import { BackToTop } from './components/BackToTop';
import { AdminPanel } from './components/AdminPanel';

// 导入项目数据
import { projectsData, projectDetails } from './data/projects';

export default function App() {
  const [currentView, setCurrentView] = useState<'main' | 'project' | 'resume' | 'admin'>('main');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [savedScrollPosition, setSavedScrollPosition] = useState<number>(0);

  // 从URL参数初始化状态
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const view = urlParams.get('view');
    const projectId = urlParams.get('projectId');
    
    if (view === 'project' && projectId) {
      const projectIdNum = parseInt(projectId);
      if (projectDetails[projectIdNum as keyof typeof projectDetails]) {
        setCurrentView('project');
        setSelectedProject(projectIdNum);
        return;
      }
    } else if (view === 'resume') {
      setCurrentView('resume');
      return;
    } else if (view === 'admin') {
      setCurrentView('admin');
      return;
    }
    
    // 默认显示主页
    setCurrentView('main');
    setSelectedProject(null);
  }, []);

  // 更新URL参数
  const updateURL = (view: string, projectId?: number) => {
    const url = new URL(window.location.href);
    url.searchParams.set('view', view);
    
    if (projectId !== undefined) {
      url.searchParams.set('projectId', projectId.toString());
    } else {
      url.searchParams.delete('projectId');
    }
    
    window.history.replaceState({}, '', url.toString());
  };

  // 处理项目点击
  const handleProjectClick = (projectId: number) => {
    setSavedScrollPosition(window.scrollY);
    setSelectedProject(projectId);
    setCurrentView('project');
    updateURL('project', projectId);
    window.scrollTo(0, 0);
  };

  // 处理简历点击
  const handleResumeClick = () => {
    setSavedScrollPosition(window.scrollY);
    setCurrentView('resume');
    updateURL('resume');
    window.scrollTo(0, 0);
  };

  // 处理管理员面板
  const handleAdminClick = () => {
    setSavedScrollPosition(window.scrollY);
    setCurrentView('admin');
    updateURL('admin');
    window.scrollTo(0, 0);
  };

  // 处理返回主页
  const handleBackToMain = () => {
    setCurrentView('main');
    setSelectedProject(null);
    updateURL('main');
    setTimeout(() => {
      window.scrollTo(0, savedScrollPosition);
    }, 100);
  };

  // 检查是否通过URL参数显示管理员入口
  const showAdminEntrance = () => {
    if (typeof window === 'undefined') return false;
    
    // 通过URL参数或hash显示管理员入口
    return window.location.search.includes('admin=true') ||
           window.location.hash.includes('#admin');
  };

  // 键盘快捷键监听（Ctrl + Shift + A 打开管理员面板）
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'A') {
        event.preventDefault();
        handleAdminClick();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // 渲染管理员面板
  if (currentView === 'admin') {
    return <AdminPanel onClose={handleBackToMain} />;
  }

  // 渲染简历页面
  if (currentView === 'resume') {
    return (
      <>
        <Resume onBack={handleBackToMain} />
        <BackToTop />
      </>
    );
  } 

  // 渲染项目详情页面
  if (currentView === 'project' && selectedProject) {
    const project = projectDetails[selectedProject as keyof typeof projectDetails];
    if (project) {
      return (
        <>
          <ProjectDetail 
            project={project} 
            onBack={handleBackToMain} 
            onProjectClick={handleProjectClick}
          />
          <BackToTop />
        </>
      );
    }
  }

  // 渲染主页
  return (
    <div className="min-h-screen bg-white">
      <Navigation onAdminClick={showAdminEntrance() ? handleAdminClick : undefined} />
      <Hero onResumeClick={handleResumeClick} />
      <About />
      <Portfolio projects={projectsData} onProjectClick={handleProjectClick} />
      <Skills />
      <Contact />
      <Footer />
      <BackToTop />
      
      {/* 隐藏的管理员入口 */}
      {showAdminEntrance() && (
        <div className="fixed bottom-4 left-4 z-50">
          <button
            onClick={handleAdminClick}
            className="bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
            title="管理员面板 (Ctrl+Shift+A)"
          >
            ⚙️
          </button>
        </div>
      )}
    </div>
  );
}