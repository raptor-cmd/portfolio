import type { BlogPost } from "@/types/blog";

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Introducción a Next.js 15',
    summary: 'Descubre las nuevas características y mejoras de Next.js 15, incluyendo el App Router y optimizaciones de rendimiento.',
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
      
      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
    `,
    featured: true
  },
  {
    id: '2',
    title: 'TypeScript Best Practices',
    summary: 'Aprende las mejores prácticas para escribir código TypeScript robusto y mantenible en tus proyectos.',
    content: 'Contenido completo sobre TypeScript...'
  },
  {
    id: '3',
    title: 'Tailwind CSS Avanzado',
    summary: 'Explora técnicas avanzadas de Tailwind CSS para crear diseños personalizados y optimizados.',
    content: 'Contenido completo sobre Tailwind CSS...'
  },
  {
    id: '4',
    title: 'React Server Components',
    summary: 'Entiende cómo funcionan los Server Components en React y cuándo utilizarlos en tus aplicaciones.',
    content: 'Contenido completo sobre React Server Components...'
  },
  {
    id: '5',
    title: 'Optimización de Performance',
    summary: 'Técnicas y estrategias para optimizar el rendimiento de tus aplicaciones web modernas.',
    content: 'Contenido completo sobre optimización...'
  },
  {
    id: '6',
    title: 'Testing en React',
    summary: 'Guía completa para implementar pruebas efectivas en tus aplicaciones React con Jest y Testing Library.',
    content: 'Contenido completo sobre testing...'
  },
  {
    id: '7',
    title: 'State Management con Zustand',
    summary: 'Aprende a gestionar el estado de tus aplicaciones React de forma sencilla con Zustand.',
    content: 'Contenido completo sobre Zustand...'
  }
];

// Helper functions for common operations
export const getFeaturedPost = (): BlogPost => {
  return blogPosts.find(post => post.featured) || blogPosts[0];
};

export const getPostById = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};

export const getRelatedPosts = (excludeId: string, limit: number = 6): BlogPost[] => {
  return blogPosts.filter(post => post.id !== excludeId).slice(0, limit);
};

export const getAllPosts = (): BlogPost[] => {
  return blogPosts;
};
