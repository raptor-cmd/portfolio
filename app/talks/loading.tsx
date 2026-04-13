import Loading from '@/components/Loading';

export default function TalksLoading() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Loading 
        size="lg" 
        text="Cargando charlas..." 
        fullScreen 
      />
    </div>
  );
}
