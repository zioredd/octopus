import { Globe, Bot, Code, Smartphone, Database, Zap } from "lucide-react";

export function ServicesSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <span className="inline-block bg-white px-4 py-2 rounded-full text-sm text-gray-600 border mb-8">
            Services and expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Solutions that drive business growth
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With 15+ years of experience, we specialize in delivering
            cutting-edge software solutions, from custom web applications to
            AI-powered automation systems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-16">
          {/* Left side - Service icons */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Website Development
                </h3>
                <p className="text-gray-600">
                  Modern, responsive websites and web applications built with
                  the latest technologies
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Custom Software Development
                </h3>
                <p className="text-gray-600">
                  Tailored software solutions designed to meet your specific
                  business requirements
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  AI Automation
                </h3>
                <p className="text-gray-600">
                  Intelligent automation solutions to streamline workflows and
                  boost productivity
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Mobile App Development
                </h3>
                <p className="text-gray-600">
                  Native and cross-platform mobile applications for iOS and
                  Android
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Database className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Database Solutions
                </h3>
                <p className="text-gray-600">
                  Scalable database architecture and data management systems
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  API Integration
                </h3>
                <p className="text-gray-600">
                  Seamless third-party integrations and custom API development
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Application mockups */}
          <div className="relative">
            <div className="relative w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden">
              {/* Main dashboard window */}
              <div className="absolute top-4 left-4 right-16 bottom-16 bg-white rounded-lg shadow-xl border">
                <div className="bg-gray-50 h-10 flex items-center px-4 border-b">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="ml-4 text-sm text-gray-600">Dashboard</div>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="bg-gray-100 h-16 rounded flex items-center justify-center">
                      <div className="w-8 h-8 bg-blue-500 rounded"></div>
                    </div>
                    <div className="bg-gray-100 h-16 rounded flex flex-col justify-center px-3">
                      <div className="text-xs font-semibold">18</div>
                      <div className="text-xs text-gray-500">Projects</div>
                    </div>
                    <div className="bg-gray-100 h-16 rounded flex flex-col justify-center px-3">
                      <div className="text-xs font-semibold">117</div>
                      <div className="text-xs text-gray-500">Tasks</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-200 rounded w-full"></div>
                    <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
              </div>

              {/* Floating chat window */}
              <div className="absolute bottom-4 right-4 w-64 h-48 bg-blue-500 rounded-lg shadow-xl text-white p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm font-medium">We're Online!</span>
                </div>
                <p className="text-sm mb-3">How may I help you today?</p>
                <div className="bg-blue-600 rounded p-2 text-xs">
                  Hi! I need help with my project setup...
                </div>
              </div>

              {/* Additional floating elements */}
              <div className="absolute top-16 right-4 w-32 h-20 bg-white rounded shadow-lg p-2">
                <div className="text-xs font-semibold mb-1">
                  Short Term Fitness Goals
                </div>
                <div className="space-y-1">
                  <div className="h-1 bg-gray-200 rounded"></div>
                  <div className="h-1 bg-gray-200 rounded w-2/3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
