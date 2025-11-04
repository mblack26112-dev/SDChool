'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(onFinish, 500)
          return 100
        }
        return prev + 2.5
      })
    }, 100)

    return () => clearInterval(interval)
  }, [onFinish])

  return (
    <div
      className="relative flex items-center justify-center min-h-screen w-full overflow-hidden text-black"
      style={{
        backgroundImage: "url('/loading-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* 🌤️ طبقة شفافة فاتحة لإظهار المحتوى */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />

      {/* المحتوى */}
      <div className="relative z-10 text-center flex flex-col items-center justify-center px-4 w-full h-full animate-fadeIn">
        {/* 🖼️ اللوجو بدون الإطار */}
      <div className="relative w-80 h-80 sm:w-[22rem] sm:h-[22rem] mb-10 animate-fadeZoom">
  <Image
    src="/ff.jpg"
    alt="PDSchool Logo"
    fill
    className="object-contain brightness-110 scale-125 drop-shadow-2xl"
    priority
  />
</div>

        {/* 🔋 شريط التحميل */}
        <div className="w-64 sm:w-80 h-2 bg-gray-300 rounded-full overflow-hidden shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-rose-300 via-rose-500 to-rose-800 transition-all duration-300 ease-in-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-xs text-gray-700 mt-3 tracking-wider">{Math.round(progress)}%</p>
      </div>

      {/* 🌸 تأثير ناعم ورا اللوجو */}
      <div className="absolute w-[30rem] h-[30rem] bg-rose-300/20 blur-3xl rounded-full animate-pulse" />
    </div>
  )
}

