"use client";

import React, { createContext, useContext, useState } from "react";

type OptionsContextProviderProps = {
  children: React.ReactNode;
};

type TOptionsContextType = {
  currency: string;
  setCurrency: React.Dispatch<React.SetStateAction<string>>;
  timeFrame: string;
  setTimeFrame: React.Dispatch<React.SetStateAction<string>>;
  handleTimeChange: (timeFrame: string) => void;
  handleCurrencyChange: () => void;
};

export const OptionsContext = createContext<TOptionsContextType | null>(null);

export default function OptionsContextProvider({
  children,
}: OptionsContextProviderProps) {
  const [currency, setCurrency] = useState("Native");
  const [timeFrame, setTimeFrame] = useState("7d");

  function handleTimeChange(timeFrame: string) {
    setTimeFrame(timeFrame);
  }

  function handleCurrencyChange() {
    if (currency === "Native") {
      setCurrency("Usd");
    } else {
      setCurrency("Native");
    }
  }

  return (
    <OptionsContext.Provider
      value={{
        currency,
        setCurrency,
        timeFrame,
        setTimeFrame,
        handleTimeChange,
        handleCurrencyChange,
      }}
    >
      {children}
    </OptionsContext.Provider>
  );
}

export function useOptionsContext() {
  const context = useContext(OptionsContext);
  if (context === null) {
    throw new Error(
      "useOptionsContext must be used within an OptionsContextProvider"
    );
  }
  return context;
}
