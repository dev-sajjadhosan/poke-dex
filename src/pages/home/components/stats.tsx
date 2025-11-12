import TooltipBtn from "@/components/custom_ui/tooltip-button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Link2 } from "lucide-react";
import { TbBoltFilled } from "react-icons/tb";

export default function StatsSection() {
  return (
    <>
      <div className="flex flex-col gap-4 w-full h-full">
        <h3 className="text-sm font-semibold">Pikachu Base Stats</h3>
        <ul className="grid grid-cols-1 gap-3 w-full">
          {Array.from({ length: 6 }).map((_, i) => (
            <li
              key={i}
              className="flex gap-3 items-center justify-between w-full bg-secondary py-2.5 px-5 rounded-md"
            >
              <TbBoltFilled size={29} />
              <Separator orientation="vertical" className="h-6!" />
              <h3 className="text-sm flex items-center gap-1 w-52 font-family-fira-code!">
                SP.Defense =|
              </h3>
              <Progress value={33}  />
              <Badge>33</Badge>
              <TooltipBtn icon={Link2} label="More Details" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
