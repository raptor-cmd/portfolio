import Loading from '@/components/Loading';

export default function AboutLoading() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Loading 
        size="lg" 
        text="Cargando información..." 
        fullScreen 
      />
    </div>
  );
}
