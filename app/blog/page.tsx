import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogHero from '@/components/BlogHero';
import BlogGrid from '@/components/BlogGrid';
import { fetchFeaturedPost, fetchPosts } from '@/lib/api';

export default async function Blog() {
  const featuredPost = await fetchFeaturedPost();
  const allPosts = await fetchPosts();
  const gridPosts = allPosts.filter(post => post.id !== featuredPost.id).slice(0, 6);

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
