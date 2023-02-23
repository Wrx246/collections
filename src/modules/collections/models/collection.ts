export interface CollectionType {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  theme: string;
  createdAt: string;
  updatedAt: string;
  userId: number;
  author?: boolean;
  comment?: boolean;
  additionalInfo?: boolean;
  publication?: boolean;
  foundation?: boolean;
  price?: boolean;
  reward?: boolean;
  score?: boolean;
  favorite?: boolean;
  country?: boolean;
  language?: boolean;
  shortName?: boolean;
  status?: boolean;
  terminated?: boolean;
  original?: boolean;
}
