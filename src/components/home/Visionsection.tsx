/* =======================
   🌍 Vision Section
   ======================= */

'use client';
import React from 'react';


const Vision = () => (
  <section id="vision" className="slide-section opacity-0 transform transition-all duration-700 py-16 bg-[#111827] text-gray-300">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <h2 className="text-3xl font-bold text-white text-center">رؤيتنا في PDS</h2>
      <p className="mt-4 text-gray-300 text-base sm:text-lg max-w-3xl mx-auto text-center">
        نؤمن بأن طالب طب الأسنان ليس مضطرًا لانتظار التخرج لبدء العمل. تهدف دبلومتنا إلى تمكين الطلاب والأطباء بمهارات عملية تفتح أمامهم فرص عمل حقيقية، وتمنحهم قدرة على بناء علامة شخصية ومشاريع جانبية مربحة.
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { title: 'تمكين مهني', desc: 'مهارات قابلة للبيع فورًا' },
          { title: 'تعليم تطبيقي', desc: 'مشاريع بورتفوليو على حالات حقيقية' },
          { title: 'دعم طويل الأمد', desc: 'مجتمع وتحديثات مجانية مدى الحياة' },
        ].map((item, i) => (
          <div key={i} className="bg-[#1f2937] p-6 rounded-lg text-center shadow border border-gray-700 hover:border-rose-500 transition">
            <div className="font-semibold text-white">{item.title}</div>
            <div className="text-sm text-gray-400 mt-2">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Vision