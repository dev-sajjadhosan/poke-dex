import { Atom, Inbox, Moon, Search, Store, Sun, User2 } from "lucide-react";
import TooltipBtn from "./tooltip-button";
import { Button } from "../ui/button";
import { usePokeStore } from "@/store/usePokeStore";
import { toast } from "sonner";

export default function Header() {
  const { setTheme, theme, setIsSection } = usePokeStore();
  return (
    <>
      <div className="flex items-start justify-between w-full">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <img src="logo.png" alt="Pokedex" width={30} />
            <h1 className="text-2xl font-family-audiowide! flex">
              Poke-dex
            </h1>
          </div>
          <h3 className="text-sm capitalize hidden lg:flex">
            This project was build for only Developer hobby.
          </h3>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-3">
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
          </div>
          <div className="md:hidden flex items-center gap-3">
            <TooltipBtn
              variant="default"
              icon={Search}
              label="Search"
              action={() => setIsSection("search")}
            />
            <TooltipBtn
              variant="default"
              icon={Atom}
              label="Generate"
              action={() => setIsSection("generate-card")}
            />
          </div>
          <TooltipBtn
            icon={theme === "light" ? Moon : Sun}
            label={theme === "light" ? "Dark" : "light"}
            action={() => setTheme(theme === "dark" ? "light" : "dark")}
          />
          <TooltipBtn
            icon={User2}
            label="Developer"
            action={() => setIsSection("developer")}
          />
          <TooltipBtn
            icon={Store}
            label="Store"
            action={() =>
              toast.info("Next Update. Coming Soon", {
                description:
                  "Now The Developer is currently is learning new tech and upgrading skill.",
              })
            }
          />
          <TooltipBtn
            icon={Inbox}
            label="Share History"
            action={() =>
              toast.info("Next Update. Coming Soon", {
                description:
                  "Now The Developer is currently is learning new tech and upgrading skill.",
              })
            }
          />
        </div>
      </div>
    </>
  );
}
