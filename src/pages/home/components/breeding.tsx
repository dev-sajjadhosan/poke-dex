import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import type { PokemonData } from "@/types/pokemon-data-types";
import { Mars, Venus, VenusAndMars } from "lucide-react";
import { TbEggCrackedFilled } from "react-icons/tb";

export default function BreedingSection({
  data,
}: {
  data: PokemonData | null;
}) {
  return (
    <>
      <div className="flex flex-col gap-3 w-full h-full">
        <h3 className="text-sm capitalize">
          {data?.name} Breeding Information
        </h3>
        <div className="flex flex-col gap-5 w-full h-full">
          <Card className="bg-transparent">
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <TbEggCrackedFilled size={29} className="text-neutral-300" />
                <h3 className="text-lg">Egg Ground</h3>
              </div>
              <div className="flex items-center gap-3 pl-5 capitalize">
                {data?.breeding.eggGroups.map((e, i) => (
                  <Badge key={i} className="px-7 py-2">
                    {e}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="bg-transparent">
            <CardContent className="space-y-5">
              <div className="flex items-center gap-2">
                <VenusAndMars size={29} className="text-neutral-300" />
                <h3 className="text-lg">Gender Ratio</h3>
              </div>
              <ul className="flex flex-col items-center gap-3 pl-5 w-full">
                <li className="flex items-center gap-3 px-5 py-5 w-full bg-secondary/75 rounded-md">
                  <Mars size={25} className="text-orange-500" />
                  <Separator orientation="vertical" className="h-6!" />
                  <Progress
                    value={Math.round(
                      ((8 - (data?.breeding.genderRate ?? 0)) / 8) * 100
                    )}
                  />
                  <Badge className="text-sm">
                    {(
                      ((8 - (data?.breeding.genderRate ?? 0)) / 8) *
                      100
                    ).toFixed(1)}
                    %
                  </Badge>
                </li>
                <li className="flex items-center gap-3 px-5 py-5 w-full bg-secondary/75 rounded-md">
                  <Venus size={25} />
                  <Separator orientation="vertical" className="h-6!" />
                  <Progress
                    value={((data?.breeding.genderRate ?? 0) / 8) * 100}
                  />
                  <Badge className="text-sm">
                    {(((data?.breeding.genderRate ?? 0) / 8) * 100).toFixed(1)}%
                  </Badge>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
