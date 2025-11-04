'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // تحريك شريط التحميل تدريجيًا
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(onFinish, 500) // بعد ما يوصل 100%
          return 100
        }
        return prev + 2.5
      })
    }, 100)

    return () => clearInterval(interval)
  }, [onFinish])

  return (
    <div
      className="relative flex items-center justify-center min-h-screen w-full bg-black overflow-hidden text-white"
      style={{
        backgroundImage: "url('/loading-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* طبقة شفافة */}
      <div className="absolute inset-0 bg-black/75" />

      {/* المحتوى */}
      <div className="relative z-10 text-center flex flex-col items-center justify-center px-4 w-full h-full animate-fadeIn">
        {/* صورة ببوردر متوهج */}
       <div className="relative w-48 h-48 sm:w-60 sm:h-60 mb-5 animate-float">
  {/* 🔥 الإطار الخارجي المتدرج */}
  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-500 via-purple-500 to-blue-500 p-[4px] animate-borderGlow">
    {/* 🖼️ الصورة */}
    <div className="w-full h-full rounded-full bg-black/70 flex items-center justify-center overflow-hidden">
      <Image
        src="/ff.jpg" // ← صورة اللوجو PDSchool
        alt="PDSchool Logo"
        fill
        className="rounded-full object-contain brightness-110 scale-110"
        sizes="(max-width: 768px) 100vw, 33vw"
        priority
      />
    </div>
  </div>
</div>


     



        {/* شريط التحميل */}
        <div className="w-64 sm:w-80 h-2 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-rose-500 via-purple-500 to-blue-500 transition-all duration-300 ease-in-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-xs text-gray-400 mt-2 tracking-wider">{Math.round(progress)}%</p>
      </div>
    </div>
  )
}
