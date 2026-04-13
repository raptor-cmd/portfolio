
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NotFound from "@/components/NotFound";
import { getPostById, getRelatedPosts } from "@/data/blogPosts";

export default async function BlogPost({ params } : { params: Promise<{ slug: string }> }) {
  const {slug} = await params;
  
  // Find the post by slug (using id as slug for this example)
  const post = getPostById(slug);
  const relatedPosts = getRelatedPosts(slug);

  // If post doesn't exist, show NotFound component
  if (!post) {
    return <NotFound type="post" resource="Artículo" />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <div className="w-full h-64 md:h-96 bg-linear-to-br from-cyan-400 to-blue-600 relative">
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-background/80" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Title and Metadata */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {post.title}
            </h1>
            <div className="text-muted-foreground space-y-2">
              <p className="text-sm">Por Autor Nombre</p>
              <p className="text-sm">15 de marzo de 2024</p>
            </div>
          </div>

          {/* Blog Content */}
          <div className="prose prose-neutral dark:prose-invert max-w-none mb-16">
            {post.content.split('\n\n').map((paragraph: string, index: number) => (
              <p key={index} className="mb-4 text-base leading-relaxed">
                {paragraph.trim()}
              </p>
            ))}
          </div>

          {/* Related Posts Section */}
          <section>
            <h2 className="text-2xl font-bold mb-8">Artículos Relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((post) => (
                <article key={post.id} className="flex gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                  {/* Thumbnail with gradient */}
                  <a 
                    href={`/blog/${post.id}`}
                    className="inline-flex w-20 h-20 bg-linear-to-br from-cyan-400 to-blue-600 rounded-md shrink-0 items-center justify-center transition-transform duration-300 hover:scale-105"
                  >
                  </a>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2 line-clamp-1">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                      {post.summary}
                    </p>
                    <a 
                      href={`/blog/${post.id}`}
                      className="text-sm text-primary hover:underline font-medium"
                    >
                      Leer más →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Footer - Same as homepage */}
      <Footer />
    </div>
  );
}
