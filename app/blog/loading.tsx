import Loading from '@/components/Loading';

export default function BlogLoading() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Loading 
        size="lg" 
        text="Cargando artículos..." 
        fullScreen 
      />
    </div>
  );
}
