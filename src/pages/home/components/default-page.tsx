import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Construction, Search } from "lucide-react";

export default function DefaultPage({
  setIsFind,
}: {
  setIsFind: (v: boolean) => void;
}) {
  return (
    <>
      <div className="flex flex-col gap-28 items-center justify-center h-full">
        <Badge
          variant={"secondary"}
          className="flex items-center gap-2 px-6 py-2"
        >
          <Construction /> This Site Is Under Construction.
        </Badge>

        <div className="flex flex-col items-center justify-center gap-3">
          <img src="logo.png" alt="" width={70} />
          <h1 className="text-4xl font-family-audiowide!">Pokedex</h1>
          <h3 className="text-lg transition-normal capitalize">
            Find & explore your favourite
            <span className="bg-orange-600 text-primary px-3 font-extrabold uppercase mx-3 rounded-sm">
              pokemon
            </span>
            here.
          </h3>
          <Button onClick={() => setIsFind(true)}>
            <Search /> Search for Poke Buddy
          </Button>
        </div>
      </div>
    </>
  );
}
