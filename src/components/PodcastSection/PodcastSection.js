import Image from "next/image";

export default function PodcastSection() {
  const podcastData = [
    {
      title: "Polished, Professional Podcasts",
      image: "/podcast/podcast1.png",
      desc: `From in-studio video and audio recording to comprehensive podcast
      strategy, PodcastOne Pro offers fully customizable production packages
      for brands, professionals, or hobbyists.`,
    },
    {
      title: "Investor Relations",
      image: "/podcast/podcast2.png",
      desc: `PodcastOne has surpassed 3.9 billion total downloads with a community
      of 200 top podcasters and content covering all verticals (i.e. sports,
      entertainment, true crime, business, self-growth, etc.), PodcastOne has
      built a distribution network reaching over 1 billion monthly impressions
      across all channels.`,
    },
  ];

  return (
    <section className="bg-[#FDF4E3] px-4 lg:px-12  w-full max-w-[1980px] py-8 ">
      <div className="w-full max-w-[1120px] bg-[#FDF4E3]">

        {podcastData.map((item, index) => (
          <div key={index} className="grid md:grid-cols-2 gap-10 items-center mb-10 mt-23">
            
            {/* Image */}
            <div className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[430px] xl:w-[522px] xl:h-[481px] rounded-[21px] overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center">
              <h2 className="font-aeonik text-[#350A32] text-6xl md:text-5xl tracking-[-1%] font-semibold mb-5">
                {item.title}
              </h2>

              <p className="text-[16px] text-[#350A32] font-aeonik font-normal mb-8 leading-[18px] sm:leading-[20px] md:leading-[21px] lg:leading-[22px] xl:leading-[23px] tracking[-3%] max-w-lg">
                {item.desc}
              </p>

              <div>
                <button className="bg-[#F2B2EC] text-[#350A32] text-sm sm:text-base md:text-base lg:text-lg xl:text-lg font-medium px-7 py-[6px] rounded-[29px] tracking-[-3%] cursor-pointer">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}