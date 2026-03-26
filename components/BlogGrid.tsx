import Link from 'next/link';
import type { BlogPost } from '@/types/blog';

interface BlogGridProps {
  posts: BlogPost[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="w-full h-48 bg-linear-to-br from-cyan-400 to-blue-600 transition-transform duration-300 hover:scale-105"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.summary}
                </p>
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
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
