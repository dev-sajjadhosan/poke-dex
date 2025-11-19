import PokemonBadge from "@/components/custom_ui/pokemon-badge";
import SpacialSymbol from "@/components/custom_ui/spcial-symbol";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { Separator } from "@/components/ui/separator";
import type { Ability } from "@/types/pokemon-data-types";
import type { PokemonData } from "@/types/pokemon-data-types";

import { Dna, HatGlasses, Plus } from "lucide-react";
import { TbArrowAutofitHeight, TbWeight } from "react-icons/tb";

export const typeColors = {
  normal: "bg-gray-400",
  fire: "bg-red-500",
  water: "bg-blue-500",
  grass: "bg-green-500",
  electric: "bg-yellow-400",
  ice: "bg-cyan-300",
  fighting: "bg-red-700",
  poison: "bg-purple-500",
  ground: "bg-yellow-700",
  flying: "bg-indigo-400",
  psychic: "bg-pink-500",
  bug: "bg-lime-500",
  rock: "bg-yellow-800",
  ghost: "bg-purple-700",
  dragon: "bg-indigo-600",
  dark: "bg-gray-800",
  steel: "bg-gray-500",
  fairy: "bg-pink-300",
};

export default function DetailsContent({ data }: { data: PokemonData | null }) {
  return (
    <>
      <div className="flex flex-col gap-2 w-full h-full">
        {/* <h1 className="text-xl mb-2 font-normal">
          <SpacialSymbol icon="|>" /> Know About Your Poke ?
        </h1> */}
        <div className="flex flex-col gap-7 mt-5">
          <div className="flex items-center justify-between w-full">
            <h1 className="text-3xl capitalize ">{data?.name}</h1>
            <Button size={"sm"}>
              Save <Plus />
            </Button>
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-1">
              {data?.types.map((p: string, i: number) => (
                <PokemonBadge key={i} type={p}>
                  {p}
                </PokemonBadge>
              ))}
            </div>

            <div className="flex gap-1">
              {data?.species.isLegendary! && (
                <Badge className="bg-orange-500/40 text-primary capitalize px-4 py-1.5">
                  ⚡ legendary
                </Badge>
              )}
              {data?.species.isMythical && (
                <Badge className="bg-purple-500/40 text-primary capitalize px-4 py-1.5">
                  ✨ mythical
                </Badge>
              )}
              <Badge className="bg-secondary/40 text-primary capitalize px-4 py-1.5">
                {data?.species.generation}
              </Badge>
            </div>
          </div>
        </div>
        <h3 className="text-sm font-family-fira-code! mt-3">
          <SpacialSymbol icon="=>>" /> {data?.species.genus}
        </h3>
        <p className="text-sm">
          <SpacialSymbol icon="=>> " />
          {data?.species.description}
        </p>

        <div className="flex flex-col gap-3 mt-1 w-full">
          <p className="text-sm">
            <SpacialSymbol icon="=>>" /> Basic Information:
          </p>
          <div className="flex w-full gap-5 justify-between">
            <div className="flex flex-col gap-2 w-full p-6 bg-secondary rounded-lg">
              <TbArrowAutofitHeight size={19} />
              <Separator className="w-14!" />
              <h3 className="text-sm">
                Height: <span className="">{data?.physical.height}m</span>
              </h3>
            </div>
            <div className="flex flex-col gap-2 w-full p-6 bg-secondary rounded-lg">
              <TbWeight size={19} />
              <Separator className="w-14!" />
              <h3 className="text-sm">
                Weight: <span className="">{data?.physical.weight}kg</span>
              </h3>
            </div>
          </div>
        </div>

        <div className="mt-2 flex flex-col gap-3 w-full">
          <h3 className="text-sm font-medium">Abilities:</h3>
          <ul className="grid grid-cols-2 gap-3 w-full">
            {data?.abilities.slice(0, 2).map((a: Ability, i: number) => (
              <li
                key={i}
                className="flex items-center gap-2 capitalize bg-secondary w-full py-2 px-5 rounded-md"
              >
                <Dna size={19} className="text-neutral-600" />
                <Separator orientation="vertical" className="h-6!" />
                <p className="text-sm">{a.name.replace("-", "")}</p>
                {a.isHidden && (
                  <Badge className="ml-auto px-3 py-1.5" variant={"outline"}>
                    <HatGlasses /> Hidden
                  </Badge>
                )}
              </li>
            ))}
          </ul>
        </div>
        {/* <div className="mt-2 flex flex-col gap-3 w-full">
          <h3 className="text-sm font-medium">Power Base Stats:</h3>
          <ul className="grid grid-cols-1 gap-3 w-full">
            {Array.from({ length: 2 }).map((_, i) => (
              <li
                key={i}
                className="flex gap-3 items-center justify-between w-full"
              >
                <TbBoltFilled size={29} />
                <h3 className="text-sm flex items-center gap-1 w-52 font-family-fira-code!">
                  SP.Defense =|
                </h3>
                <Progress value={33} />
                <Badge>33</Badge>
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </>
  );
}
