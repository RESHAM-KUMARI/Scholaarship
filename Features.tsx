import { Zap, LayoutDashboard, Bell, Shield, Headphones } from "lucide-react";
import Card from "@/components/ui/Card";

const features = [
  { icon: Zap, title: "Fast Registration", description: "A smooth onboarding flow for players." },
  { icon: LayoutDashboard, title: "Tournament Dashboard", description: "View your progress, match details, and updates in one place." },
  { icon: Bell, title: "Prize Updates", description: "Keep track of rewards, announcements, and event highlights." },
  { icon: Shield, title: "Secure Platform", description: "A structured platform experience for participants." },
  { icon: Headphones, title: "Support Access", description: "Get help for registration, participation, and general questions." },
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Platform Features</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center" hover>
              <div className="inline-flex p-3 bg-yellow-100 rounded-full mb-4">
                <feature.icon className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}