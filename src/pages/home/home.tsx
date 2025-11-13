import DefaultPage from "./components/default-page";
import { useState } from "react";
import Header from "@/components/custom_ui/header";
import ViewCard from "./components/view-card";
import DetailsContent from "./components/details-content";
import FloatNav from "./components/float-nav";
import { TabObject, usePokeStore } from "@/store/usePokeStore";

import WrongCard from "@/components/custom_ui/wrong-card";
import OverviewSection from "./components/overview";
import StatsSection from "./components/stats";
import MovesSection from "./components/moves";
import EvolutionSection from "./components/evolution";
import BreedingSection from "./components/breeding";

export default function HomePage() {
  const [isFind, setIsFind] = useState<boolean>(true);
  const { tab } = usePokeStore();
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
                <OverviewSection />
              ) : tab === TabObject.stats ? (
                <StatsSection />
              ) : tab === TabObject.moves ? (
                <MovesSection />
              ) : tab === TabObject.evolution ? (
                <EvolutionSection />
              ) : tab === TabObject.breeding ? (
                <BreedingSection />
              ) : (
                <WrongCard />
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
