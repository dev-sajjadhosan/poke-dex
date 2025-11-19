import { getTypeIcon } from "@/utils/getTypeIcon";
import type { JSX, ReactNode } from "react";
import { Badge } from "../ui/badge";

export default function PokemonBadge({
  type,
  children,
}: {
  type: string;
  children?: ReactNode;
}): JSX.Element {
  const Icon = getTypeIcon(type as any);
  return (
    <Badge className="bg-primary/30 text-primary capitalize px-6 py-1.5">
      <Icon className="size-4!" />
      {children}
    </Badge>
  );
}
