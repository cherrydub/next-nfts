"use client";
import { Button } from "@/components/ui/button";
import { useOptionsContext } from "@/contexts/options-context-provider";
import { ProjectSchema } from "@/lib/validations";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { z } from "zod";

const currency = "Native";
const timeRange = "7d";

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
      <div className="flex flex-row justify-around w-24">
        <span className="flex flex-col items-center ">
          <Star width={12} />
          {String(row.original.ranking).padStart(3, "0")}
        </span>

        <Image
          width={50}
          height={50}
          src={`https://nftpricefloor.com/_next/image?url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.nftpricefloor%2Fprojects%2Fv1%2F${row.original.slug}.png%3Fversion%3D6&w=256&q=75`} // Replace "URL_TO_YOUR_IMAGE" with the actual URL to your image directory
          alt={row.original.name} // Use the name as alt text for accessibility
          className="object-cover w-[50px] h-[50px]  rounded-sm border-primary border-4 hover:scale-110 transition" // Adjust the size of the image as needed
        />
      </div>
    ),
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
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
    accessorKey: `stats.floorInfo.currentFloor${currency}`,
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
    cell: ({ row }) => (
      <span className="flex justify-center">
        {currency === "Native"
          ? row.original.stats.floorInfo?.currentFloorNative?.toFixed(2)
          : row.original.stats.floorInfo?.currentFloorUsd?.toLocaleString(
              undefined,
              {
                maximumFractionDigits: 0,
                minimumFractionDigits: 0,
              }
            )}
        {currency === "Native" ? (
          <Image alt="logo" src="/svgs/ethereum.svg" width={20} height={20} />
        ) : (
          <Image alt="logo" src="/svgs/dollar.svg" width={20} height={20} />
        )}
      </span>
    ),
  },
  {
    accessorKey: `stats.floorTemporality${currency}.diff${timeRange}`,
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          {`${timeRange} % change`} <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <span
        className={`${
          row.original.stats.floorTemporalityNative?.diff7d < 0
            ? "text-red-500"
            : row.original.stats.floorTemporalityNative?.diff7d > 0
            ? "text-green-500"
            : ""
        } flex justify-center`}
      >
        {row.original.stats.floorTemporalityNative?.diff7d.toFixed(2) === "0.00"
          ? "-"
          : row.original.stats.floorTemporalityNative?.diff7d.toFixed(2) + "%"}
      </span>
    ),
  },
];
