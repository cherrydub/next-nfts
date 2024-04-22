import React from "react";
import { Project } from "@/lib/types";
import Link from "next/link";
import { ProjectSchema } from "@/lib/validations";
import Image from "next/image";
import { Star } from "lucide-react";

const currency = true;

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
    <div className="overflow-x-auto cursor-default font-mono">
      <table className="table-auto w-full">
        <thead>
          <tr className="text-left">
            <th className=" ">Rank</th>
            <th className="px-1 "></th>
            <th className="px-4 ">Name</th>
            <th className="px-4 ">Floor</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((item: Project) => item.ranking <= 420)
            .sort((a: any, b: any) => a.ranking - b.ranking)
            .map((item: Project, index: number) => (
              <tr
                key={item.slug}
                className={index % 2 === 0 ? "bg-accent" : ""}
              >
                <td className="px-1  text-xs">
                  {String(index + 1).padStart(3, "0")}
                </td>
                <td className=" ">
                  <Star width={12} />
                </td>
                <td className=" px-4  flex items-center space-x-2">
                  <div className="w-8 h-8">
                    <Image
                      src={`https://nftpricefloor.com/_next/image?url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.nftpricefloor%2Fprojects%2Fv1%2F${item.slug}.png%3Fversion%3D6&w=256&q=75`}
                      alt=""
                      width={32}
                      height={32}
                      className="object-cover w-full h-full border border-black/50"
                    />
                  </div>
                  <div className="flex flex-col">
                    <Link href={`/collections/${item.slug}`} title={item.slug}>
                      {item.name}
                    </Link>
                    <div className="text-xs ">
                      <span className="bg-primary text-secondary px-1">
                        {item.stats.totalSupply}
                      </span>
                    </div>
                  </div>
                </td>
                <td className=" px-4 ">
                  {currency
                    ? item.stats.floorInfo.currentFloorNative
                    : item.stats.floorInfo.currentFloorUsd}
                  {currency ? " ETH" : " USD"}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
