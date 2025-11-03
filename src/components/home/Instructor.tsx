/* =======================
   👨‍🏫 Instructor
   ======================= */
import React from 'react';
import Image from 'next/image';

const Instructor = () => (
  <section className="slide-section opacity-0 transform transition-all duration-700 py-16 bg-[#111827] text-gray-300 text-center">
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <h2 className="text-2xl font-bold text-white">عن المحاضر</h2>
      <p className="mt-3 text-gray-300 text-base">
        DR - MOHAMED ELBAZ — مصمم بصري، مؤسس Para Dental School ووكالات إعلامية متخصصة في المجال الطبي.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row items-center gap-6 justify-center">
        {/* ✅ الصورة مظبوطة داخل الدايرة */}
        <div className="relative w-28 h-28 sm:w-36 sm:h-36 bg-gray-700 rounded-full overflow-hidden flex items-center justify-center">
          <Image
            src="/loading2.jpg"
            alt="Profile"
            fill
            className="object-cover rounded-full"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority
          />
        </div>

        <div className="text-center sm:text-left">
          <div className="font-semibold text-lg text-white">MOHAMED ELBAZ</div>
          <div className="text-sm text-gray-400 mt-1">
            Visual & Motion Designer — Founder of Para Dental School
          </div>
          <ul className="mt-3 space-y-1 text-sm text-gray-300">
            <li>Graphic & Motion Design</li>
            <li>3D / CGI / Presentation Design</li>
            <li>Media Buying & Videography</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Instructor;
