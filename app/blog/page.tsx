import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogHero from '@/components/BlogHero';
import BlogGrid from '@/components/BlogGrid';
import { getFeaturedPost, getAllPosts } from '@/data/blogPosts';

export default function Blog() {
  const featuredPost = getFeaturedPost();
  const gridPosts = getAllPosts().filter(post => post.id !== featuredPost.id).slice(0, 6);

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
