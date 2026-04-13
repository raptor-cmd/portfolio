import Link from 'next/link';
import { blogPosts, getFeaturedPost } from '@/data/blogPosts';

export default function BlogSection() {
  const featuredPost = getFeaturedPost();
  const regularPosts = blogPosts.filter(post => !post.featured).slice(0, 3);

  return (
    <section className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Blog</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Artículo destacado */}
          <div className="bg-card rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
            <Link
              href={`/blog/${featuredPost.id}`}
              className="inline-flex w-full h-72 bg-linear-to-br from-blue-400 to-purple-600 items-center justify-center transition-transform duration-300 hover:scale-105"
            >
            </Link>
            <div className="p-4 flex-1 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-card-foreground mb-3">
                {featuredPost.title}
              </h3>
              <p className="text-muted-foreground mb-4 line-clamp-3">
                {featuredPost.summary}
              </p>
              <Link
                href={`/blog/${featuredPost.id}`}
                className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium"
              >
                Leer
              </Link>
            </div>
          </div>

          {/* Lista de posts */}
          <div className="space-y-6">
            {regularPosts.map((post) => (
              <div key={post.id} className="bg-card rounded-lg shadow-md overflow-hidden flex flex-col sm:flex-row">
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex w-full sm:w-32 h-32 bg-linear-to-br from-indigo-400 to-pink-600 items-center justify-center transition-transform duration-300 hover:scale-105"
                >
                </Link>
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
