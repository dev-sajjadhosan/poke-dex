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
    <Badge className="uppercase px-6 py-2">
      <Icon className="size-4!" />
      {children}
    </Badge>
  );
}
