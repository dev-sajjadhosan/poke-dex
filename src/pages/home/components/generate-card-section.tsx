import { Button } from "@/components/ui/button";
import { usePokeStore } from "@/store/usePokeStore";
import { CornerLeftUp } from "lucide-react";

export default function GenerateCardSection() {
  const { setIsSection } = usePokeStore();
  return (
    <>
      <div className="flex flex-col gap-3 items-center justify-center h-full w-full">
        <h3 className="text-4xl">
          Generate Your <span className="font-family-audiowide!">CARD</span>
        </h3>
        <Button onClick={() => setIsSection(null)}>
          <CornerLeftUp /> Back
        </Button>
      </div>
    </>
  );
}
