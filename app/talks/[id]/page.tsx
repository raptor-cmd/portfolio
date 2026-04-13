import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NotFound from "@/components/NotFound";

// Mock data - same as in about page
const talks = [
  {
    id: 1,
    title: 'The Future of Web Development',
    summary: 'Exploring emerging technologies and trends in web development, including AI integration and modern frameworks.',
    details: 'Una exploración profunda de las tecnologías emergentes que están moldeando el futuro del desarrollo web. Cubrimos desde la integración de IA en el flujo de trabajo de desarrollo hasta los nuevos frameworks que están revolucionando la forma en que construimos aplicaciones web.',
    topics: ['AI Integration', 'Modern Frameworks', 'WebAssembly', 'Edge Computing'],
    duration: '45 minutos',
    venue: 'Tech Conference 2024',
    date: '15 de marzo de 2024',
    slides: 'https://slides.example.com/future-web',
    video: 'https://youtube.com/watch?v=example'
  },
  {
    id: 2,
    title: 'Building Scalable Applications',
    summary: 'Best practices for creating applications that can grow with your business and handle increasing user demands.',
    details: 'Análisis completo de las mejores prácticas para construir aplicaciones escalables. Desde la arquitectura microservicios hasta las estrategias de base de datos y caching, esta charla cubre todos los aspectos necesarios para manejar el crecimiento exponencial.',
    topics: ['Microservices', 'Database Design', 'Caching Strategies', 'Load Balancing'],
    duration: '60 minutos',
    venue: 'DevOps Summit 2024',
    date: '20 de abril de 2024',
    slides: 'https://slides.example.com/scalable-apps',
    video: 'https://youtube.com/watch?v=example2'
  },
];

export default async function TalkPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const talkId = parseInt(id);
  
  const talk = talks.find(t => t.id === talkId);
  
  if (!talk) {
    return <NotFound type="page" resource="Charla" />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <div className="w-full h-64 md:h-96 bg-linear-to-br from-rose-400 via-fuchsia-500 to-indigo-600 relative">
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-background/80" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {talk.title}
              </h1>
              <p className="text-white/90 text-lg">{talk.summary}</p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Talk Details */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Sobre la Charla</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {talk.details}
            </p>
            
            {/* Talk Info */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="font-semibold text-foreground mb-4">Información del Evento</h3>
                <div className="space-y-2 text-sm">
                  <p><span className="font-medium">Duración:</span> {talk.duration}</p>
                  <p><span className="font-medium">Evento:</span> {talk.venue}</p>
                  <p><span className="font-medium">Fecha:</span> {talk.date}</p>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="font-semibold text-foreground mb-4">Temas Cubiertos</h3>
                <div className="flex flex-wrap gap-2">
                  {talk.topics.map((topic, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Links */}
            <div className="flex gap-4">
              <a
                href={talk.slides}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium"
              >
                Ver Slides
              </a>
              <a
                href={talk.video}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-border rounded-md hover:bg-muted transition-colors font-medium"
              >
                Ver Video
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
