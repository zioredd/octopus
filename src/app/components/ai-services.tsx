export default function AIServicesSection() {
  return (
    <section className="py-16 relative overflow-hidden md:px-60">
      <div className="absolute inset-0" />

      {/* AI Enhancement Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
        <div className="bg-black rounded-2xl p-8 lg:p-12 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 text-balance">
              Custom development solutions, enhanced through
              <span className="text-orange-500"> artificial intelligence</span>
            </h2>
            <p className="text-gray-300 text-lg mb-4">
              Accelerate your project delivery by combining expert development
              talent with cutting-edge AI capabilities — and achieve
              <span className="text-white font-semibold">
                {" "}
                results 60% faster
              </span>
              .
            </p>
            <p className="text-gray-400">
              We've integrated AI-powered development tools into our workflow,
              with our experienced developers leveraging intelligent code
              generation, automated testing, and smart optimization for superior
              outcomes.
            </p>
          </div>

          {/* Abstract 3D Graphics */}
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-80">
            <div className="absolute top-8 right-8 w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full blur-xl"></div>
            <div className="absolute top-20 right-20 w-24 h-24 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full blur-lg"></div>
            <div className="absolute bottom-12 right-12 w-40 h-40 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full blur-2xl"></div>
            <div className="absolute bottom-8 right-32 w-20 h-20 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full blur-md"></div>
          </div>
        </div>
      </div>

      {/* Engagement Models */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <p className="text-gray-600 text-sm font-medium mb-4">
            SOLUTIONS AND TEAMS
          </p>
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Flexible engagement models
          </h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Choose the perfect collaboration approach for your project needs and
            business goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Staff Augmentation */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900">
                Team Augmentation
              </h4>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-gray-700">
                  Senior developers and specialists integrated into your
                  existing team
                </p>
              </div>

              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-gray-700">
                  Scale your development capacity without long-term commitments
                </p>
              </div>

              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-gray-700">
                  Flexible engagement based on your project timeline and budget
                </p>
              </div>

              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-gray-700">
                  Seamless integration with your development processes and tools
                </p>
              </div>
            </div>
          </div>

          {/* Full-Service Development */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900">
                Full-Service Development
              </h4>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-gray-700">
                  Complete software solutions from concept to deployment
                </p>
              </div>

              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-gray-700">
                  AI-powered development ensuring high-quality, optimized code
                </p>
              </div>

              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-gray-700">
                  End-to-end project management and delivery
                </p>
              </div>

              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-gray-700">
                  Dedicated cross-functional team assigned to your project
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center relative z-10">
          <button className="text-white hover:text-orange-400 font-medium text-sm px-4 py-2 bg-[#222222] hover:bg-[#333333] rounded transition-colors duration-200 inline-flex items-center gap-2">
            Start Your Project
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
