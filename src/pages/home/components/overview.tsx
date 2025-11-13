import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Dna, HatGlasses, MapPinHouse, Radar } from "lucide-react";
import { TbShieldFilled } from "react-icons/tb";

export default function OverviewSection() {
  return (
    <>
      <div className="flex flex-col gap-4 w-full h-full">
        <h3 className="text-sm font-semibold">Type Effectiveness:</h3>
        <ul className="flex flex-wrap items-center gap-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <li
              key={i}
              className="flex items-center gap-2 capitalize bg-secondary w-full py-2.5 px-5 rounded-md"
            >
              <div className="flex items-center gap-2 text-sm">
                <TbShieldFilled className="text-neutral-500" size={19} />
                <Separator orientation="vertical" className="h-6!" />
                <h2 className="text-sm">(2x) Weak To:</h2>
              </div>
              {/* <SpacialSymbol icon="|>=>>" /> */}
              <div className="flex flex-wrap gap-3">
                <Badge className="px-4 py-1" variant={"outline"}>
                  Ground
                </Badge>
              </div>
            </li>
          ))}
        </ul>
        <h3 className="text-sm font-semibold">Abilities:</h3>
        <ul className="flex flex-col items-center gap-2 w-full">
          {Array.from({ length: 2 }).map((_, i) => (
            <li
              key={i}
              className="flex items-center gap-2 capitalize bg-secondary w-full py-2.5 px-5 rounded-md"
            >
              <Dna size={19} className="text-neutral-600" />
              <Separator orientation="vertical" className="h-6!" />
              <p className="text-sm">static</p>
              <Badge className="ml-auto px-3 py-1.5" variant={"outline"}>
                <HatGlasses /> Hidden
              </Badge>
            </li>
          ))}
        </ul>
        <h3 className="text-sm font-semibold">Habitat && Rarity</h3>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 capitalize bg-secondary w-xs py-2.5 px-5 rounded-md">
            <MapPinHouse size={19} className="text-neutral-500" />
            <Separator orientation="vertical" className="h-6!" />
            <h3 className="text-sm capitalize mx-auto">rare</h3>
          </div>
          <div className="flex items-center gap-2 capitalize bg-secondary w-full py-2.5 px-5 rounded-md">
            <Radar className="text-neutral-500" />
            <Separator orientation="vertical" className="h-6!" />
            <Progress value={3} />
            <Badge>03</Badge>
            //
            <Badge>255</Badge>
          </div>
        </div>
      </div>
    </>
  );
}
