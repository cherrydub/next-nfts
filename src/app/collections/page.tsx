import React from "react";
import { z } from "zod";
import { Project } from "@/lib/types";
import Link from "next/link";
import { ProjectSchema } from "@/lib/validations";

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
    .filter(Boolean); // Remove null values (invalid data)

  return (
    <div className="overflow-x-auto cursor-default">
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Slug</th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {data
            .filter((item: Project) => item.ranking <= 420)
            .sort((a: any, b: any) => a.ranking - b.ranking)
            .map((item: Project, index: number) => (
              <tr
                key={item.slug}
                className={index % 2 === 0 ? "bg-gray-100" : ""}
              >
                <td className="border px-4 py-2">{item.ranking}</td>
                <td className="border px-4 py-2">
                  <Link href={`/collections/${item.slug}`}>{item.name}</Link>
                </td>
                <td className="border px-4 py-2">{item.slug}</td>
                {/* Add more table data cells as needed */}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
