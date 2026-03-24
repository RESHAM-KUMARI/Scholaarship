import { UserPlus, Trophy, Gamepad2, TrendingUp, Gift } from "lucide-react";
import Card from "@/components/ui/Card";

const steps = [
  {
    icon: UserPlus,
    title: "Step 1: Register",
    description: "Create your account and complete the tournament registration.",
  },
  {
    icon: Trophy,
    title: "Step 2: Join Tournament",
    description: "Enter the Asia Cup competition and get access to match participation details.",
  },
  {
    icon: Gamepad2,
    title: "Step 3: Play Matches",
    description: "Compete in matches according to the tournament schedule and format.",
  },
  {
    icon: TrendingUp,
    title: "Step 4: Move Up the Rankings",
    description: "Perform consistently to improve your position and stay in contention.",
  },
  {
    icon: Gift,
    title: "Step 5: Win Rewards",
    description: "Top players and selected winners receive rewards based on tournament outcomes.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Follow these simple steps to participate and win exciting prizes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="text-center" hover>
              <div className="relative">
                <div className="inline-flex p-3 bg-yellow-100 rounded-full mb-4">
                  <step.icon className="w-8 h-8 text-yellow-600" />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-yellow-300" />
                )}
              </div>
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}