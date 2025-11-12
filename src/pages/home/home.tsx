import DefaultPage from "./components/default-page";
import { useState } from "react";
import Header from "@/components/custom_ui/header";
import ViewCard from "./components/view-card";
import DetailsContent from "./components/details-content";
import FloatNav from "./components/float-nav";
import { TabObject, usePokeStore } from "@/store/usePokeStore";
import { TbQuestionMark } from "react-icons/tb";
import { Button } from "@/components/ui/button";
import { CornerLeftUp } from "lucide-react";
import WrongCard from "@/components/custom_ui/wrong-card";

export default function HomePage() {
  const [isFind, setIsFind] = useState<boolean>(true);
  const { tab, setTab } = usePokeStore();
  return (
    <>
      <div className="flex flex-col gap-2 items-center justify-center h-screen ">
        {isFind ? (
          <div className="flex flex-col gap-1 w-11/12 h-11/12 bg-stone-200 p-7 rounded-2xl shadow-2xs">
            <Header />
            {/* ----------------Header------------- */}
            <div className="mt-7 flex gap-9 items-center justify-between w-full h-full">
              <ViewCard />
              <FloatNav />
              {tab === TabObject.default ? (
                <DetailsContent />
              ) : tab === TabObject.overview ? (
                <WrongCard />
              ) : tab === TabObject.stats ? (
                <WrongCard />
              ) : tab === TabObject.moves ? (
                <WrongCard />
              ) : tab === TabObject.breeding ? (
                <WrongCard />
              ) : tab === TabObject.evolution ? (
                <WrongCard />
              ) : (
                ""
              )}
            </div>
          </div>
        ) : (
          <DefaultPage setIsFind={setIsFind} />
        )}
      </div>
    </>
  );
}
