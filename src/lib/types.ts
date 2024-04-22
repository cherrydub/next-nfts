export type Project = {
  name: string;
  slug: string;
  ranking: number;
  imageBlur: null | string;
  stats: Stats;
  creator: Creator | null;
  parentCollection: Creator | null;
  subCollection: Creator | null;
  types: Type[];
  blockchain: Blockchain;
  nativeCurrency: NativeCurrency;
  bestPriceUrl: null | string;
  updatedAt: Date;
  reservoirCollectionId: null | string;
};

export enum Blockchain {
  Arbitrum = "arbitrum",
  Base = "base",
  Binance = "binance",
  Ethereum = "ethereum",
  Optimism = "optimism",
  Polygon = "polygon",
}

export type Creator = {
  name: string;
  slug: string;
};

export enum NativeCurrency {
  Bnb = "bnb",
  Empty = "",
  Eth = "eth",
  Matic = "matic",
}

export type Stats = {
  id: number;
  projectId: number;
  slug: string;
  totalSupply: number;
  listedCount: number;
  totalOwners: number;
  floorInfo: FloorInfo;
  floorCapUsd: number | null;
  floorCapNative: number | null;
  floorTemporalityUsd: FloorTemporality;
  floorTemporalityNative: FloorTemporality;
  salesTemporalityUsd: SalesTemporality;
  salesTemporalityNative: SalesTemporality;
  updatedAt: Date;
  nativeCurrency: NativeCurrency;
};

export type FloorInfo = {
  currentFloorNative: number | null;
  currentFloorOrigin: CurrentFloorOrigin;
  currentFloorUsd: number | null;
  latestFloorTs: number;
  marketplaceSlug: string;
  tokenInfo: TokenInfo | null;
  nativeCurrency: NativeCurrency;
};

export enum CurrentFloorOrigin {
  Alienswap = "alienswap",
  Blur = "blur",
  CaviarSh = "caviar.sh",
  Coinbase = "coinbase",
  Cryptopunks = "cryptopunks",
  Element = "element",
  Empty = "",
  FirstmateCollectibleAvatars = "firstmate collectible avatars",
  GodidIo = "godid.io",
  KaikaiKikiMarketplace = "kaikai kiki marketplace",
  Looksrare = "looksrare",
  MagicEden = "magic eden",
  MarketValeriagamesCOM = "market.valeriagames.com",
  MarketplaceRcaxIo = "marketplace.rcax.io",
  MintifyXyz = "mintify.xyz",
  Nftx = "nftx",
  NftxIo = "nftx.io",
  Okx = "okx",
  OkxCOM = "okx.com",
  Opensea = "opensea",
  Rarible = "rarible",
  RaribleCOM = "rarible.com",
  ReservoirNftExplorer = "reservoir nft explorer",
  Sudoswap = "sudoswap",
  SudoswapXyz = "sudoswap.xyz",
  Wondoria = "wondoria",
  X2Y2 = "x2y2",
}

export type TokenInfo = {
  blockchain: Blockchain;
  tokenId: string;
  contract: string;
  source: CurrentFloorOrigin;
};

export type FloorTemporality = {
  diff24h: number | null;
  diff7d: number | null;
  diff14d: number | null;
  diff30d: number | null;
  diff90d: number | null;
};

export type SalesTemporality = {
  lowest: { [key: string]: number | null };
  highest: { [key: string]: number | null };
  average: { [key: string]: number | null };
  volume: { [key: string]: number | null };
  count: { [key: string]: number | null };
};

export enum Type {
  Art = "art",
  Avatar = "avatar",
  Gaming = "gaming",
  Historical = "historical",
  Metaverse = "metaverse",
  Utility = "utility",
}

// CollectionItemDetails not just the general preview details

export type CollectionItem = {
  stats: Stats;
  details: CollectionItemDetails;
};

export type CollectionItemDetails = {
  name: string;
  slug: string;
  ranking: number;
  imageBlur: null;
  creator: null;
  parentCollection: Collection;
  subCollection: Collection;
  types: string[];
  blockchain: string;
  releaseDate: Date;
  totalSupply: number;
  socialMedia: Marketplace[];
  contract: string;
  textEn: string;
  textEs: null;
  floorPriceNative: number;
  floorPriceUsd: number;
  floorInfo: FloorInfo;
  marketplaces: Marketplace[];
  bestPriceUrl: string;
  creatorsFee: null;
  creatorsFeePayoutAddress: null;
  mintPriceNative: null;
  mintPriceUsd: null;
  reservoirCollectionId: string;
  nativeCurrency: string;
};

export type Marketplace = {
  name: string;
  url: string;
};

export type Collection = {
  name: string;
  slug: string;
};
