import { z } from "zod";

export const TokenInfoSchema = z
  .object({
    blockchain: z.string().nullable(), // Make it nullable
    tokenId: z.string().nullable(), // Make it nullable
    contract: z.string().nullable(), // Make it nullable
    source: z.string().nullable(), // Make it nullable
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
  floorTemporalityUsd: z.object({
    diff24h: z.number().nullable(), // Make it nullable
    diff7d: z.number().nullable(), // Make it nullable
    diff14d: z.number().nullable(), // Make it nullable
    diff30d: z.number().nullable(), // Make it nullable
    diff90d: z.number().nullable(), // Make it nullable
  }),
  floorTemporalityNative: z.object({
    diff24h: z.number().nullable(), // Make it nullable
    diff7d: z.number().nullable(), // Make it nullable
    diff14d: z.number().nullable(), // Make it nullable
    diff30d: z.number().nullable(), // Make it nullable
    diff90d: z.number().nullable(), // Make it nullable
  }),
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
  blockchain: z.string().optional(),
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
  socialMedia: z.array(MarketplaceSchema).nullable(),
  contract: z.string(),
  textEn: z.string().nullable(),
  textEs: z.string().nullable(),
  floorPriceNative: z.number(),
  floorPriceUsd: z.number(),
  floorInfo: FloorInfoSchema,
  marketplaces: z.array(MarketplaceSchema),
  bestPriceUrl: z.string(),
  creatorsFee: z.null(),
  creatorsFeePayoutAddress: z.null(),
  mintPriceNative: z.number().nullable(),
  mintPriceUsd: z.number().nullable(),
  reservoirCollectionId: z.string(),
  nativeCurrency: z.string(),
});

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
