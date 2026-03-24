import { Smartphone, Tablet, Phone, Bike, Car, Home, Watch } from "lucide-react";
import Card from "@/components/ui/Card";

const rewards = [
  { icon: Watch, name: "Smart Watch" },
  { icon: Tablet, name: "iPad" },
  { icon: Smartphone, name: "iPhone" },
  { icon: Phone, name: "Android Phone" },
  { icon: Bike, name: "KTM Bike" },
  { icon: Bike, name: "Scooty" },
  { icon: Bike, name: "BMW Bike" },
  { icon: Bike, name: "Pulsar 125 CC" },
  { icon: Car, name: "Maruti Brezza" },
  { icon: Car, name: "Tata Altroz" },
  { icon: Home, name: "2 BHK Flat" },
  { icon: Home, name: "3 BHK Flat" },
];

export default function AdditionalRewards() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Additional Rewards</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Apart from the top prizes, many more players can receive exciting rewards
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {rewards.map((reward, index) => (
            <Card key={index} className="text-center p-4" hover>
              <reward.icon className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <p className="text-sm font-medium">{reward.name}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}