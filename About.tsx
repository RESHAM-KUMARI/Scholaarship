import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Open participation",
  "Competitive match structure",
  "Reward-based gameplay",
  "Smooth registration process",
  "Engaging tournament experience",
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About the Tournament</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6" />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The MKK Ludo Asia Cup is an online tournament platform built for Ludo players 
              who want to compete at a higher level. The tournament brings together players 
              from different places on one competitive stage where skill, consistency, and 
              performance matter.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Whether you are a casual player or a serious competitor, the Asia Cup offers 
              a simple registration process, structured rounds, and exciting rewards for top performers.
            </p>
            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Tournament Highlights</h3>
              <ul className="space-y-3">
                <li>• 192 Players Will Be Rewarded</li>
                <li>• Exciting Prize Pool Worth ₹15 Crore+</li>
                <li>• Multiple Rounds of Competition</li>
                <li>• Fair Play & Transparent System</li>
                <li>• Live Leaderboard Updates</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}