import TooltipBtn from "@/components/custom_ui/tooltip-button";
import { usePokeStore } from "@/store/usePokeStore";
import {
  BookOpen,
  Egg,
  Swords,
  TrafficCone,
  TrendingUp,
  Zap,
} from "lucide-react";

const tabs = [
  { label: "default", icon: TrafficCone },
  { label: "overview", icon: BookOpen },
  { label: "stats", icon: TrendingUp },
  { label: "moves", icon: Swords },
  { label: "evolution", icon: Zap },
  { label: "breeding", icon: Egg },
];

export const TabObject = tabs.map(({ label }) => ({ label }));

export default function FloatNav() {
  const { tab, setTab } = usePokeStore();
  return (
    <>
      <div className="flex flex-col gap-3 bg-transparent rounded-lg w-fit h-fit px-2 py-5">
        {tabs.map((n, i) => (
          <TooltipBtn
            key={i}
            variant={tab === n.label ? "default" : "ghost"}
            label={n.label}
            icon={n.icon}
            side="right"
            action={() => setTab(n.label)}
          />
        ))}
      </div>
    </>
  );
}
