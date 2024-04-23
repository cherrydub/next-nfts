import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CollectionItemDetails, Stats } from "@/lib/types";
import DollarIcon from "./icons/dollar-icon";
import EthIcon from "./icons/eth-icon";

type CollectionTableProps = {
  validatedDetails: CollectionItemDetails;
  validatedStats: Stats;
};

export default function CollectionTable({
  validatedDetails,
  validatedStats,
}: CollectionTableProps) {
  return (
    <div>
      <Table className="min-w-[50vw]">
        <TableCaption></TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead></TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Ranking:</TableCell>
            <TableCell>#{validatedDetails.ranking}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Total Supply:</TableCell>
            <TableCell>{validatedStats.totalSupply.toLocaleString()}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Listed Count:</TableCell>
            <TableCell>{validatedStats.listedCount.toLocaleString()}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Total Owners:</TableCell>
            <TableCell>{validatedStats.totalOwners.toLocaleString()}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Floor Cap (USD):</TableCell>
            <TableCell>
              <span className="flex">
                <DollarIcon />
                {validatedStats.floorCapUsd?.toLocaleString() || "N/A"}
              </span>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Floor Cap (ETH):</TableCell>
            <TableCell>
              <span className="flex">
                <EthIcon />
                {validatedStats.floorCapNative?.toLocaleString() || "N/A"}
              </span>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Last Updated:</TableCell>
            <TableCell>
              {new Date(validatedStats.updatedAt).toLocaleDateString()}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Types:</TableCell>
            <TableCell>
              <ul className="">
                {validatedDetails.types.map((type, index) => (
                  <li key={index}>{type}</li>
                ))}
              </ul>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Marketplaces:</TableCell>
            <TableCell>
              <ul className="">
                {validatedDetails.marketplaces.map((marketplace, index) => (
                  <li key={index}>
                    <a
                      href={marketplace.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {marketplace.name}
                    </a>
                  </li>
                ))}
              </ul>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Social Media:</TableCell>
            <TableCell>
              <ul>
                {validatedDetails.socialMedia.map((platform, index) => (
                  <li key={index}>
                    <a
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {platform.name}
                    </a>
                  </li>
                ))}
              </ul>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Release date:</TableCell>
            <TableCell>{validatedDetails.releaseDate}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
