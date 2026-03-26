import Image from "next/image";

export default function PodcastSection() {
  return (
    <section className="bg-[#FDF4E3] py-20">
      <div className="max-w-6xl mx-auto px-8 space-y-24">

        {/* Row 1 */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[430px] xl:w-[522px] xl:h-[481px] rounded-2xl overflow-hidden">
            <Image
              src="/podcast/podcast1.png"
              alt="Polished Professional Podcasts"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <h2 className="font-aeonik text-[#350A32] text-6xl md:text-5xl tracking-[-1%] font-semibold mb-5">
              Polished, Professional Podcasts
            </h2>

            <p className="text-[16px] text-[#350A32] font-aeonik font-normal mb-8 leading-[18px] sm:leading-[20px] md:leading-[21px] lg:leading-[22px] xl:leading-[23px] tracking[-3%] max-w-lg">
              From in-studio video and audio recording to comprehensive podcast
              strategy, PodcastOne Pro offers fully customizable production packages
              for brands, professionals, or hobbyists.
            </p>

            <div>
              <button className="bg-[#F2B2EC] text-[#350A32] text-sm sm:text-base md:text-base lg:text-lg xl:text-lg font-medium px-7 py-2.5 rounded-[29px] hover:bg-[#df8fb0] transition-colors tracking-[-3%]">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[430px] xl:w-[522px] xl:h-[481px] rounded-2xl overflow-hidden">
            <Image
              src="/podcast/podcast2.png"
              alt="Investor Relations"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <h2 className="font-aeonik text-[#350A32] text-6xl md:text-5xl tracking-[-1%] font-semibold mb-5">
              Investor Relations
            </h2>

            <p className="text-[16px] text-[#350A32] font-aeonik font-normal mb-8 leading-[18px] sm:leading-[20px] md:leading-[21px] lg:leading-[22px] xl:leading-[23px] tracking[-3%] max-w-lg">
              PodcastOne has surpassed 3.9 billion total downloads with a community
              of 200 top podcasters and content covering all verticals (i.e. sports,
              entertainment, true crime, business, self-growth, etc.), PodcastOne has
              built a distribution network reaching over 1 billion monthly impressions
              across all channels.
            </p>

            <div>
              <button className="bg-[#F2B2EC] text-[#350A32] text-sm sm:text-base md:text-base lg:text-lg xl:text-lg font-medium px-7 py-2.5 rounded-[29px] hover:bg-[#df8fb0] transition-colors tracking-[-3%]">
                Learn More
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}