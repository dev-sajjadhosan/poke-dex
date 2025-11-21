import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import type { PokemonData } from "@/types/pokemon-data-types";
import { Dna, HatGlasses, MapPinHouse, Radar } from "lucide-react";
import { TbShieldFilled } from "react-icons/tb";

export default function OverviewSection({
  data,
}: {
  data: PokemonData | null;
}) {
  return (
    <>
      <div className="flex flex-col gap-4 w-full h-full">
        <h3 className="text-sm font-semibold">Type Effectiveness:</h3>
        <ul className="flex flex-wrap items-center gap-2">
          <li className="flex items-center gap-2 capitalize bg-secondary w-full py-2.5 px-5 rounded-md">
            <div className="flex items-center gap-2 text-sm">
              <TbShieldFilled className="text-neutral-300" size={19} />
              <Separator orientation="vertical" className="h-6!" />
              <h2 className="text-sm">(2x) Weak To:</h2>
            </div>
            {/* <SpacialSymbol icon="|>=>>" /> */}
            <div className="flex flex-wrap gap-3">
              {data?.typeEffectiveness.weakTo.map((t, i) => (
                <Badge key={i} className="px-4 py-1" variant={"outline"}>
                  {t}
                </Badge>
              ))}
            </div>
          </li>
          <li className="flex items-center gap-2 capitalize bg-secondary w-full py-2.5 px-5 rounded-md">
            <div className="flex items-center gap-2 text-sm">
              <TbShieldFilled className="text-neutral-300" size={19} />
              <Separator orientation="vertical" className="h-6!" />
              <h2 className="text-sm">(0.5x) Resistant To:</h2>
            </div>
            {/* <SpacialSymbol icon="|>=>>" /> */}
            <div className="flex flex-wrap gap-3">
              {data?.typeEffectiveness.resistantTo.map((t, i) => (
                <Badge key={i} className="px-4 py-1" variant={"outline"}>
                  {t}
                </Badge>
              ))}
            </div>
          </li>
          <li className="flex items-center gap-2 capitalize bg-secondary w-full py-2.5 px-5 rounded-md">
            <div className="flex items-center gap-2 text-sm">
              <TbShieldFilled className="text-neutral-300" size={19} />
              <Separator orientation="vertical" className="h-6!" />
              <h2 className="text-sm">(0x) Immune To:</h2>
            </div>
            {/* <SpacialSymbol icon="|>=>>" /> */}
            <div className="flex flex-wrap gap-3">
              {data?.typeEffectiveness.immuneTo.length ?? 0 > 0 ? (
                data?.typeEffectiveness.immuneTo.map((t, i) => (
                  <Badge key={i} className="px-4 py-1" variant={"outline"}>
                    {t}
                  </Badge>
                ))
              ) : (
                <Badge className="px-4 py-1" variant={"outline"}>
                  None
                </Badge>
              )}
            </div>
          </li>
        </ul>
        <h3 className="text-sm font-semibold">Abilities:</h3>
        <ul className="flex flex-col items-center gap-2 w-full">
          {data?.abilities.map((a, i) => (
            <li
              key={i}
              className="flex items-center gap-2 capitalize bg-secondary w-full py-2.5 px-5 rounded-md"
            >
              <Dna size={19} className="text-neutral-300" />
              <Separator orientation="vertical" className="h-6!" />
              <p className="text-sm">{a.name.replace("-", " ")}</p>
              {a.isHidden && (
                <Badge className="ml-auto px-3 py-1.5" variant={"outline"}>
                  <HatGlasses /> Hidden
                </Badge>
              )}
            </li>
          ))}
        </ul>
        <h3 className="text-sm font-semibold">Habitat && Rarity</h3>
        <div className="flex flex-col md:flex-row md:items-center gap-3 w-full">
          <div className="flex items-center gap-2 capitalize bg-secondary md:w-xs py-2.5 px-5 rounded-md">
            <MapPinHouse size={19} className="text-neutral-300" />
            <Separator orientation="vertical" className="h-6!" />
            <h3 className="text-sm capitalize mx-auto">
              {data?.species.habitat || "Unknown"}
            </h3>
          </div>
          <div className="flex items-center gap-2 capitalize bg-secondary w-full py-2.5 px-5 rounded-md">
            <Radar className="text-neutral-300" />
            <Separator orientation="vertical" className="h-6!" />
            <Progress
              value={Math.round(((data?.species.captureRate || 0) / 255) * 100)}
              // max={255}
            />
            <Badge>{data?.species.captureRate}</Badge>-<Badge>255</Badge>
          </div>
        </div>
      </div>
    </>
  );
}
