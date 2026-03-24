"use client";

import Button from "@/components/ui/Button";
import { Play, Award, Info } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-white to-orange-50 -z-10" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-up">
            <div className="inline-block px-4 py-2 bg-yellow-100 rounded-full mb-6">
              <span className="text-yellow-800 font-semibold">MKK Ludo Presents</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Asia Cup
              <span className="block text-yellow-500">Tournament</span>
            </h1>
            <p className="text-xl text-gray-600 mb-4">Play. Compete. Win.</p>
            <p className="text-gray-600 mb-8 max-w-lg">
              India's biggest Ludo competition experience with exciting rewards, 
              competitive gameplay, and a chance to become a champion.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg">
                Join Now
              </Button>
              <Button variant="outline" size="lg">
                View Prizes
              </Button>
              <Button variant="secondary" size="lg">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Content - Stats/Image */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center transform hover:scale-105 transition-transform">
                <Play className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
                <p className="text-3xl font-bold">10K+</p>
                <p className="text-gray-600">Active Players</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center transform hover:scale-105 transition-transform mt-8">
                <Award className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
                <p className="text-3xl font-bold">₹15 Cr</p>
                <p className="text-gray-600">Total Prizes</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center transform hover:scale-105 transition-transform">
                <Info className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
                <p className="text-3xl font-bold">192</p>
                <p className="text-gray-600">Winners</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}