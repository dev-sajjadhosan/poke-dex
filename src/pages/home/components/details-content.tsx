import SpacialSymbol from "@/components/custom_ui/spcial-symbol";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Dna, HatGlasses } from "lucide-react";
import { TbArrowAutofitHeight, TbBoltFilled, TbWeight } from "react-icons/tb";

const typeColors = {
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

export default function DetailsContent() {
  return (
    <>
      <div className="flex flex-col gap-3 w-full h-full">
        <h1 className="text-xl mb-2 font-normal">
          <SpacialSymbol icon="|>" /> Know About Your Poke ?
        </h1>
        <div className="flex items-start gap-1">
          <h1 className="text-3xl">Pikachu</h1>
          <div className="flex items-center gap-1">
            <Badge className={`uppercase `}>electric</Badge>
            <Badge className={`uppercase `}>electric</Badge>
            <Badge className={`uppercase `}>electric</Badge>
          </div>
        </div>
        <h3 className="text-sm font-family-fira-code!">
          <SpacialSymbol icon="=>>" /> The Mouse Pokémon
        </h3>
        <p className="text-sm">
          <SpacialSymbol icon="=>>" /> When several of these POKéMON gather,
          their electricity could build and cause lightning storms.
        </p>
        <div className="flex flex-col mt-1 w-full">
          <p className="text-sm">
            <SpacialSymbol icon="=>>" /> Basic Information:
          </p>
          <div className="flex w-full gap-5 justify-between">
            <div className="flex items-center gap-2 w-full p-2 rounded-md text-sm">
              <TbArrowAutofitHeight size={19} className="text-primary/70" />
              <Separator orientation="vertical" className="h-6!" />
              Height: <span className="">0.4m</span>
            </div>
            <div className="flex items-center gap-2 w-full p-2 rounded-md text-sm">
              <TbWeight size={19} className="text-primary/70" />
              <Separator orientation="vertical" className="h-6!" />
              Weight: <span className="">6kg</span>
            </div>
          </div>
        </div>
        <div className="mt-2 flex flex-col gap-3 w-full">
          <h3 className="text-sm font-medium">Abilities:</h3>
          <ul className="grid grid-cols-2 gap-3 w-full">
            {Array.from({ length: 2 }).map((_, i) => (
              <li
                key={i}
                className="flex items-center gap-2 capitalize bg-secondary w-full py-2 px-5 rounded-md"
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
        </div>
        <div className="mt-2 flex flex-col gap-3 w-full">
          <h3 className="text-sm font-medium">Power Base Stats:</h3>
          <div className="grid grid-cols-1 gap-3 w-full">
            {Array.from({ length: 2 }).map((_, i) => (
              <div
                key={i}
                className="flex gap-3 items-center justify-between w-full"
              >
                <TbBoltFilled size={29} />
                <h3 className="text-sm flex items-center gap-1 w-52 font-family-fira-code!">
                  SP.Defense =|
                </h3>
                <Progress value={33} />
                <Badge>33</Badge>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
