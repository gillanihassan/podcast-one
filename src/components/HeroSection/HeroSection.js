import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative w-full h-[500px] sm:h-[600px] md:h-[750px] lg:h-[850px] xl:h-[1000px] overflow-hidden">

      {/* Background Image */}
      <Image
        src="/HeroSection/HeroSection.png"   // image public folder ma rakhain
        alt="lady"
        fill
        className="object-cover"
        priority
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end items-end pb-8 pr-6 sm:pb-12 sm:pr-10 md:pb-16 md:pr-16 lg:pb-24 lg:pr-24">
        <div className="text-white text-right font-aeonik font-medium text-[28px] sm:text-[40px] md:text-[56px] lg:text-[64px] xl:text-[64px] leading-[40px] sm:leading-[50px] md:leading-[60px] lg:leading-[70px] xl:leading-[80px] tracking-[-1%]">
          <p>UNLOCKED</p>
          <p>BARELY FAMOUS</p>
          <p>THE ADAM & DREW SHOW</p>
          <p>LADYGANG</p>
          <p>COURT JUNKIE</p>
        </div>
      </div>

    </div>
  );
}