import { 
  fetchPosts, 
  fetchFeaturedPost, 
  fetchPostById, 
  fetchRelatedPosts, 
  fetchPostsByAuthor, 
  fetchRecentPosts 
} from '@/lib/api';
import type { BlogPost } from '@/types/blog';

export const useFeaturedPost = async (): Promise<BlogPost> => {
  return fetchFeaturedPost();
};

export const usePosts = async (limit?: number): Promise<BlogPost[]> => {
  const posts = await fetchPosts();
  return limit ? posts.slice(0, limit) : posts;
};

export const usePostById = async (id: string): Promise<BlogPost | undefined> => {
  return fetchPostById(id);
};

export const useRelatedPosts = async (excludeId: string, limit: number = 3): Promise<BlogPost[]> => {
  return fetchRelatedPosts(excludeId, limit);
};

export const usePostsByAuthor = async (author: string): Promise<BlogPost[]> => {
  return fetchPostsByAuthor(author);
};

export const useRecentPosts = async (limit: number = 5): Promise<BlogPost[]> => {
  return fetchRecentPosts(limit);
};
