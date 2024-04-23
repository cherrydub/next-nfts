"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useOptionsContext } from "@/contexts/options-context-provider";
import Image from "next/image";

export function DropdownTimeFrame() {
  // const [timeFrame, setTimeFrame] = React.useState("24h");
  const { timeFrame, setTimeFrame } = useOptionsContext();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <span className="hidden md:inline mr-1">timerange:</span>
          {timeFrame}{" "}
          <Image alt="logo" src="/svgs/clock.svg" width={20} height={20} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Update Time Range</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={timeFrame} onValueChange={setTimeFrame}>
          <DropdownMenuRadioItem value="24h">24h</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="7d">7d</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="14d">14d</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="30d">30d</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="90d">90d</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
