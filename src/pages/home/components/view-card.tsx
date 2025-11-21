import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import image from "../../../assets/demo.png";
import type { Sprites } from "@/types/pokemon-data-types";

interface ViewCardProps {
  data: Sprites | undefined;
}

export default function ViewCard({ data }: ViewCardProps) {
  const [picture, setPicture] = useState<string>("");

  useEffect(() => {
    setPicture(data?.default ?? "");
  }, [data]);

  return (
    <Card className="w-2xl h-full bg-transparent border-0 px-3">
      <CardContent className="flex items-center justify-center h-full w-full p-0">
        <img src={picture || image} alt="" width={200} />
      </CardContent>

      <div className="flex items-center justify-center gap-3 w-full">
        <img
          src={data?.default ?? image}
          alt=""
          width={75}
          onClick={() => setPicture(data?.default ?? "")}
          className={`p-3 rounded-lg border-2 active:scale-95 transition-normal duration-100 cursor-pointer ${
            picture === data?.default
              ? "border-neutral-500 bg-accent/70"
              : "border-transparent scale-90 bg-secondary"
          }`}
        />

        <img
          src={data?.shiny ?? image}
          alt=""
          width={75}
          onClick={() => setPicture(data?.shiny ?? "")}
          className={`p-3 rounded-lg border-2 active:scale-95 transition-normal duration-100 cursor-pointer ${
            picture === data?.shiny
              ? "border-neutral-500 bg-accent/70"
              : "border-transparent scale-90 bg-accent"
          }`}
        />
      </div>
    </Card>
  );
}
