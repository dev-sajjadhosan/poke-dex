import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import image from "../../../assets/demo.png";

export default function ViewCard() {
  const [select, setSelect] = useState<number | string>(0);

  return (
    <>
      <Card className="w-2xl h-full bg-transparent border-0 px-3">
        <CardContent className="flex items-center justify-center h-full w-full p-0">
          <img src={image} alt="" width={200} />
        </CardContent>
        <div className="flex items-center justify-between gap-3 w-full">
          {Array.from({ length: 5 }).map((_, i) => (
            <img
              src={image}
              alt=""
              width={75}
              key={i}
              onClick={() => setSelect(i)}
              className={`p-3 rounded-lg border-2 active:scale-95 transition-normal duration-100 cursor-pointer ${
                select === i
                  ? "border-neutral-500 bg-primary/70"
                  : "border-transparent scale-90 bg-secondary"
              }`}
            />
          ))}
        </div>
      </Card>
    </>
  );
}
