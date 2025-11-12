import { Button } from "@/components/ui/button";
import DefaultPage from "./components/default-page";
import { useState } from "react";
import { Sun, User2 } from "lucide-react";

export default function HomePage() {
  const [isFind, setIsFind] = useState<boolean>(true);
  return (
    <>
      <div className="flex flex-col gap-2 items-center justify-center h-screen ">
        {isFind ? (
          <div className="flex flex-col gap-1 w-11/12 h-11/12 bg-zinc-100 p-7 rounded-2xl shadow-2xs">
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col gap-1">
                <h1 className="text-3xl font-family-audiowide!">Poke-dex</h1>
                <h3 className="text-md">
                  This project was build for only Developer hoppy.
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <Button size={"sm"}>
                  <Sun />
                </Button>
                <Button size={"sm"}>
                  <User2 />
                </Button>
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
