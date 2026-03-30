import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#2D0A2E] text-white h-[115vh] sm:h-[80vh] ">

      {/* Top Section */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 pt-16 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_2fr] gap-10">

          {/* Left Nav Links */}
          <div className="space-y-3">
            <p className="font-inter cursor-pointer text-[#FFFFFF] text-lg tracking-[-3%] font-normal">Podcasts</p>
            <p className="font-inter cursor-pointer text-[#FFFFFF] text-lg tracking-[-3%] font-normal">About</p>
            <p className="font-inter cursor-pointer text-[#FFFFFF] text-lg tracking-[-3%] font-normal">Advertise</p>
            <p className="font-inter cursor-pointer text-[#FFFFFF] text-lg tracking-[-3%] font-normal">Careers</p>
          </div>

          {/* Social / Platform Links */}
          <div className="space-y-3">
            <p className="font-inter cursor-pointer -[#FFFFFF] text-lg tracking-[-3%] font-normal">Apple Podcasts</p>
            <p className="font-inter cursor-pointer text-[#FFFFFF] text-lg tracking-[-3%] font-normal">Spotify</p>
            <p className="font-inter cursor-pointer text-[#FFFFFF] text-lg tracking-[-3%] font-normal">Instagram</p>
            <p className="font-inter cursor-pointer text-[#FFFFFF] text-lg tracking-[-3%] font-normal">YouTube</p>
          </div>

          {/* Newsletter */}
          <div>
            <p className="font-inter cursor-pointer text-[#FFFFFF] text-lg tracking-[-3%] font-normal">Subscribe to newsletter</p>
            <div className="flex items-center border-b border-white/30 pb-3 mt-8">
              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent outline-none w-full text-[#F2B2EC] footer-email-input"
                style={{ fontSize: "38px", fontWeight: 400 }}
              />
              <Image
                src="/footer/footer-sider.png"
                alt="podcastone"
                width={34}
                height={34}
              />
            </div>
          </div>

        </div>
      </div>

      {/* Large Logo */}
      <div className="w-full mt-40 overflow-hidden flex justify-center px-12 md:px-0">
        <Image
          src="/footer/footer-logo.png"
          alt="podcastone"
          width={1440}
          height={200}
          className="w-full xl:w-[1336px] h-auto"
        />
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 py-5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 mt-7">
        <p className="text-[#FFFFFF] font-inter text-[14px] tracking-[-3%] font-normal">© 2026 PodcastOne. All Rights Reserved.</p>
        <div className="flex gap-6 mt-3 md:mt-0">
          <p className="text-[#FFFFFF] font-inter text-[14px] tracking-[-3%] font-normal">Privacy Policy</p>
          <p className="text-[#FFFFFF] font-inter text-[14px] tracking-[-3%] font-normal hover:opacity-70 cursor-pointer transition-opacity">Legal</p>
        </div>
      </div>

    </footer>
  );
}
