"use client";

import { useOptionsContext } from "@/contexts/options-context-provider";
import React from "react";
import { Button } from "./ui/button";
import { DropdownCurrency } from "./dropdown-currency";
import { DropdownTimeFrame } from "./dropdown-timeframe";

export default function ContextOptions() {
  const { currency, timeFrame } = useOptionsContext();
  return (
    <div className="space-x-2 mr-2">
      <DropdownCurrency />
      <DropdownTimeFrame />
    </div>
  );
}
