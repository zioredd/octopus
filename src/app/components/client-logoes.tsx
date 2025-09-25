export function ClientLogosSection() {
  const logos = [
    { name: "TechCorp", width: "w-24" },
    { name: "StartupHub", width: "w-28" },
    { name: "FinanceFlow", width: "w-28" },
    { name: "HealthTech", width: "w-26" },
    { name: "EduPlatform", width: "w-30" },
    { name: "RetailMax", width: "w-24" },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            From established enterprises to innovative startups, we're trusted
            by businesses across industries to deliver exceptional software
            solutions
          </p>
        </div>

        <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap opacity-60">
          {logos.map((logo, index) => (
            <div
              key={index}
              className={`${logo.width} h-8 bg-gray-400 rounded flex items-center justify-center`}
            >
              <span className="text-gray-600 font-semibold text-sm">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
