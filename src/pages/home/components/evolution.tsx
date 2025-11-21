import type { PokemonData } from "@/types/pokemon-data-types";
import { Badge } from "@/components/ui/badge";

export default function EvolutionSection({
  data,
}: {
  data: PokemonData | null;
}) {
  return (
    <>
      <div className="flex flex-col gap-3 w-full h-full">
        <h3 className="text-sm font-medium capitalize">{data?.name} Evolution Chain</h3>
        <div className="mt-5 flex gap-5 items-center justify-between h-96 lg:h-full rotate-30">
          {data?.evolution.map((e, i) => (
            <div
              key={i}
              className={`flex gap-3 flex-col text-center w-44 h-44 -rotate-30 `}
            >
              <div
                className={`bg-secondary/75 w-full h-full rounded-full flex items-center justify-center ${
                  e.name === data.name ? "ring-4" : ""
                }`}
              >
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${e?.id}.png`}
                  alt={e.name}
                  className={`w-3/4 h-3/4 object-contain `}
                />
              </div>
              <div className="flex flex-col gap-1 items-center">
                <h3 className="text-md font-normal capitalize">{e.name}</h3>
                <Badge>Level {e.minLevel ?? "?"}</Badge>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
