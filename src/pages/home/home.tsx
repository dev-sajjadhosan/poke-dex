import DefaultPage from "./components/default-page";
import { useState } from "react";
import { Inbox, Moon, Shield, User2 } from "lucide-react";
import TooltipBtn from "@/components/custom_ui/tooltip-button";
import { Card, CardContent } from "@/components/ui/card";
import { TbArrowAutofitHeight, TbShield, TbWeight } from "react-icons/tb";

import image from "../../assets/demo.png";
import SpacialSymbol from "@/components/custom_ui/spcial-symbol";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";

export default function HomePage() {
  const [isFind, setIsFind] = useState<boolean>(true);
  const [select, setSelect] = useState<number | string>(0);
  return (
    <>
      <div className="flex flex-col gap-2 items-center justify-center h-screen ">
        {isFind ? (
          <div className="flex flex-col gap-1 w-11/12 h-11/12 bg-stone-200 p-7 rounded-2xl shadow-2xs">
            <div className="flex items-start justify-between w-full">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <img src="logo.png" alt="Pokedex" width={30} />
                  <h1 className="text-3xl font-family-audiowide!">Poke-dex</h1>
                </div>
                <h3 className="text-sm capitalize">
                  This project was build for only Developer hobby.
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <TooltipBtn icon={Moon} label="Dark" />
                <TooltipBtn icon={User2} label="Developer" />
                <TooltipBtn icon={Inbox} label="Share History" />
              </div>
            </div>
            {/* ----------------Header------------- */}
            <div className="mt-7 flex gap-9 items-center justify-between w-full h-full">
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
                      className={`bg-secondary p-3 rounded-lg border active:scale-95 ${
                        select === i ? "border-primary" : "border-transparent"
                      }`}
                    />
                  ))}
                </div>
              </Card>

              <div className="flex flex-col gap-1 w-full h-full">
                <h1 className="text-xl mb-2 font-normal">
                  <SpacialSymbol icon="|>" /> Know About Your Poke ?
                </h1>
                <div className="flex items-start gap-1">
                  <h1 className="text-3xl">Pikachu</h1>
                  <Badge className="uppercase">electric</Badge>
                </div>
                <h3 className="text-sm font-family-fira-code!">
                  <SpacialSymbol icon="=>>" /> The Mouse Pokémon
                </h3>
                <p className="text-sm">
                  <SpacialSymbol icon="=>>" /> When several of these POKéMON
                  gather, their electricity could build and cause lightning
                  storms.
                </p>
                <div className="flex flex-col gap-1 mt-1 w-full">
                  <p className="text-sm">
                    <SpacialSymbol icon="=>>" /> Basic Information:
                  </p>
                  <div className="flex w-full gap-7 justify-between">
                    <div className="flex items-center gap-2 w-full p-2 rounded-md text-sm">
                      <TbArrowAutofitHeight
                        size={19}
                        className="text-primary/70"
                      />
                      <Separator orientation="vertical" className="h-6!" />
                      Height: <span className="">0.4m</span>
                    </div>
                    <div className="flex items-center gap-2 w-full p-2 rounded-md text-sm">
                      <TbWeight size={19} className="text-primary/70" />
                      <Separator orientation="vertical" className="h-6!" />
                      Weight: <span className="">6kg</span>
                    </div>
                  </div>
                </div>
                <div className="mt-2 flex flex-col gap-2 w-full">
                  <h3 className="text-sm font-medium">Power Base Stats:</h3>

                  <div className="flex flex-col gap-3.5 w-full">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div
                        key={i}
                        className="flex gap-9 items-center justify-between w-full"
                      >
                        <h3 className="text-sm flex items-center gap-1 w-52">
                          SP.Defense
                          <SpacialSymbol icon="||=>" />
                        </h3>
                        <Progress value={33} />
                        <Badge>33</Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <DefaultPage setIsFind={setIsFind} />
        )}
      </div>
    </>
  );
}
