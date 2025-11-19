export interface PokemonData {
  id: number;
  name: string;
  types: string[];
  stats: Record<string, number>;
  abilities: Ability[];
  sprites: Sprites;
  physical: Physical;
  species: SpeciesData;
  breeding: BreedingData;
  evolution: EvolutionStep[];
  typeEffectiveness: TypeEffectiveness;
  moves: PokemonMove[];
  baseExperience: number;
}

export interface Ability {
  name: string;
  isHidden: boolean;
}

export interface Sprites {
  default: string | null;
  shiny: string | null;
}

export interface Physical {
  height: number; // meters
  weight: number; // kg
}

export interface SpeciesData {
  genus: string | undefined;
  description: string | undefined;
  generation: string;
  isLegendary: boolean;
  isMythical: boolean;
  habitat: string | null;
  captureRate: number;
}

export interface BreedingData {
  eggGroups: string[];
  genderRate: number; // -1 = genderless
}

export interface EvolutionStep {
  name: string;
  id: number;
  minLevel: number | null;
}

export interface TypeEffectiveness {
  weakTo: string[];
  resistantTo: string[];
  immuneTo: string[];
}

export interface PokemonMove {
  name: string;
  level: number;
}
