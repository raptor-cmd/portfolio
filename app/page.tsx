import Header from '@/components/Header';
import AboutSection from '@/components/AboutSection';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow">
        <AboutSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}
