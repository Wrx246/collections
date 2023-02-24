export interface ItemType {
  id: number;
  title: string;
  tags: string[];
  likes: number[];
  createdAt: string;
  updatedAt: string;
  collectionId: number;
  author?: string;
  comment?: string;
  additionalInfo?: string;
  publication?: string;
  foundation?: string;
  price?: number;
  reward?: number;
  score?: number;
  favorite?: boolean;
  country?: string;
  language?: string;
  shortName?: string;
  status?: boolean;
  terminated?: string;
  original?: boolean;
}
