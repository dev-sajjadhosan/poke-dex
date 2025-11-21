import TooltipBtn from "@/components/custom_ui/tooltip-button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { PokemonData } from "@/types/pokemon-data-types";
import {
  BringToFront,
  ChevronLeft,
  ChevronRight,
  Sword,
  Swords,
} from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

type Page = { first: number; page: number; last: number };

export default function MovesSection({ data }: { data: PokemonData | null }) {
  const [pages, setPages] = useState<Page[]>([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!data?.moves) return;

    const listSize = 12;
    const length = data?.moves?.length ?? 0;

    const result: Page[] = [];

    const totalPage = Math.ceil(length / listSize);

    for (let i = 1; i <= totalPage; i++) {
      result.push({
        page: i,
        first: (i - 1) * listSize,
        last: i * listSize,
      });
    }
    setPages(result);
  }, [data]);

  console.log(pages);

  return (
    <>
      <div className="flex flex-col gap-3 w-full h-full">
        <div className="flex items-center justify-between w-full pr-3">
          <h3 className="text-sm font-medium capitalize">{data?.name} Moves</h3>
          <div className="flex items-center gap-1.5">
            <Badge variant={"default"}>
              View - {pages[current]?.first}/{pages[current]?.last}
            </Badge>
            <Badge variant={"default"}>{data?.moves.length}</Badge>
          </div>
        </div>
        <ul className="grid md:grid-cols-2 gap-3 w-full">
          {data?.moves
            .slice(pages[current]?.first, pages[current]?.last)
            .map((m, i) => (
              <li
                key={i}
                className="flex gap-3 items-center justify-between w-full bg-secondary py-2 px-5 rounded-md"
              >
                <div className="flex items-center gap-3 w-full">
                  <Sword size={19} />
                  <Separator orientation="vertical" className="h-6!" />
                  <h3 className="text-sm capitalize ml-3">{m.name}</h3>
                </div>
                <div className="flex items-center gap-3">
                  <Badge>Level {m.level || "TM"}</Badge>
                  <TooltipBtn
                    icon={BringToFront}
                    label="View Details"
                    action={() => toast.warning("Developement mode.")}
                  />
                  {/* <TooltipBtn icon={Link2} label="More Details" /> */}
                </div>
              </li>
            ))}
        </ul>
        <div className="flex items-center justify-center gap-5 mt-auto">
          <TooltipBtn
            label="Prev"
            icon={ChevronLeft}
            size={"icon-sm"}
            action={() => setCurrent((value) => (value > 0 ? --value : value))}
          />
          <Badge className="px-5 py-1.5">
            <Swords /> Page {current <= 9 ? "0" + current : current}
          </Badge>
          <TooltipBtn
            label="Next"
            icon={ChevronRight}
            size={"icon-sm"}
            action={() =>
              setCurrent((value) =>
                value < pages.length - 1 ? ++value : value
              )
            }
          />
        </div>
      </div>
    </>
  );
}
