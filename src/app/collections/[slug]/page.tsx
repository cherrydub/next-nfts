import { DetailsSchema, StatsSchema } from "@/lib/validations";
import Image from "next/image";
import React from "react";
import { singleCollection } from "../../../../public/data";
import CollectionTable from "@/components/collection-table";

export default async function CollectionsPageSlug({ params }: any) {
  const { slug } = params;

  // const response = await fetch(
  //   `https://api.nftpricefloor.com/api/projects/${slug}?qapikey=${process.env.NFT_API_KEY}`
  // );
  // if (!response.ok) {
  //   throw new Error("Network response was not ok");
  // }

  // const { stats, details } = await response.json();

  const { stats, details } = singleCollection;

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
      <h1 className="text-2xl text-center font-bold">
        {validatedDetails.name}
      </h1>
      <Image
        width={150}
        height={150}
        src={`https://nftpricefloor.com/_next/image?url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.nftpricefloor%2Fprojects%2Fv1%2F${slug}.png%3Fversion%3D6&w=256&q=100`}
        alt={validatedDetails.name} // Use the name as alt text for accessibility
        className=" rounded-md mr-2 border" // Adjust the size of the image as needed
      />
      <CollectionTable
        validatedStats={validatedStats}
        validatedDetails={validatedDetails}
      />
    </div>
  );
}
