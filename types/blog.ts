export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string;
  thumbnail?: string;
  featured?: boolean;
}
