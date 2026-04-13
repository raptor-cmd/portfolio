import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NotFound from "@/components/NotFound";

// Mock data - same as in about page
const projects = [
  { 
    id: 1, 
    title: 'Project Alpha', 
    description: 'Innovative web solution',
    details: 'A comprehensive web application built with modern technologies including React, Node.js, and MongoDB. Features include real-time collaboration, advanced analytics, and responsive design.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/example/project-alpha',
    demo: 'https://demo.example.com/project-alpha'
  },
  { 
    id: 2, 
    title: 'Project Beta', 
    description: 'Mobile app development',
    details: 'Cross-platform mobile application developed with React Native. Includes offline capabilities, push notifications, and seamless integration with backend services.',
    technologies: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
    github: 'https://github.com/example/project-beta',
    demo: 'https://demo.example.com/project-beta'
  },
  { 
    id: 3, 
    title: 'Project Gamma', 
    description: 'Data analytics platform',
    details: 'Enterprise-grade analytics platform for processing large datasets. Features real-time data visualization, custom dashboards, and machine learning integration.',
    technologies: ['Python', 'TensorFlow', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/example/project-gamma',
    demo: 'https://demo.example.com/project-gamma'
  },
  { 
    id: 4, 
    title: 'Project Delta', 
    description: 'E-commerce solution',
    details: 'Full-featured e-commerce platform with inventory management, payment processing, and customer analytics. Optimized for high traffic and scalability.',
    technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis'],
    github: 'https://github.com/example/project-delta',
    demo: 'https://demo.example.com/project-delta'
  },
];

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const projectId = parseInt(id);
  
  const project = projects.find(p => p.id === projectId);
  
  if (!project) {
    return <NotFound type="page" resource="Proyecto" />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <div className="w-full h-64 md:h-96 bg-linear-to-br from-emerald-400 via-cyan-500 to-blue-600 relative">
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-background/80" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {project.title}
              </h1>
              <p className="text-white/90 text-lg">{project.description}</p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Project Details */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Sobre el Proyecto</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {project.details}
            </p>
            
            {/* Technologies */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Tecnologías Utilizadas</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Links */}
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium"
              >
                Ver Código
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-border rounded-md hover:bg-muted transition-colors font-medium"
              >
                Ver Demo
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
