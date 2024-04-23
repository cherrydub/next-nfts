"use client";

import React from "react";
import { Grid } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="flex-center h-screen">
      <Grid
        visible={true}
        height="80"
        width="80"
        color="accent"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass="grid-wrapper"
      />
    </div>
  );
}
