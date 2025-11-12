import { TbQuestionMark } from "react-icons/tb";
import { Button } from "../ui/button";
import { CornerLeftUp } from "lucide-react";
import { usePokeStore } from "@/store/usePokeStore";

export default function WrongCard() {
  const { setTab } = usePokeStore();
  return (
    <>
      <div className="flex items-center justify-center h-full w-full">
        <div className="p-14 flex flex-col gap-1 items-center justify-center">
          <div className="p-2.5 bg-secondary rounded-md">
            <TbQuestionMark size={25} />
          </div>
          <h3 className="text-xl mt-3">Opps! </h3>
          <p className="text-md">Looks like your hit the wrong button?</p>
          <p className="text-xs mb-2">Please, Try to Choose the right button</p>
          <Button onClick={() => setTab("default")}>
            <CornerLeftUp /> Back to Home
          </Button>
        </div>
      </div>
    </>
  );
}
