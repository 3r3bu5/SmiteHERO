export interface Build {
  _id: string;
  authorId: number;
  godId: number;
  upvotes: number;
  downvotes: number;
  items: string[];
  mode: number;
}
