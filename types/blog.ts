export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string;
  author: string;
  publishedAt: string;
  readingTime: number;
  thumbnail?: string;
  featured?: boolean;
}
