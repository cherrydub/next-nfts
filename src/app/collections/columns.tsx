"use client";
import { Button } from "@/components/ui/button";
import { ProjectSchema } from "@/lib/validations";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

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
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "stats.floorInfo.currentFloorNative",
    header: "Floor Price",
  },
];
