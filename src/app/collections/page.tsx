import React from "react";
import { Project } from "@/lib/types";
import { ProjectSchema } from "@/lib/validations";
import { DataTable } from "./data-table";
import { Columns } from "./columns";
import { nftArray } from "../../../public/data";

import { smallerNftArray } from "../../../public/smallerData";

export default async function CollectionsPage() {
  // const response = await fetch(
  //   `https://nftpricefloor.quickapi.io/api/projects?qapikey=${process.env.NFT_API_KEY}`
  // );
  // if (!response.ok) {
  //   throw new Error("Network response was not ok");
  // }
  // const rawData = await response.json();

  // const rawData = smallerNftArray;
  const rawData = nftArray;

  // Validate the fetched data against the schema using safeParse
  const data = rawData
    .map((item: unknown) => {
      const result = ProjectSchema.safeParse(item);
      if (result.success) {
        return result.data; // Valid data
      } else {
        console.error("Invalid project data:", result.error);
        return null; // Handle invalid data
      }
    })
    .filter(Boolean) // Remove null values (invalid data)
    .filter((item: Project) => item.ranking && item.ranking <= 420) // Filter ranks under 420
    .filter((item: Project) => item.blockchain === "ethereum");

  return (
    <div className="container mx-auto">
      <DataTable asChild columns={Columns} data={data} />
    </div>
  );
}
