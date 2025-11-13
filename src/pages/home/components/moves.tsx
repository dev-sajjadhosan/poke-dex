import TooltipBtn from "@/components/custom_ui/tooltip-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { BringToFront, Sword, Swords } from "lucide-react";

export default function MovesSection() {
  return (
    <>
      <div className="flex flex-col gap-3 w-full h-full">
        <div className="flex items-center justify-between w-full pr-3">
          <h3 className="text-sm font-medium ">Pikachu Moves</h3>
          <Badge variant={"default"}>View - 10/50</Badge>
        </div>
        <ul className="grid grid-cols-2 gap-3 w-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <li
              key={i}
              className="flex gap-3 items-center justify-between w-full bg-secondary py-2 px-5 rounded-md"
            >
              <div className="flex items-center gap-3 w-full">
                <Sword size={19} />
                <Separator orientation="vertical" className="h-6!" />
                <h3 className="text-sm capitalize ml-3">mega punch</h3>
              </div>
              <div className="flex items-center gap-3">
                <Badge>Lv. 20</Badge>
                <TooltipBtn icon={BringToFront} label="View Details" />
                {/* <TooltipBtn icon={Link2} label="More Details" /> */}
              </div>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-center mt-3">
          <Button>
            <Swords />
            More Moves
          </Button>
        </div>
      </div>
    </>
  );
}
