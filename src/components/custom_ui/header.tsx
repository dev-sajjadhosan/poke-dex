import { Atom, Inbox, Moon, Search, Store, Sun, User2 } from "lucide-react";
import TooltipBtn from "./tooltip-button";
import { Button } from "../ui/button";
import { usePokeStore } from "@/store/usePokeStore";

export default function Header() {
  const { setTheme, theme, setIsSection } = usePokeStore();
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
          <Button size={"sm"} onClick={() => setIsSection("search")}>
            <Search /> Search
          </Button>
          <Button
            className="group"
            size={"sm"}
            onClick={() => setIsSection("generate-card")}
          >
            <Atom className="group-hover:animate-spin" /> Generate
          </Button>
          <TooltipBtn
            icon={theme === "light" ? Moon : Sun}
            label={theme === "light" ? "Dark" : "light"}
            action={() => setTheme(theme === "dark" ? "light" : "dark")}
          />
          <TooltipBtn icon={User2} label="Developer" />
          <TooltipBtn icon={Store} label="Store" />
          <TooltipBtn icon={Inbox} label="Share History" />
        </div>
      </div>
    </>
  );
}
