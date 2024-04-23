import { DetailsSchema, StatsSchema } from "@/lib/validations";
import Image from "next/image";
import React from "react";

export default async function CollectionsPageSlug({ params }: any) {
  const { slug } = params;

  const response = await fetch(
    `https://api.nftpricefloor.com/api/projects/${slug}?qapikey=${process.env.NFT_API_KEY}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const { stats, details } = await response.json();

  // Validate the fetched data against the schema using safeParse
  const statsValidationResult = StatsSchema.safeParse(stats);
  const detailsValidationResult = DetailsSchema.safeParse(details);

  if (!statsValidationResult.success || !detailsValidationResult.success) {
    console.error(
      "Validation error:",
      statsValidationResult.error || detailsValidationResult.error
    );
    return (
      <div>
        <h1>Error: Invalid project data</h1>
        <p>
          {statsValidationResult.error?.message ||
            detailsValidationResult.error?.message}
        </p>
      </div>
    );
  }

  const validatedStats = statsValidationResult.data;
  const validatedDetails = detailsValidationResult.data;

  // Render the validated stats along with additional details

  return (
    <div className="flex-center flex-col container mx-auto p-4">
      <h1 className="text-2xl text-center font-bold">{details.name}</h1>
      <Image
        width={150}
        height={150}
        src={`https://nftpricefloor.com/_next/image?url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.nftpricefloor%2Fprojects%2Fv1%2F${slug}.png%3Fversion%3D6&w=256&q=100`}
        alt={stats.name} // Use the name as alt text for accessibility
        className=" rounded-md mr-2 border" // Adjust the size of the image as needed
      />
      Stats:
      <table className="table-auto border border-collapse w-full mt-4">
        <tbody>
          <tr>
            <td className="border p-2">Total Supply:</td>
            <td className="border p-2">{validatedStats.totalSupply}</td>
          </tr>
          <tr>
            <td className="border p-2">Listed Count:</td>
            <td className="border p-2">{validatedStats.listedCount}</td>
          </tr>
          <tr>
            <td className="border p-2">Total Owners:</td>
            <td className="border p-2">{validatedStats.totalOwners}</td>
          </tr>
          <tr>
            <td className="border p-2">Floor Cap (USD):</td>
            <td className="border p-2">
              {validatedStats.floorCapUsd || "N/A"}
            </td>
          </tr>
          <tr>
            <td className="border p-2">Floor Cap (ETH):</td>
            <td className="border p-2">
              {validatedStats.floorCapNative || "N/A"}
            </td>
          </tr>
          <tr>
            <td className="border p-2">Last Updated:</td>
            <td className="border p-2">
              {new Date(validatedStats.updatedAt).toLocaleDateString()}
            </td>
          </tr>
          {validatedStats.floorInfo && (
            <>
              <tr>
                <td className="border p-2">Current Floor (ETH):</td>
                <td className="border p-2">
                  {validatedStats.floorInfo.currentFloorNative || "N/A"}
                </td>
              </tr>
              <tr>
                <td className="border p-2">Current Floor (USD):</td>
                <td className="border p-2">
                  {validatedStats.floorInfo.currentFloorUsd || "N/A"}
                </td>
              </tr>
              {validatedStats.floorInfo.tokenInfo && (
                <>
                  <tr>
                    <td className="border p-2">Blockchain:</td>
                    <td className="border p-2">
                      {validatedStats.floorInfo.tokenInfo.blockchain}
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-2">Token ID:</td>
                    <td className="border p-2">
                      {validatedStats.floorInfo.tokenInfo.tokenId}
                    </td>
                  </tr>
                </>
              )}
            </>
          )}
        </tbody>
      </table>
      Details
      <table className="table-auto border border-collapse w-full mt-4">
        <tbody>
          <tr>
            <td className="border p-2">Total Supply:</td>
            <td className="border p-2">{validatedDetails.types}</td>
          </tr>
          <tr>
            <td className="border p-2">Listed Count:</td>
            <td className="border p-2">{validatedStats.listedCount}</td>
          </tr>
          <tr>
            <td className="border p-2">Total Owners:</td>
            <td className="border p-2">{validatedStats.totalOwners}</td>
          </tr>
          <tr>
            <td className="border p-2">Floor Cap (USD):</td>
            <td className="border p-2">
              {validatedStats.floorCapUsd || "N/A"}
            </td>
          </tr>
          <tr>
            <td className="border p-2">Floor Cap (Native):</td>
            <td className="border p-2">
              {validatedStats.floorCapNative || "N/A"}
            </td>
          </tr>
          <tr>
            <td className="border p-2">Last Updated:</td>
            <td className="border p-2">
              {new Date(validatedStats.updatedAt).toLocaleDateString()}
            </td>
          </tr>
          {validatedStats.floorInfo && (
            <>
              <tr>
                <td className="border p-2">Current Floor (Native):</td>
                <td className="border p-2">
                  {validatedStats.floorInfo.currentFloorNative || "N/A"}
                </td>
              </tr>
              <tr>
                <td className="border p-2">Current Floor (USD):</td>
                <td className="border p-2">
                  {validatedStats.floorInfo.currentFloorUsd || "N/A"}
                </td>
              </tr>
              {validatedStats.floorInfo.tokenInfo && (
                <>
                  <tr>
                    <td className="border p-2">Blockchain:</td>
                    <td className="border p-2">
                      {validatedStats.floorInfo.tokenInfo.blockchain}
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-2">Token ID:</td>
                    <td className="border p-2">
                      {validatedStats.floorInfo.tokenInfo.tokenId}
                    </td>
                  </tr>
                </>
              )}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
}
