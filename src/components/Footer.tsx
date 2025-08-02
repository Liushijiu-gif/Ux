import React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} 刘家铃。保留所有权利。
          </p>
        </div>
      </div>
    </footer>
  );
}