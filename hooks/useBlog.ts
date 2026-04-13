import { blogPosts, getFeaturedPost, getPostById, getRelatedPosts, getAllPosts } from '@/data/blogPosts';
import type { BlogPost } from '@/types/blog';

export const useFeaturedPost = (): BlogPost => {
  return getFeaturedPost();
};

export const usePosts = (limit?: number): BlogPost[] => {
  const posts = getAllPosts();
  return limit ? posts.slice(0, limit) : posts;
};

export const usePostById = (id: string): BlogPost | undefined => {
  return getPostById(id);
};

export const useRelatedPosts = (excludeId: string, limit: number = 3): BlogPost[] => {
  return getRelatedPosts(excludeId, limit);
};

export const usePostsByAuthor = (author: string): BlogPost[] => {
  return blogPosts.filter(post => post.author === author);
};

export const useRecentPosts = (limit: number = 5): BlogPost[] => {
  return blogPosts
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
};
