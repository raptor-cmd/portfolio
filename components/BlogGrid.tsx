import Link from 'next/link';
import type { BlogPost } from '@/types/blog';

interface BlogGridProps {
  posts: BlogPost[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
  return (
    <section className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-card rounded-lg shadow-md overflow-hidden">
              <div className="w-full h-48 bg-linear-to-br from-cyan-400 to-blue-600 transition-transform duration-300 hover:scale-105"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-3">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {post.summary}
                </p>
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                >
                  Leer
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
