"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about-section"
      className="relative w-full min-h-[100px] md:min-h-screen bg-[#FDF4E3] font-sans flex flex-col items-center"
    >
      <div className="w-full max-w-[1980px] px-8 lg:px-12 flex-grow flex flex-col justify-center pb-24 lg:pb-32 pt-12 lg:pt-8 mt-4">
        {/* Main Text */}
        <div className="max-w-[1100px]">
          <h1 className="font-aeonik text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] xl:text-[60px] font-medium leading-[150%] sm:leading-[110%] tracking-[-0.02em] text-[#350A32]">
            PodcastOne is a Los Angeles-based podcast platform that provides
            creators and advertisers with a comprehensive end-to-end solution
            for sales, marketing, public relations, production and
            distribution.
          </h1>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 md:gap-16 lg:gap-0 mt-20 lg:mt-32 pt-10">
          <div className="w-auto" >
            <h2 className="font-aeonik text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] xl:text-[84px] tracking-[-0.5%] lg:tracking-[-0.8%] xl:tracking-[-1%] font-medium text-[#FF3C3C]">
              #9
            </h2>
            <p className="font-aeonik text-[18px] md:text-[20px] xl:text-[22px] text-[#350A32] max-w-[230px] leading-[20px] sm:leading-[22px] md:leading-[24px] lg:leading-[27px]">
              ranking on Podtrac’s top podcast publishers
            </p>
          </div>

          <div className="w-auto">
            <h2 className="font-aeonik text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] xl:text-[84px] tracking-[-0.5%] lg:tracking-[-0.8%] xl:tracking-[-1%] font-medium text-[#FF3C3C]">
              5.9M
            </h2>
            <p className="font-aeonik text-[18px] md:text-[20px] xl:text-[22px] text-[#350A32] max-w-[230px] leading-[20px] sm:leading-[22px] md:leading-[24px] lg:leading-[27px]">
              monthly unique listeners
            </p>
          </div>

          <div className="w-auto">
            <h2 className="font-aeonik text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] xl:text-[84px] tracking-[-0.5%] lg:tracking-[-0.8%] xl:tracking-[-1%] font-medium text-[#FF3C3C]">
              18.0M
            </h2>
            <p className="font-aeonik text-[18px] md:text-[20px] xl:text-[22px] text-[#350A32] max-w-[230px] leading-[20px] sm:leading-[22px] md:leading-[24px] lg:leading-[27px]">
              monthly downloads and streams
            </p>
          </div>

          <div className="w-auto">
            <h2 className="font-aeonik text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] xl:text-[84px] tracking-[-0.5%] lg:tracking-[-0.8%] xl:tracking-[-1%] font-medium text-[#FF3C3C]">
              550+
            </h2>
            <p className="font-aeonik text-[18px] md:text-[20px] xl:text-[22px] text-[#350A32] max-w-[230px] leading-[20px] sm:leading-[22px] md:leading-[24px] lg:leading-[27px]">
              advertisers
            </p>
          </div>
        </div>

        {/* <div className="flex flex-wrap items-start gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-30 mt-20 lg:mt-32 pt-10" style={{ border: "2px solid red" }}>
          <div className="w-auto">
            <h2 className="font-aeonik text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] xl:text-[84px] tracking-[-0.5%] lg:tracking-[-0.8%] xl:tracking-[-1%] font-medium text-[#FF3C3C]">
              #9
            </h2>
            <p className="font-aeonik text-[18px] md:text-[20px] xl:text-[22px] text-[#350A32] max-w-[230px] leading-[20px] sm:leading-[22px] md:leading-[24px] lg:leading-[27px]">
              ranking on Podtrac’s top podcast publishers
            </p>
          </div>

          <div className="w-auto">
            <h2 className="font-aeonik text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] xl:text-[84px] tracking-[-0.5%] lg:tracking-[-0.8%] xl:tracking-[-1%] font-medium text-[#FF3C3C]">
              5.9M
            </h2>
            <p className="font-aeonik text-[18px] md:text-[20px] xl:text-[22px] text-[#350A32] max-w-[230px] leading-[20px] sm:leading-[22px] md:leading-[24px] lg:leading-[27px]">
              monthly unique listeners
            </p>
          </div>

          <div className="w-auto">
            <h2 className="font-aeonik text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] xl:text-[84px] tracking-[-0.5%] lg:tracking-[-0.8%] xl:tracking-[-1%] font-medium text-[#FF3C3C]">
              18.0M
            </h2>
            <p className="font-aeonik text-[18px] md:text-[20px] xl:text-[22px] text-[#350A32] max-w-[230px] leading-[20px] sm:leading-[22px] md:leading-[24px] lg:leading-[27px]">
              monthly downloads and streams
            </p>
          </div>

          <div className="w-auto">
            <h2 className="font-aeonik text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] xl:text-[84px] tracking-[-0.5%] lg:tracking-[-0.8%] xl:tracking-[-1%] font-medium text-[#FF3C3C]">
              550+
            </h2>
            <p className="font-aeonik text-[18px] md:text-[20px] xl:text-[22px] text-[#350A32] max-w-[230px] leading-[20px] sm:leading-[22px] md:leading-[24px] lg:leading-[27px]">
              advertisers
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
}