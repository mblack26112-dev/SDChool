/* =======================
   🔝 Navbar Component
   ======================= */

 'use client';
import React from 'react';
import {  Menu, X } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 w-full z-50 transition-all duration-500 animate-fadeDown bg-transparent text-gray-100"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-4">
        {/* Logo */}
   <a href="#" className="font-bold text-lg tracking-wide">
  <span className="text-rose-500">PDS</span>
  <span className="text-gray-100">chool</span>
</a>


        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#vision" className="hover:text-rose-400 transition">الرؤية</a>
          <a href="#courses" className="hover:text-rose-400 transition">الدورات</a>
          <a href="#faq" className="hover:text-rose-400 transition">الأسئلة</a>
          <a href="#enroll" className="hover:text-rose-400 transition">تسجيل</a>
          <a
            href="#enroll"
            className="ml-4 bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-600 transition text-sm font-semibold"
          >
            ابدأ الآن
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-100 p-2 rounded hover:bg-gray-700 transition"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile Drawer */}
        {open && (
          <div className="absolute top-full right-0 bg-[#1f2937] text-gray-100 rounded-bl-xl w-48 py-3 px-4 shadow-lg transition-all duration-500">
            <a href="#vision" onClick={() => setOpen(false)} className="block py-2 hover:text-rose-400">الرؤية</a>
            <a href="#courses" onClick={() => setOpen(false)} className="block py-2 hover:text-rose-400">الدورات</a>
            <a href="#faq" onClick={() => setOpen(false)} className="block py-2 hover:text-rose-400">الأسئلة</a>
            <a href="#enroll" onClick={() => setOpen(false)} className="block py-2 hover:text-rose-400">تسجيل</a>
            <a
              href="#enroll"
              className="mt-2 inline-block w-full text-center bg-rose-500 py-2 rounded-md font-semibold hover:bg-rose-600"
            >
              ابدأ الآن
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar