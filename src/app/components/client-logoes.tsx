import Image from "next/image";
// import dodai from "../../assets/logos/dodai.svg";

export function ClientLogosSection() {
  const logos = [
    { name: "Dodai", src: "/dodai.svg" },
    { name: "AffCollect", src: "/affcollect.png" },
    { name: "Arkena", src: "/arkena.png" },
    { name: "Ecaply", src: "/ecaply.png" },
  ];

  return (
    <section className="py-16 md:px-60">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            From established enterprises to innovative startups, we're trusted
            by businesses across industries to deliver exceptional software
            solutions
          </p>
        </div>

        <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap opacity-90">
          {logos.map((logo, index) => (
            <div key={index} className={`flex items-center justify-center`}>
              <Image
                src={logo.src}
                width={100}
                height={32}
                alt={logo.name}
                className="h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
