import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Mars, VenusAndMars } from "lucide-react";
import { TbEggCrackedFilled } from "react-icons/tb";

export default function BreedingSection() {
  return (
    <>
      <div className="flex flex-col gap-3 w-full h-full">
        <h3 className="text-sm">Pikachu Breeding Information</h3>
        <div className="flex flex-col gap-5 w-full h-full">
          <Card className="bg-transparent">
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <TbEggCrackedFilled size={29} className="text-neutral-700" />
                <h3 className="text-lg">Egg Ground</h3>
              </div>
              <div className="flex items-center gap-3 pl-5">
                <Badge className="px-7 py-2">Ground</Badge>
                <Badge className="px-7 py-2">Ground</Badge>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-transparent">
            <CardContent className="space-y-5">
              <div className="flex items-center gap-2">
                <VenusAndMars size={29} className="text-neutral-700" />
                <h3 className="text-lg">Gender Ratio</h3>
              </div>
              <ul className="flex flex-col items-center gap-3 pl-5 w-full">
                {Array.from({ length: 2 }).map((_, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 px-5 py-5 w-full bg-secondary/75 rounded-md"
                  >
                    <Mars size={21} />
                    <Separator orientation="vertical" className="h-6!" />
                    <Progress value={50} />
                    <Badge className="text-sm">50.0%</Badge>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
