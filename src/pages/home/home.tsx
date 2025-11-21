import DefaultPage from "./components/default-page";
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
import SearchSection from "./components/search-section";
import GenerateCardSection from "./components/generate-card-section";
import DeveloperSection from "../developer-section/developer-section";
import { useEffect } from "react";
import { CornerLeftUp, Loader, Search, TriangleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  const {
    tab,
    isSection,
    isFind,
    setIsFind,
    setIsSection,
    search,
    getData,
    data,
    error,
    loading,
  } = usePokeStore();
  useEffect(() => {
    getData(search);
  }, []);

  return (
    <>
      <div className="flex flex-col gap-2 items-center justify-center min-h-screen">
        {isFind ? (
          <div className="flex flex-col gap-1 w-11/12 min-h-full lg:h-11/12 bg-stone-200 dark:bg-stone-700 p-7 rounded-2xl shadow-2xs">
            {isSection === "search" ? (
              <SearchSection />
            ) : isSection === "generate-card" ? (
              <GenerateCardSection />
            ) : isSection === "developer" ? (
              <DeveloperSection />
            ) : (
              <>
                {error ? (
                  <div className="flex flex-col items-center justify-center gap-1 w-full h-full">
                    <TriangleAlert
                      size={50}
                      className="text-neutral-300"
                      strokeWidth={1}
                    />
                    <h3 className="text-xl">Pokemon Not Found</h3>
                    <p className="text-sm">
                      Please try again with a different name.
                    </p>
                    <div className="flex items-center gap-3 mt-3">
                      <Button onClick={() => setIsSection("search")}>
                        <Search /> Search Again
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => {
                          setIsFind(false);
                          setIsSection("search");
                        }}
                      >
                        <CornerLeftUp /> Back to Home
                      </Button>
                    </div>
                  </div>
                ) : (
                  <>
                    <Header />
                    <div className="mt-7 flex flex-col lg:flex-row gap-9 items-center justify-between w-full h-full relative">
                      {loading && (
                        <div className="absolute left-0 right-0 mx-auto flex items-center justify-center bg-secondary/80 w-full h-full z-10 rounded-2xl">
                          <Badge className="px-5 py-2">
                            <Loader className="animate-spin" />
                            Loading
                          </Badge>
                        </div>
                      )}
                      <ViewCard data={data?.sprites} />
                      <FloatNav />
                      {tab === TabObject.default ? (
                        <DetailsContent data={data} />
                      ) : tab === TabObject.overview ? (
                        <OverviewSection data={data} />
                      ) : tab === TabObject.stats ? (
                        <StatsSection data={data} />
                      ) : tab === TabObject.moves ? (
                        <MovesSection data={data} />
                      ) : tab === TabObject.evolution ? (
                        <EvolutionSection data={data} />
                      ) : tab === TabObject.breeding ? (
                        <BreedingSection data={data} />
                      ) : (
                        <WrongCard />
                      )}
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        ) : (
          <DefaultPage setIsFind={setIsFind} />
        )}
      </div>
    </>
  );
}
