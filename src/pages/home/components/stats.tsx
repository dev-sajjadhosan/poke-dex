import TooltipBtn from "@/components/custom_ui/tooltip-button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import type { PokemonData } from "@/types/pokemon-data-types";
import { Link2 } from "lucide-react";
import { TbBoltFilled } from "react-icons/tb";

export default function StatsSection({ data }: { data: PokemonData | null }) {
  return (
    <>
      <div className="flex flex-col gap-4 w-full h-full">
        <h3 className="text-sm font-semibold capitalize">
          {data?.name} Base Stats
        </h3>
        <ul className="grid grid-cols-1 gap-3 w-full">
          {Object.entries(data?.stats ?? {}).map(([stat, value]) => (
            <li
              key={stat}
              className="flex gap-3 items-center justify-between w-full bg-secondary py-2.5 px-5 rounded-md"
            >
              <TbBoltFilled size={29} />
              <Separator orientation="vertical" className="h-6!" />
              <h3 className="text-sm capitalize flex items-center gap-1 w-80 font-family-fira-code!">
                {stat} ----
              </h3>
              <Progress value={Math.round((value / 255) * 100)} />
              <Badge>{value}</Badge>
              <TooltipBtn icon={Link2} label="More Details" />
            </li>
          ))}
        </ul>
        <Badge variant={"secondary"} className="px-7 py-3 ml-auto">
          Total Stats:{" "}
          {Object.values(data?.stats ?? {}).reduce((a, b) => a + b, 0)}
          <TbBoltFilled size={29} />
        </Badge>
      </div>
    </>
  );
}
