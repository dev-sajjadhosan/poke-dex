import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function DefaultPage({
  setIsFind,
}: {
  setIsFind: (v: boolean) => void;
}) {
  return (
    <>
      <div className="flex flex-col gap-3 items-center justify-center">
        <img src="logo.png" alt="" width={70} />
        <h1 className="text-4xl font-family-audiowide!">Pokedex</h1>
        <h3 className="text-lg transition-normal">
          Find your favourite
          <span className="bg-orange-600 text-primary-foreground px-3 uppercase">
            pokemon
          </span>
          here.
        </h3>
        <Button onClick={() => setIsFind(true)}>
          <Search /> Search for Poke Buddy
        </Button>
      </div>
    </>
  );
}
