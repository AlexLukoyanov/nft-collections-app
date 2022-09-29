export interface Item {
  name: string;
  price_eth: number;
  price_usd: number;
  image: string;
  item_url: string;
}

export interface INFTCollection {
  creator_name: string;
  creator_pic: string;
  collection_url: string;
  description: string;
  items: Item[];
  id: string;
}
