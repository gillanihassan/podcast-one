import Image from "next/image";

export default function Logo() {

  const platforms = [
    { img: "/logo/logo1.png", alt: "youtube" },
    { img: "/logo/logo2.png", alt: "spotify" },
    { img: "/logo/logo3.png", alt: "apple podcast" },
    { img: "/logo/logo4.png", alt: "prime" },
  ];

  return (
    <section className="bg-[#FDF4E3] py-25">
      <div className="px-6 lg:px-20">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {platforms.map((item, index) => (
            <div
              key={index}
              className="bg-[#350A3212] rounded-2xl h-[180px] sm:h-[200px] xl:h-[420px] flex items-center justify-center hover:scale-105 transition-transform duration-200 cursor-pointer"
            >
              <Image
                src={item.img}
                alt={item.alt}
                width={170}
                height={70}
                className="object-contain"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}