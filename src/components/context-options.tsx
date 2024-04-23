"use client";

import { useOptionsContext } from "@/contexts/options-context-provider";
import React from "react";
import { Button } from "./ui/button";
import { DropdownCurrency } from "./dropdown-currency";
import { DropdownTimerange } from "./dropdown-timerange";

export default function ContextOptions() {
  const { currency, timeFrame } = useOptionsContext();
  return (
    <div>
      <div>
        <DropdownCurrency />
        <DropdownTimerange />
      </div>
      <div></div>
    </div>
  );
}
