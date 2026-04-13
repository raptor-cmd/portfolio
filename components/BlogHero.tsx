import Link from 'next/link';
import type { BlogPost } from '@/types/blog';

interface BlogHeroProps {
  post: BlogPost;
}

export default function BlogHero({ post }: BlogHeroProps) {
  return (
    <section className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-1 lg:order-1">
            <Link
              href={`/blog/${post.id}`}
              className="inline-flex w-full h-96 bg-linear-to-br from-purple-400 to-indigo-600 rounded-lg shadow-lg items-center justify-center transition-transform duration-300 hover:scale-105"
            >
            </Link>
          </div>
          <div className="order-2 lg:order-2">
            <h1 className="text-4xl font-bold text-foreground mb-4">{post.title}</h1>
            <div className="space-y-4 text-muted-foreground mb-6">
              <p>{post.summary}</p>
              <p>
                Descubre en este artículo las mejores prácticas y técnicas avanzadas 
                para llevar tus habilidades de desarrollo al siguiente nivel. 
                Aprenderás conceptos fundamentales y aplicaciones prácticas que 
                puedes implementar en tus proyectos.
              </p>
            </div>
            <Link
              href={`/blog/${post.id}`}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 transition-colors"
            >
              Leer más
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
