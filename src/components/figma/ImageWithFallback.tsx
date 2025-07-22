import React, { useState } from 'react'

// 浅灰色描边的错误占位符 SVG
const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjRDFENUQ5IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuNiIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIyIj48cmVjdCB4PSIxNiIgeT0iMTYiIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgcng9IjYiLz48cGF0aCBkPSJtMTYgNTggMTYtMTggMzIgMzIiLz48Y2lyY2xlIGN4PSI1MyIgY3k9IjM1IiByPSI3Ii8+PC9zdmc+Cg=='

export function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [didError, setDidError] = useState(false)

  const handleError = () => {
    setDidError(true)
  }

  const { src, alt, style, className, ...rest } = props

  return didError ? (
    <div
      className={`inline-block bg-gray-50 text-center align-middle border border-gray-200 rounded ${className ?? ''}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <div className="flex flex-col items-center justify-center opacity-40">
          <img src={ERROR_IMG_SRC} alt="图片加载失败" className="w-16 h-16" />
          <span className="text-xs text-gray-400 mt-2">图片无法加载</span>
        </div>
      </div>
    </div>
  ) : (
    <img src={src} alt={alt} className={className} style={style} {...rest} onError={handleError} />
  )
}
