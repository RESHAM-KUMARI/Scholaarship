import { Award, Car, Home, Bike, Trophy } from "lucide-react";
import Card from "@/components/ui/Card";

const prizes = [
  {
    rank: "First Prize",
    items: [
      { icon: Trophy, label: "2 Kg Gold Trophy" },
      { icon: Award, label: "₹15 Crore Cash" },
      { icon: Home, label: "5 BHK Flat" },
      { icon: Car, label: "Audi Car" },
      { icon: Bike, label: "Harley Davidson Bike" },
    ],
    color: "from-yellow-500 to-yellow-600",
  },
  {
    rank: "Second Prize",
    items: [
      { icon: Trophy, label: "1 Kg Gold Trophy" },
      { icon: Award, label: "₹12 Crore Cash" },
      { icon: Home, label: "5 BHK Flat" },
      { icon: Car, label: "Audi Car" },
      { icon: Bike, label: "Harley Davidson Bike" },
    ],
    color: "from-gray-400 to-gray-500",
  },
  {
    rank: "Third Prize",
    items: [
      { icon: Trophy, label: "500 gm Gold Trophy" },
      { icon: Award, label: "₹10 Crore Cash" },
      { icon: Home, label: "5 BHK Flat" },
      { icon: Car, label: "Audi Car" },
      { icon: Bike, label: "Harley Davidson Bike" },
    ],
    color: "from-orange-400 to-orange-500",
  },
];

export default function Prizes() {
  return (
    <section id="prizes" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Top Rewards</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6" />
          <p className="text-gray-300 max-w-2xl mx-auto">
            Exciting rewards and premium prize opportunities for top participants
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {prizes.map((prize, index) => (
            <Card key={index} className={`bg-gradient-to-br ${prize.color} text-white`} hover>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-6">{prize.rank}</h3>
                <div className="space-y-4">
                  {prize.items.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-center space-x-3">
                      <item.icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}