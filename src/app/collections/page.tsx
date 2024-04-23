import React, { Suspense } from "react";
import { Project } from "@/lib/types";
import Link from "next/link";
import { ProjectSchema } from "@/lib/validations";
import Image from "next/image";
import { Star } from "lucide-react";
import { DataTable } from "./data-table";
import { Columns } from "./columns";

export default async function CollectionsPage() {
  const response = await fetch(
    `https://nftpricefloor.quickapi.io/api/projects?qapikey=${process.env.NFT_API_KEY}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const rawData = await response.json();

  // Validate the fetched data against the schema using safeParse
  const data = rawData
    .map((item: Project) => {
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
    <div className="container mx-auto font-mono">
      <Suspense
        key={crypto.randomUUID()}
        fallback={<div>Loading dudeeeee...</div>}
      >
        <DataTable columns={Columns} data={data} />
      </Suspense>
    </div>
  );
}
