import Link from 'next/link';
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
  }
];

export default function BlogSection() {
  const featuredPost = mockPosts.find(post => post.featured) || mockPosts[0];
  const regularPosts = mockPosts.filter(post => !post.featured).slice(0, 3);

  return (
    <section className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Blog</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Artículo destacado */}
          <div className="bg-card rounded-lg shadow-lg overflow-hidden flex flex-col h-full relative group">
            <div className="w-full h-48 bg-linear-to-br from-blue-400 to-purple-600 transition-all duration-500 group-hover:h-full absolute top-0 left-0"></div>
            <div className="relative z-10 p-6 flex flex-col h-full justify-end opacity-100 group-hover:opacity-0 transition-opacity duration-300">
              <h3 className="text-xl font-bold text-card-foreground mb-3">
                {featuredPost.title}
              </h3>
              <p className="text-muted-foreground mb-4 line-clamp-3">
                {featuredPost.summary}
              </p>
            </div>
            <div className="absolute inset-0 z-20 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                {featuredPost.title}
              </h3>
              <p className="text-white/90 mb-8 text-center line-clamp-3">
                {featuredPost.summary}
              </p>
              <Link
                href={`/blog/${featuredPost.id}`}
                className="inline-flex items-center text-white bg-white/20 hover:bg-white/30 backdrop-blur-sm px-6 py-3 rounded-full font-medium transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
              >
                Leer más
              </Link>
            </div>
          </div>

          {/* Lista de posts */}
          <div className="space-y-6">
            {regularPosts.map((post) => (
              <div key={post.id} className="bg-card rounded-lg shadow-md overflow-hidden flex flex-col sm:flex-row">
                <div className="w-full sm:w-32 h-32 bg-linear-to-br from-indigo-400 to-pink-600 transition-transform duration-300 hover:scale-105"></div>
                <div className="p-4 flex-1">
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                    {post.summary}
                  </p>
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium"
                  >
                    Leer
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
