import { Trophy, Gift, Rocket, Shield, Users, Star } from "lucide-react";
import Card from "@/components/ui/Card";

const reasons = [
  {
    icon: Trophy,
    title: "Competitive Experience",
    description: "Test your skills against a large pool of players in a structured tournament environment.",
  },
  {
    icon: Gift,
    title: "Exciting Rewards",
    description: "Top-performing players get access to premium rewards and recognition.",
  },
  {
    icon: Rocket,
    title: "Easy Registration",
    description: "A quick and simple sign-up process helps players join without confusion.",
  },
  {
    icon: Shield,
    title: "Fair Play Focus",
    description: "Matches are designed to support transparent competition and a better player experience.",
  },
  {
    icon: Users,
    title: "Community & Recognition",
    description: "Be part of a growing gaming community and earn recognition through performance.",
  },
];

export default function WhyJoin() {
  return (
    <section id="tournament" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Join MKK Ludo Asia Cup</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the thrill of competitive Ludo with amazing benefits
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} hover>
              <div className="text-center">
                <div className="inline-flex p-3 bg-yellow-100 rounded-full mb-4">
                  <reason.icon className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}