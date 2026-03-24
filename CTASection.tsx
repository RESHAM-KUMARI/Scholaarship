"use client";

import Button from "@/components/ui/Button";
import { Trophy, ArrowRight, Headphones } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500" />
      <div className="absolute inset-0 bg-black/10" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated trophy icon */}
          <div className="animate-bounce mb-6">
            <div className="inline-flex p-4 bg-white/20 backdrop-blur-sm rounded-full">
              <Trophy className="w-12 h-12 text-white" />
            </div>
          </div>
          
          {/* Main heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to Join the Asia Cup?
          </h2>
          
          {/* Description */}
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Take your Ludo skills to the next level. Register now and become part of 
            one of the most exciting competitive tournament experiences.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="primary" 
              size="lg" 
              className="bg-white text-yellow-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl"
            >
              Register Now
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white hover:text-yellow-600"
            >
              <Headphones className="w-5 h-5 mr-2 inline" />
              Contact Support
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-white/80 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span>Free Registration</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span>Secure Platform</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span>Fair Play Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320" 
          className="w-full"
          preserveAspectRatio="none"
        >
          <path 
            fill="#ffffff" 
            fillOpacity="0.1" 
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
}