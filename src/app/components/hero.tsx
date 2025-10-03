import Button from "./ui/button";

export function HeroSection() {
  return (
    <main className="py-16 mx-auto relative overflow-hidden px-4 md:px-60">
      <div className="text-center relative">
        {/* Floating badges */}
        <div className="absolute top-0 left-1/4 transform -translate-x-1/2">
          <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Client
          </span>
        </div>
        <div className="absolute top-32 left-8">
          <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Octopus
          </span>
        </div>
        <div className="absolute top-32 right-8">
          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Users
          </span>
        </div>

        {/* Main headline */}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
          <span className="text-balance">
            We turn your{" "}
            <span className="relative">
              <span className="bg-purple-200 px-2 py-1 rounded">ideas</span>
            </span>{" "}
            into
            <br />
            <span className="relative">
              <span className="bg-orange-200 px-2 py-1 rounded">software</span>
            </span>{" "}
            that people{" "}
            <span className="relative">
              <span className="bg-green-200 px-2 py-1 rounded">love</span>
            </span>
          </span>
        </h1>

        {/* Updated subtitle */}
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
          Custom software development, modern web applications, AI automation
          solutions, and digital transformation services for growing businesses
        </p>
      </div>

      {/* Mockup Images */}
      <div className="grid md:grid-cols-2 gap-8 mt-16">
        {/* Left mockup - Desktop/Laptop */}
        <div className="relative">
          <div className="bg-white rounded-2xl shadow-2xl h-full overflow-hidden">
            <div className="bg-gray-100 h-8 flex items-center px-4 gap-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
            <div className="p-4 h-full bg-gray-900 relative">
              <div className="text-white text-sm mb-4">
                Inspiring Innovation
              </div>
              <div className="w-full h-16 bg-blue-500 rounded opacity-80 mb-4"></div>
              <div className="flex gap-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-full"></div>
                <div className="flex-1">
                  <div className="w-full h-2 bg-gray-700 rounded mb-2"></div>
                  <div className="w-3/4 h-2 bg-gray-700 rounded"></div>
                </div>
              </div>
              <div className="absolute bottom-4 right-4">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1">
                  Generate Music
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Right mockup - Mobile devices */}
        <div className="relative">
          <div className="bg-gradient-to-br from-orange-300 via-purple-300 to-pink-300 rounded-3xl p-8 h-80 flex items-center justify-center gap-4">
            {/* Phone 1 */}
            <div className="bg-black rounded-3xl p-2 w-32 h-64 shadow-2xl transform -rotate-12">
              <div className="bg-white rounded-2xl h-full overflow-hidden">
                <div className="bg-gray-100 h-6 flex items-center justify-center">
                  <div className="w-16 h-1 bg-gray-400 rounded-full"></div>
                </div>
                <div className="p-3 h-full">
                  <div className="w-full h-32 bg-blue-100 rounded-lg mb-3 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg"></div>
                    <div className="absolute top-2 left-2 w-4 h-4 bg-blue-500 rounded-full"></div>
                    <div className="absolute bottom-2 right-2 w-6 h-6 bg-orange-500 rounded"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="w-full h-2 bg-gray-200 rounded"></div>
                    <div className="w-3/4 h-2 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone 2 */}
            <div className="bg-black rounded-3xl p-2 w-32 h-64 shadow-2xl transform rotate-12">
              <div className="bg-white rounded-2xl h-full overflow-hidden">
                <div className="bg-gray-100 h-6 flex items-center justify-center">
                  <div className="w-16 h-1 bg-gray-400 rounded-full"></div>
                </div>
                <div className="p-3 h-full">
                  <div className="text-xs font-semibold mb-2">
                    Report Stolen
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="w-full h-2 bg-gray-200 rounded"></div>
                    <div className="w-2/3 h-2 bg-gray-200 rounded"></div>
                    <div className="w-full h-2 bg-gray-200 rounded"></div>
                  </div>
                  <div className="w-full h-6 bg-orange-500 rounded text-white text-xs flex items-center justify-center">
                    Submit Report
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
