"use client";

import { useState } from "react";

export default function PortfolioSection() {
  const projects = [
    {
      id: 1,
      title: "Healthcare Management System",
      description:
        "Developed a comprehensive healthcare platform that streamlined patient management and reduced administrative overhead by 35%.",
      image: "/healthcare-dashboard-with-patient-data-and-charts.jpg",
      tags: ["Backend Development", "Database Design"],
    },
    {
      id: 2,
      title: "E-Commerce Platform Transformation",
      description:
        "Built a scalable e-commerce solution that increased conversion rates by 40% and handles 10k+ daily transactions.",
      image: "/modern-ecommerce-dashboard.png",
      tags: ["Full-Stack Development", "API Integration"],
    },
    {
      id: 3,
      title: "AI-Powered Analytics Dashboard",
      description:
        "Created an intelligent analytics platform that provides real-time insights and predictive analytics for business growth.",
      image: "/real-estate-crm-dashboard-with-property-listings.jpg",
      tags: ["AI Integration", "Frontend Development"],
    },
    {
      id: 4,
      title: "Mobile Banking Application",
      description:
        "Designed and developed a secure mobile banking app with biometric authentication and real-time transaction processing.",
      image: "/mobile-banking-app-interface-with-transactions.jpg",
      tags: ["Mobile Development", "Security"],
    },
    {
      id: 5,
      title: "Educational Learning Platform",
      description:
        "Built an interactive learning management system that improved student engagement by 60% and supports 50k+ concurrent users.",
      image: "/educational-platform-with-video-player-and-course-.jpg",
      tags: ["EdTech", "Video Streaming"],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const getCardPosition = (offset: number) => {
    const index = (currentIndex + offset + projects.length) % projects.length;
    return projects[index];
  };

  return (
    <section className="py-20 bg-gray-50 w-full overflow-hidden relative">
      <div className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-orange-500">Our clients win.</span>
            <br />
            <span className="text-gray-900">You can, too.</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-base sm:text-lg text-gray-600 mb-4">
              Innovative companies like{" "}
              <span className="font-semibold text-gray-900">
                TechCorp, DataFlow, CloudSync, InnovateLab, and StartupHub
              </span>
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-2">
              rely on the technical expertise and custom solutions provided by
              our development team.
            </p>
            <p className="text-base sm:text-lg text-gray-600">
              See how they overcame industry challenges and achieved their goals
              by partnering with us.
            </p>
          </div>
        </div>
      </div>

      {/* Desktop Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center hover:bg-gray-50 hidden md:flex"
      >
        <svg
          className="w-6 h-6 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center hover:bg-gray-50 hidden md:flex"
      >
        <svg
          className="w-6 h-6 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Cards Container */}
      <div className="relative w-full mb-12 flex items-center justify-center">
        {/* Left Hint Card - Desktop Only */}
        <div className="absolute left-0 w-32 h-72 opacity-20 z-0 hidden md:block">
          <div className="w-full h-full bg-white rounded-2xl border border-gray-200 p-4 overflow-hidden">
            <div className="w-full h-32 bg-gray-100 rounded-lg mb-3"></div>
            <div className="space-y-2">
              <div className="h-3 bg-gray-200 rounded"></div>
              <div className="h-3 bg-gray-200 rounded w-3/4"></div>
            </div>
          </div>
        </div>

        {/* Main Cards */}
        <div className="max-w-6xl flex flex-col md:flex-row items-center justify-center gap-4 md:gap-4 z-10 px-4 md:px-0">
          {/* First Card */}
          <div className="w-full h-72 bg-white rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 p-6 group flex flex-col">
            <div className="relative mb-4 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
              <img
                src={getCardPosition(0).image || "/placeholder.svg"}
                alt={getCardPosition(0).title}
                className="w-full h-28 object-cover"
              />
            </div>
            <div className="flex flex-wrap gap-2 mb-3 flex-shrink-0">
              {getCardPosition(0).tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex-1 min-h-0 flex flex-col">
              <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors flex-shrink-0">
                {getCardPosition(0).title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 overflow-hidden">
                {getCardPosition(0).description}
              </p>
            </div>
          </div>

          {/* Second Card - Desktop Only */}
          <div className="w-full h-72 bg-white rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 p-6 group flex-col hidden md:flex">
            <div className="relative mb-4 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
              <img
                src={getCardPosition(1).image || "/placeholder.svg"}
                alt={getCardPosition(1).title}
                className="w-full h-28 object-cover"
              />
            </div>
            <div className="flex flex-wrap gap-2 mb-3 flex-shrink-0">
              {getCardPosition(1).tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex-1 min-h-0 flex flex-col">
              <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors flex-shrink-0">
                {getCardPosition(1).title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 overflow-hidden">
                {getCardPosition(1).description}
              </p>
            </div>
          </div>
        </div>

        {/* Right Hint Card - Desktop Only */}
        <div className="absolute right-0 w-32 h-72 opacity-20 z-0 hidden md:block">
          <div className="w-full h-full bg-white rounded-2xl border border-gray-200 p-4 overflow-hidden">
            <div className="w-full h-32 bg-gray-100 rounded-lg mb-3"></div>
            <div className="space-y-2">
              <div className="h-3 bg-gray-200 rounded"></div>
              <div className="h-3 bg-gray-200 rounded w-3/4"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Buttons */}
      <div className="flex justify-center gap-4 mb-8 md:hidden">
        <button
          onClick={goToPrevious}
          className="w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center hover:bg-gray-50"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center hover:bg-gray-50"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* See All Cases Button */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-7xl mx-auto">
          <button className="inline-flex items-center gap-2 text-gray-900 font-medium hover:text-orange-500 transition-colors group">
            See all cases
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
