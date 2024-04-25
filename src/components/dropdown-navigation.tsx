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

export function DropdownNavigation() {
  // const [timeFrame, setTimeFrame] = React.useState("24h");
  const { navigation, setNavigation } = useOptionsContext();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Image alt="logo" src="/svgs/bars-solid.svg" width={20} height={20} />
          {/* <span className="hidden md:inline">Navigation</span> */}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Navigate to:</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={navigation}
          onValueChange={setNavigation}
        >
          <DropdownMenuRadioItem value="home">home</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="collections">
            collections
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="crypto">crypto</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
