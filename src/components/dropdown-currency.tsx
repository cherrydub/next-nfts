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

export function DropdownCurrency() {
  //   const [currency, setCurrency] = React.useState("Native");
  const { currency, setCurrency } = useOptionsContext();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          {currency === "Native" ? (
            <span className="flex ml-1">
              <span className="hidden md:inline">ETH</span>

              <Image
                alt="logo"
                src="/svgs/ethereum.svg"
                width={20}
                height={20}
              />
            </span>
          ) : (
            <span className="flex ml-1">
              <span className="hidden md:inline">USD</span>
              <Image alt="logo" src="/svgs/dollar.svg" width={20} height={20} />
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Update Currency Type</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={currency} onValueChange={setCurrency}>
          <DropdownMenuRadioItem value="Native">
            ETH{" "}
            <Image alt="logo" src="/svgs/ethereum.svg" width={20} height={20} />
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Usd">
            USD{" "}
            <Image alt="logo" src="/svgs/dollar.svg" width={20} height={20} />
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
