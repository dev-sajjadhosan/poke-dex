import { Atom, Inbox, Moon, Store, User2 } from "lucide-react";
import TooltipBtn from "./tooltip-button";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <>
      <div className="flex items-start justify-between w-full">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <img src="logo.png" alt="Pokedex" width={30} />
            <h1 className="text-2xl font-family-audiowide!">Poke-dex</h1>
          </div>
          <h3 className="text-sm capitalize">
            This project was build for only Developer hobby.
          </h3>
        </div>
        <div className="flex items-center gap-3">
          <Button className="group" size={'sm'}>
            <Atom className="group-hover:animate-spin" /> Generate
          </Button>
          <TooltipBtn icon={Moon} label="Dark" />
          <TooltipBtn icon={User2} label="Developer" />
          <TooltipBtn icon={Store} label="Store" />
          <TooltipBtn icon={Inbox} label="Share History" />
        </div>
      </div>
    </>
  );
}
