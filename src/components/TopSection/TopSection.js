"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function TopSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutSection, setIsAboutSection] = useState(false);

  useEffect(() => {
    const aboutEl = document.getElementById("about-section");
    if (!aboutEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsAboutSection(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(aboutEl);
    return () => observer.disconnect();
  }, []);

  // Dynamic color tokens
  const navBg = isAboutSection ? "bg-[#FDF4E3]" : "bg-transparent";
  const textColor = isAboutSection ? "text-[#350A32]" : "text-white";
  const borderColor = isAboutSection ? "border-[#350A32]" : "border-white/60";
  const iconColor = isAboutSection ? "text-[#350A32]" : "text-white/80";
  const placeholderColor = isAboutSection ? "placeholder:text-[#350A32]" : "placeholder:text-white/80";
  const logoSrc = isAboutSection ? "/about/logo.png" : "/TopSection/podcast-logo.png";

  return (
    <section className="relative w-full h-screen text-white overflow-hidden font-sans">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/TopSection/hero-bg.png"
          alt="podcast"
          fill
          priority
          className="object-cover object-[25%_0%] sm:object-[center_10%] md:object-[center_15%] lg:object-[center_20%] 2xl:object-[center_25%]"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Sticky Navbar */}
      <header className={`fixed top-0 left-0 w-full flex items-center px-6 lg:px-12 py-6 z-50 transition-colors duration-300 ${navBg}`}>
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src={logoSrc}
            alt="PodcastOne Logo"
            width={174}
            height={30}
            className="object-contain"
          />
        </div>

        {/* Spacer */}
        <div className="flex-grow"></div>

        {/* Right Section: Search + Navigation + Button */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">

          {/* Search Bar */}
          <div className={`relative flex items-center bg-transparent border ${borderColor} rounded-full px-4 py-1.5 w-[260px] xl:w-[280px] transition-colors duration-300`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 shrink-0 transition-colors duration-300 ${iconColor}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search shows, episodes..."
              className={`bg-transparent border-none outline-none text-[13px] ml-2 w-full transition-colors duration-300 ${textColor} ${placeholderColor}`}
            />
          </div>

          {/* Menu */}
          <nav className="flex items-center gap-5 xl:gap-7">
            {["SHOWS", "LIVE", "CATEGORIES", "NEWS", "FOR ADVERTISERS"].map((item) => (
              <a
                key={item}
                href="#"
                className={`font-aeonik text-sm font-normal tracking-wide transition-colors duration-300 ${textColor}`}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Listen Now Button */}
          <button className="font-aeonik bg-[#FF3C3C] hover:bg-red-500 transition-colors text-white text-[13px] xl:text-[14px] uppercase tracking-wide px-7 py-2.5 rounded-full">
            LISTEN NOW
          </button>
        </div>

        {/* Hamburger (Mobile) */}
        <button
          className={`lg:hidden focus:outline-none transition-colors duration-300 ${textColor}`}
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#0B0F19]/90 flex flex-col items-center justify-center pt-20 pb-10 px-6 backdrop-blur-lg">
          <button
            className="absolute top-6 right-6 text-white text-4xl focus:outline-none"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            &times;
          </button>

          {/* Search Bar */}
          <div className="relative flex items-center bg-transparent border border-white/60 rounded-full px-5 py-2.5 w-full max-w-[320px] mb-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white/80 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search shows, episodes..."
              className="bg-transparent border-none outline-none text-white text-[16px] ml-3 w-full placeholder:text-white/80"
            />
          </div>

          {/* Mobile Links */}
          <nav className="flex flex-col items-center gap-6 mb-10">
            {["SHOWS", "LIVE", "CATEGORIES", "NEWS", "FOR ADVERTISERS"].map((item) => (
              <a
                key={item}
                href="#"
                className="font-aeonik text-[18px] font-normal tracking-wide text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>

          <button
            className="font-aeonik bg-[#FF3C3C] hover:bg-red-500 transition-colors text-white text-[16px] uppercase tracking-wide px-10 py-3 rounded-full"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            LISTEN NOW
          </button>
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4 pt-10">
        <h1 className="font-aeonik text-[40px] sm:text-[56px] md:text-[72px] lg:text-[88px] xl:text-[96px] font-medium leading-[48px] sm:leading-[64px] md:leading-[82px] lg:leading-[96px] xl:leading-[106px] text-white tracking-[0%]">
          The Jordan
          <br />
          Harbinger Show
        </h1>

        <p className="mt-7 font-aeonik text-white text-2xl sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-normal leading-[27px] sm:leading-[22px] md:leading-[24px] lg:leading-[26px] xl:leading-[27px] tracking-[0%]">
          New episode exploring high-performance
          <br /> habits and human behavior.
        </p>

        <div className="flex items-center gap-4 mt-8">
          <button className="flex items-center justify-center bg-white text-[#350A32] font-aeonik px-4 sm:px-5 md:px-6 lg:px-8 py-[4px] sm:py-[6px] md:py-[5px] lg:py-[6px] rounded-full text-[14px] sm:text-[18px] md:text-[20px] lg:text-[23px] xl:text-[25px] font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
              <path d="M8 5.14v14.72a1 1 0 001.5.86l11-7.36a1 1 0 000-1.72l-11-7.36a1 1 0 00-1.5.86z" />
            </svg>
            Play Episode
          </button>

          <button className="flex items-center justify-center font-aeonik bg-transparent border border-white/80 hover:bg-white/10 transition-colors text-white px-4 sm:px-5 md:px-6 lg:px-8 py-[4px] sm:py-[5px] md:py-[5px] lg:py-[6px] rounded-full font-medium text-[14px] sm:text-[18px] md:text-[20px] lg:text-[23px] xl:text-[25px]">
            View Show
          </button>
        </div>
      </div>
    </section>
  );
}
