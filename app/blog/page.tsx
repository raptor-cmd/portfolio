import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogHero from '@/components/BlogHero';
import BlogGrid from '@/components/BlogGrid';
import type { BlogPost } from '@/types/blog';

const mockPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Introducción a Next.js 15',
    summary: 'Descubre las nuevas características y mejoras de Next.js 15, incluyendo el App Router y optimizaciones de rendimiento.',
    content: 'Contenido completo del post sobre Next.js 15...',
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

export default function Blog() {
  const featuredPost = mockPosts.find(post => post.featured) || mockPosts[0];
  const gridPosts = mockPosts.filter(post => post.id !== featuredPost.id).slice(0, 6);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="grow">
        <BlogHero post={featuredPost} />
        <BlogGrid posts={gridPosts} />
      </main>
      <Footer />
    </div>
  );
}
