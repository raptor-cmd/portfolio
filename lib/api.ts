import type { BlogPost } from '@/types/blog';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

// Obtener todos los posts desde la API
export async function fetchPosts(): Promise<BlogPost[]> {
  const response = await fetch(`${API_BASE_URL}/posts`);
  if (!response.ok) {
    throw new Error('Error al obtener los posts');
  }
  return response.json();
}

// Obtener un post por ID desde la API
export async function fetchPostById(id: string): Promise<BlogPost | undefined> {
  const posts = await fetchPosts();
  return posts.find(post => post.id === id);
}

// Obtener el post destacado desde la API
export async function fetchFeaturedPost(): Promise<BlogPost> {
  const posts = await fetchPosts();
  return posts.find(post => post.featured) || posts[0];
}

// Obtener posts relacionados (excluyendo uno específico)
export async function fetchRelatedPosts(excludeId: string, limit: number = 6): Promise<BlogPost[]> {
  const posts = await fetchPosts();
  return posts.filter(post => post.id !== excludeId).slice(0, limit);
}

// Obtener posts por autor
export async function fetchPostsByAuthor(author: string): Promise<BlogPost[]> {
  const posts = await fetchPosts();
  return posts.filter(post => post.author === author);
}

// Obtener posts recientes
export async function fetchRecentPosts(limit: number = 5): Promise<BlogPost[]> {
  const posts = await fetchPosts();
  return posts
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
}
