import Loading from '@/components/Loading';

export default function ProjectsLoading() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Loading 
        size="lg" 
        text="Cargando proyectos..." 
        fullScreen 
      />
    </div>
  );
}
