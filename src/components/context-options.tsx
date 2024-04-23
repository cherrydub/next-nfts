"use client";

import { useOptionsContext } from "@/contexts/options-context-provider";
import React from "react";

export default function ContextOptions() {
  const { currency, timeFrame } = useOptionsContext();
  return (
    <div>
      <div>
        {currency} {timeFrame}
      </div>
      <div></div>
    </div>
  );
}
