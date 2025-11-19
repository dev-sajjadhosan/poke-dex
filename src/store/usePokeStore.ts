import type { PokemonData } from "@/types/pokemon-data-types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Theme = "light" | "dark" | "system";
export type Sections =
  | "search"
  | "generate-card"
  | "store"
  | "share-history"
  | "developer"
  | "default"
  | null;

type Tab =
  | "default"
  | "overview"
  | "stats"
  | "moves"
  | "evolution"
  | "breeding";

export const TabObject = {
  default: "default",
  overview: "overview",
  stats: "stats",
  moves: "moves",
  evolution: "evolution",
  breeding: "breeding",
} as const;

// You MUST define this or import it
const parseEvolutionChain = (node: any) => {
  const chain: any = [];
  const traverse = (n: any) => {
    const speciesUrl = n.species.url;
    const id = speciesUrl
      ? parseInt(speciesUrl.split("/").slice(-2, -1)[0])
      : null;
    chain.push({
      name: n.species.name,
      id: id,
      minLevel: n.evolution_details[0]?.min_level || null,
    });
    n.evolves_to.forEach(traverse);
  };
  traverse(node);
  return chain;
};

interface PokeStoreProps {
  theme: Theme;
  tab: Tab;
  history: string[];
  isSection: Sections;
  isFind: boolean;
  search: string;

  data: PokemonData | null;
  loading: boolean;
  error: string | null;

  getData: (name: string) => Promise<void>;

  setData: (v: any) => void;
  setTheme: (v: Theme) => void;
  setTab: (v: Tab) => void;
  setIsSection: (v: Sections) => void;
  setIsFind: (v: boolean) => void;
  setSearch: (v: string | null) => void;

  addToHistory: (d: string) => void;
  removeFromHistory: (v: number | string) => void;
}

export const usePokeStore = create<PokeStoreProps>()(
  persist(
    (set) => ({
      theme: "system",
      tab: "overview",
      isSection: "default",
      isFind: false,
      history: [],
      data: null,
      loading: false,
      error: null,
      search: "",

      setData: (v) => set({ data: v }),

      getData: async (name: string) => {
        set({ loading: true, error: null });

        try {
          const baseRes = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
          );
          if (!baseRes.ok) throw new Error("Pokémon not found");

          const base = await baseRes.json();

          console.log("Pokemon Data: ", base);
          const speciesRes = await fetch(base.species.url);
          const species = await speciesRes.json();

          const evolutionRes = await fetch(species.evolution_chain.url);
          const evolution = await evolutionRes.json();

          const typeRes = await fetch(base.types[0].type.url);
          const typeData = await typeRes.json();

          const normalized = {
            id: base.id,
            name: base.name,
            types: base.types.map((t: any) => t.type.name),
            stats: base.stats.reduce((acc: any, s: any) => {
              acc[s.stat.name.replace("-", "")] = s.base_stat;
              return acc;
            }, {} as Record<string, number>),
            abilities: base.abilities.map((a: any) => ({
              name: a.ability.name,
              isHidden: a.is_hidden,
            })),
            sprites: {
              default: base.sprites.other?.["official-artwork"]?.front_default,
              shiny: base.sprites.other?.["official-artwork"]?.front_shiny,
            },
            physical: {
              height: base.height / 10,
              weight: base.weight / 10,
            },
            species: {
              genus: species.genera.find((g: any) => g.language.name === "en")
                ?.genus,
              description: species.flavor_text_entries
                .find((e: any) => e.language.name === "en")
                ?.flavor_text.replace(/\n/g, " "),
              generation: species.generation.name.replace(
                "generation-",
                "Gen "
              ),
              isLegendary: species.is_legendary,
              isMythical: species.is_mythical,
              habitat: species.habitat?.name,
              captureRate: species.capture_rate,
            },
            breeding: {
              eggGroups: species.egg_groups.map((g: any) => g.name),
              genderRate: species.gender_rate,
            },
            evolution: parseEvolutionChain(evolution.chain),
            typeEffectiveness: {
              weakTo: typeData.damage_relations.double_damage_from.map(
                (t: any) => t.name
              ),
              resistantTo: typeData.damage_relations.half_damage_from.map(
                (t: any) => t.name
              ),
              immuneTo: typeData.damage_relations.no_damage_from.map(
                (t: any) => t.name
              ),
            },
            moves: base.moves.map((m: any) => ({
              name: m.move.name,
              level: m.version_group_details[0]?.level_learned_at || 0,
            })),
            baseExperience: base.base_experience,
          };

          set({ data: normalized });
        } catch (err: any) {
          set({ error: err.message });
        } finally {
          set({ loading: false });
        }
      },

      setTheme: (v) => set({ theme: v }),
      setTab: (v) => set({ tab: v }),
      setIsSection: (v) => set({ isSection: v }),
      setIsFind: (v) => set({ isFind: v }),
      setSearch: (v: string | null) => set({ search: v ?? "" }),

      addToHistory: (d: string) =>
        set((state) => {
          const newHistory = [d, ...state.history.filter((h) => h !== d)];
          return { history: newHistory.slice(0, 50) };
        }),

      removeFromHistory: (v) =>
        set((state) => {
          if (typeof v === "number") {
            return { history: state.history.filter((_, i) => i !== v) };
          }
          return { history: state.history.filter((h) => h !== v) };
        }),
    }),
    { name: "poke-store" }
  )
);
