import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { usePokeStore } from "@/store/usePokeStore";
import { CornerLeftUp, Search } from "lucide-react";
import { useRef, useState } from "react";

export default function SearchSection() {
  const { setIsSection, getData, setSearch, isFind } = usePokeStore();
  const [_, setSelect] = useState(0);

  const searchRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <div className="flex flex-col h-150 lg:h-full w-full">
        <div className="flex flex-col gap-5 items-center justify-center h-full lg:w-3xl mx-auto">
          <h1 className="text-3xl font-family-audiowide!">Poke-DEX</h1>
          <h3 className="text-lg capitalize">search your pokemon here...</h3>
          <div className="flex items-center gap-3 bg-secondary px-5 py-2 rounded-xl w-full md:w-xl">
            <Search size={19} />
            <Separator orientation="vertical" className="h-6!" />
            <Input
              ref={searchRef}
              placeholder="Search by name, id"
              className="bg-transparent! border-0"
              onKeyDown={(e) => {
                const key = e.key.toLowerCase();
                if (key === "enter") {
                  setSearch(searchRef.current?.value ?? "");
                  getData(searchRef.current?.value ?? "");
                  setIsSection("default");
                }
              }}
            />
            {/* <Button variant={"ghost"}>Search</Button> */}
          </div>
          <div className="flex flex-col items-center gap-4 w-full">
            <h3 className="text-sm text-muted-foreground">
              Here are some pokemon ?
            </h3>
            <div className="flex flex-wrap items-center gap-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Avatar
                  key={i}
                  onClick={() => setSelect(i)}
                  className={`w-20 h-28 duration-100 cursor-pointer active:scale-90`}
                >
                  <AvatarFallback>PK</AvatarFallback>
                </Avatar>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-end w-full">
          <Button
            size={"sm"}
            variant={"secondary"}
            onClick={() => {
              if (isFind) {
                setIsSection("search");
              }
              setIsSection("default");
            }}
          >
            <CornerLeftUp /> back to home
          </Button>
        </div>
      </div>
    </>
  );
}
