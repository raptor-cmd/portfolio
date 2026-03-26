import Link from 'next/link';

interface NotFoundProps {
  type?: 'post' | 'page';
  resource?: string;
}

export default function NotFound({ type = 'post', resource = 'Artículo' }: NotFoundProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="mb-8">
            <h1 className="text-6xl font-bold text-muted-foreground mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {resource} no encontrado
            </h2>
            <p className="text-muted-foreground mb-8">
              El {type === 'post' ? 'artículo de blog' : 'página'} que buscas no existe o ha sido eliminado.
            </p>
          </div>
          
          <div className="space-y-4">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Ver todos los artículos
            </Link>
            
            <Link
              href="/"
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
