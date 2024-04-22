"use client";
import { Button } from "@/components/ui/button";
import { ProjectSchema } from "@/lib/validations";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { z } from "zod";

type Projects = z.infer<typeof ProjectSchema>;

export const Columns: ColumnDef<Projects>[] = [
  {
    accessorKey: "ranking",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Ranking
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="flex items-center justify-around">
        {String(row.original.ranking).padStart(3, "0")}
        <Image
          width={40}
          height={40}
          src={`https://nftpricefloor.com/_next/image?url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.nftpricefloor%2Fprojects%2Fv1%2F${row.original.slug}.png%3Fversion%3D6&w=256&q=75`} // Replace "URL_TO_YOUR_IMAGE" with the actual URL to your image directory
          alt={row.original.name} // Use the name as alt text for accessibility
          className="w-10 h-10 rounded-md mr-2 border" // Adjust the size of the image as needed
        />
      </div>
    ),
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="flex flex-col">
        <Link
          href={`/collections/${row.original.slug}`}
          title={row.original.slug}
        >
          {row.original.name}
        </Link>
        <span className="text-[0.5rem]">{row.original.stats.totalSupply}</span>
      </div>
    ),
  },
  {
    accessorKey: "stats.floorInfo.currentFloorNative",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Floor Price
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
];
