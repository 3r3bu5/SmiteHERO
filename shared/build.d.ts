import { Item } from "./item";

export interface Build {
  _id: string;
  authorId: number;
  godId: number;
  upvotes: number;
  downvotes: number;
  items: Item[];
  mode: number;
}
