import { Users, Trophy, Award } from "lucide-react";

export default function WinnersHighlight() {
  return (
    <section className="py-20 bg-gradient-to-r from-yellow-500 to-orange-500">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="inline-flex p-3 bg-white/20 rounded-full mb-6">
          <Users className="w-12 h-12 text-white" />
        </div>
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">192 Players Will Be Rewarded</h2>
        <p className="text-xl text-white/90 max-w-3xl mx-auto">
          A large number of participants will have the opportunity to win major rewards through the MKK Ludo Asia Cup.
          This tournament is designed to create a memorable competitive experience for players aiming for big achievements.
        </p>
      </div>
    </section>
  );
}