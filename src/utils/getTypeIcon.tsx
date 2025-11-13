// utils/getTypeIcon.tsx
import {
  Zap,
  Flame,
  Droplet,
  Leaf,
  Snowflake,
  Bug,
  Feather,
  Eye,
  Moon,
  Mountain,
  Ghost,
  Cog,
  Star,
  Circle,
  Biohazard,
  Infinity,
  Sword,
} from "lucide-react";

type PokemonType =
  | "normal"
  | "fire"
  | "water"
  | "grass"
  | "electric"
  | "ice"
  | "fighting"
  | "poison"
  | "ground"
  | "flying"
  | "psychic"
  | "bug"
  | "rock"
  | "ghost"
  | "dragon"
  | "dark"
  | "steel"
  | "fairy";

export function getTypeIcon(type: PokemonType) {
  const map: Record<PokemonType, React.ElementType> = {
    normal: Circle,
    fire: Flame,
    water: Droplet,
    grass: Leaf,
    electric: Zap,
    ice: Snowflake,
    fighting: Sword, // alt for Fist (not in Lucide)
    poison: Biohazard,
    ground: Mountain,
    flying: Feather,
    psychic: Eye,
    bug: Bug,
    rock: Mountain,
    ghost: Ghost,
    dragon: Infinity,
    dark: Moon,
    steel: Cog,
    fairy: Star,
  };

  return map[type] || Circle;
}
