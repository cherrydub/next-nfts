import { z } from "zod";

export const TokenInfoSchema = z
  .object({
    blockchain: z.string().nullable(),
    tokenId: z.string().nullable(),
    contract: z.string().nullable(),
    source: z.string().nullable(),
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
    diff24h: z.number().nullable(),
    diff7d: z.number().nullable(),
    diff14d: z.number().nullable(),
    diff30d: z.number().nullable(),
    diff90d: z.number().nullable(),
  }),
  floorTemporalityNative: z.object({
    diff24h: z.number().nullable(),
    diff7d: z.number().nullable(),
    diff14d: z.number().nullable(),
    diff30d: z.number().nullable(),
    diff90d: z.number().nullable(),
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
  salesTemporalityUsd: z.object({
    lowest: z.record(z.number().nullable()),
    highest: z.record(z.number().nullable()),
    average: z.record(z.number().nullable()),
    volume: z.record(z.number().nullable()),
    count: z.record(z.number().nullable()),
  }),
  salesTemporalityNative: z.object({
    lowest: z.record(z.number().nullable()),
    highest: z.record(z.number().nullable()),
    average: z.record(z.number().nullable()),
    volume: z.record(z.number().nullable()),
    count: z.record(z.number().nullable()),
  }),
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
  textEn: z.string(),
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
  nativeCurrency: z.string(),
  bestPriceUrl: z.string().nullable(),
  updatedAt: z.string(),
  reservoirCollectionId: z.string().nullable(),
  creator: z
    .object({
      name: z.string(),
      slug: z.string(),
    })
    .nullable(),
  parentCollection: CollectionSchema.nullable(),
  subCollection: CollectionSchema.nullable(),
});
