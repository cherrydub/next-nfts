import { z } from "zod";

export const TokenInfoSchema = z
  .object({
    blockchain: z.string(),
    tokenId: z.string(),
    contract: z.string(),
    source: z.string(),
  })
  .nullable();

export const StatsSchema = z.object({
  id: z.number(),
  projectId: z.number(),
  slug: z.string(),
  totalSupply: z.number(),
  listedCount: z.number(),
  totalOwners: z.number(),
  floorCapUsd: z.number().nullable(),
  floorCapNative: z.number().nullable(),
  updatedAt: z.string(),
  nativeCurrency: z.string(),
  floorInfo: z
    .object({
      currentFloorNative: z.number().nullable(),
      currentFloorOrigin: z.string(),
      currentFloorUsd: z.number().nullable(),
      latestFloorTs: z.number(),
      marketplaceSlug: z.string(),
      tokenInfo: TokenInfoSchema,
      nativeCurrency: z.string(),
    })
    .nullable(),
});

//details schema stuff
export const MarketplaceSchema = z.object({
  name: z.string(),
  url: z.string(),
});

export const CollectionSchema = z.object({
  name: z.string(),
  slug: z.string(),
});

export const FloorInfoSchema = z.object({
  currentFloorNative: z.number().nullable(),
  currentFloorUsd: z.number().nullable(),
  blockchain: z.string().optional(), // Make it optional
  tokenId: z.string().optional(),
});

export const DetailsSchema = z.object({
  name: z.string(),
  slug: z.string(),
  ranking: z.number(),
  imageBlur: z.string().nullable(),
  types: z.array(z.string()),
  blockchain: z.string(),
  releaseDate: z.string(),
  totalSupply: z.number(),
  socialMedia: z.array(MarketplaceSchema),
  contract: z.string(),
  textEn: z.string(),
  textEs: z.string(),
  floorPriceNative: z.number(),
  floorPriceUsd: z.number(),
  floorInfo: FloorInfoSchema,
  marketplaces: z.array(MarketplaceSchema),
  bestPriceUrl: z.string(),
  creatorsFee: z.null(),
  creatorsFeePayoutAddress: z.null(),
  mintPriceNative: z.null(),
  mintPriceUsd: z.null(),
  reservoirCollectionId: z.string(),
  nativeCurrency: z.string(),
});

// schema for all collections, each object is a collection
export const ProjectSchema = z.object({
  name: z.string(),
  slug: z.string(),
  ranking: z.number(),
  stats: StatsSchema,
  types: z.array(z.string()),
  blockchain: z.string(),
  bestPriceUrl: z.string(),
  updatedAt: z.string(),
});