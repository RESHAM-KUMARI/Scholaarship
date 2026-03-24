import { Shield, Users, Trophy, Star, Award } from "lucide-react";
import Card from "@/components/ui/Card";

const trustPoints = [
  { icon: Shield, title: "User-friendly experience", color: "text-blue-500" },
  { icon: Users, title: "High-engagement tournament structure", color: "text-green-500" },
  { icon: Trophy, title: "Reward-driven participation", color: "text-yellow-500" },
  { icon: Star, title: "Strong visual identity", color: "text-purple-500" },
  { icon: Award, title: "Exciting competition atmosphere", color: "text-red-500" },
];

export default function Trust() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Players Choose Us</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPoints.map((point, index) => (
            <Card key={index} className="flex items-center space-x-4" hover>
              <point.icon className={`w-10 h-10 ${point.color}`} />
              <span className="text-lg font-semibold">{point.title}</span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}