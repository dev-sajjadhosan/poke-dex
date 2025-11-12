import { CircleQuestionMark, type LucideProps } from "lucide-react";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import type React from "react";

interface TooltipBtnProps {
  label?: string;
  icon?: React.ComponentType<LucideProps>;
  align?: "start" | "center" | "end";
  side?: "top" | "right" | "bottom" | "left";
  action?: (e?: any) => void;
  url?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?:
    | "default"
    | "icon"
    | "sm"
    | "lg"
    | "icon-sm"
    | "icon-lg"
    | null
    | undefined;
  className?: string;
  iconWidth?: number;
  iconSize?: number;
}

export default function TooltipBtn({
  label = "no label",
  icon: Icon = CircleQuestionMark, // <- rename here
  //   url,
  align,
  side,
  action,
  variant = "ghost",
  size = "icon",
  className,
  iconWidth,
  iconSize,
}: TooltipBtnProps) {
  return (
    <Tooltip>
      <TooltipTrigger className={className}>
        <Button
          variant={variant}
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            if (action) action(e);
          }}
          size={size}
        >
          {Icon && <Icon strokeWidth={iconWidth} size={iconSize} />}
        </Button>
      </TooltipTrigger>
      <TooltipContent align={align} side={side}>
        <p className="capitalize">{label}</p>
      </TooltipContent>
    </Tooltip>
  );
}
