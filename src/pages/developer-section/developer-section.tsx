import { Button } from "@/components/ui/button";
import { usePokeStore } from "@/store/usePokeStore";
import { X } from "lucide-react";

export default function DeveloperSection() {
  const { setIsSection } = usePokeStore();
  return (
    <section className="flex flex-col gap-1 w-full h-full p-2">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-xl font-extrabold font-family-audiowide! ">
          Poke-DEX
        </h1>
        <Button size={"icon-sm"} variant={'ghost'} onClick={() => setIsSection(null)}>
          <X />
        </Button>
      </div>

      <h3 className="text-md">
        Your all-in-one Pokémon platform: search, store, and generate custom
        Pokémon cards for friends or special occasions.
      </h3>

      <p className="text-md">
        Initially, the goal was simple: create a place to explore all Pokémon
        information. But I wanted to make it unique. That’s why I added a
        feature where Pokémon enthusiasts can generate personalized cards and
        share them with friends or post on social media.
      </p>

      <div className="mt-4">
        <h4 className="text-lg font-semibold  mb-2">Core Features:</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Search:</strong> Quickly find any Pokémon and explore stats,
            abilities, and evolutions.
          </li>
          <li>
            <strong>Store:</strong> Save favorite Pokémon and card designs in
            your personal collection.
          </li>
          <li>
            <strong>Generate Cards:</strong> Create unique Pokémon cards to
            share with friends or social media.
          </li>
        </ul>
      </div>

      <div className="mt-4">
        <h4 className="text-lg font-semibold  mb-2">
          Types of Cards You Can Generate:
        </h4>
        <ul className="list-decimal list-inside space-y-1">
          <li>
            <strong>Birthday Cards:</strong> Send a personalized Pokémon-themed
            birthday greeting.
          </li>
          <li>
            <strong>Friendship Cards:</strong> Celebrate friendship with a fun,
            custom Pokémon card.
          </li>
          <li>
            <strong>Battle Challenge Cards:</strong> Create cards featuring your
            Pokémon ready for a challenge.
          </li>
          <li>
            <strong>Holiday & Special Occasion Cards:</strong> Any
            festival-themed Pokémon cards.
          </li>
          <li>
            <strong>Social Media Cards:</strong> Quick, shareable cards
            optimized for posting online.
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-between w-full my-20">
        <p className="text-sm">Made with 💘 by Developer.</p>
        <p className="text-sm">Copyright © 2025 Poke-DEX</p>
      </div>
    </section>
  );
}
