import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { BlogPost } from "@/types/blog";
import Link from "next/link";

// Mock data - in a real app, this would come from an API
const mockPost: BlogPost = {
  id: "1",
  title: "Título del Artículo de Blog",
  summary: "Este es un artículo increíble sobre desarrollo web y las mejores prácticas modernas",
  content: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
    
    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
    
    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
  `,
  thumbnail: "/placeholder.jpg",
  featured: true
};

const mockRelatedPosts: BlogPost[] = [
  {
    id: "2",
    title: "Artículo Relacionado 1",
    summary: "Breve descripción del artículo relacionado",
    content: "",
    thumbnail: "/placeholder.jpg"
  },
  {
    id: "3",
    title: "Artículo Relacionado 2",
    summary: "Breve descripción del artículo relacionado",
    content: "",
    thumbnail: "/placeholder.jpg"
  },
  {
    id: "4",
    title: "Artículo Relacionado 3",
    summary: "Breve descripción del artículo relacionado",
    content: "",
    thumbnail: "/placeholder.jpg"
  },
  {
    id: "5",
    title: "Artículo Relacionado 4",
    summary: "Breve descripción del artículo relacionado",
    content: "",
    thumbnail: "/placeholder.jpg"
  },
  {
    id: "6",
    title: "Artículo Relacionado 5",
    summary: "Breve descripción del artículo relacionado",
    content: "",
    thumbnail: "/placeholder.jpg"
  },
  {
    id: "7",
    title: "Artículo Relacionado 6",
    summary: "Breve descripción del artículo relacionado",
    content: "",
    thumbnail: "/placeholder.jpg"
  }
];

export default function BlogPost() {
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
              {mockPost.title}
            </h1>
            <div className="text-muted-foreground space-y-2">
              <p className="text-sm">Por Autor Nombre</p>
              <p className="text-sm">15 de marzo de 2024</p>
            </div>
          </div>

          {/* Blog Content */}
          <div className="prose prose-neutral dark:prose-invert max-w-none mb-16">
            {mockPost.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-base leading-relaxed">
                {paragraph.trim()}
              </p>
            ))}
          </div>

          {/* Related Posts Section */}
          <section>
            <h2 className="text-2xl font-bold mb-8">Artículos Relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockRelatedPosts.map((post) => (
                <article key={post.id} className="flex gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                  {/* Thumbnail with gradient */}
                  <div className="w-20 h-20 bg-linear-to-br from-cyan-400 to-blue-600 rounded-md shrink-0 transition-transform duration-300 hover:scale-105"></div>
                  
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
