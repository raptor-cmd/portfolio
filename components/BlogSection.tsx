import Link from 'next/link';
import Image from 'next/image';
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
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Blog</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Artículo destacado */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="w-full h-48 bg-linear-to-br from-blue-400 to-purple-600"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {featuredPost.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {featuredPost.summary}
              </p>
              <Link
                href={`/blog/${featuredPost.id}`}
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                Leer más
              </Link>
            </div>
          </div>

          {/* Lista de posts */}
          <div className="space-y-6">
            {regularPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col sm:flex-row">
                <div className="w-full sm:w-32 h-32 bg-linear-to-br from-indigo-400 to-pink-600"></div>
                <div className="p-4 flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {post.summary}
                  </p>
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium"
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
