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

export function DropdownTimerange() {
  const [timeRange, setTimeRange] = React.useState("24h");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">timerange: {timeRange}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Update Time Range</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={timeRange} onValueChange={setTimeRange}>
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
