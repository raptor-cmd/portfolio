import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Mock data
const projects = [
  { id: 1, title: 'Project Alpha', description: 'Innovative web solution' },
  { id: 2, title: 'Project Beta', description: 'Mobile app development' },
  { id: 3, title: 'Project Gamma', description: 'Data analytics platform' },
  { id: 4, title: 'Project Delta', description: 'E-commerce solution' },
];

const talks = [
  {
    id: 1,
    title: 'The Future of Web Development',
    summary: 'Exploring emerging technologies and trends in web development, including AI integration and modern frameworks.',
  },
  {
    id: 2,
    title: 'Building Scalable Applications',
    summary: 'Best practices for creating applications that can grow with your business and handle increasing user demands.',
  },
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="grow">
        {/* About me Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-card rounded-lg p-12 shadow-sm border">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left column - Profile image */}
              <div className="flex justify-center md:justify-start">
                <a
                  href="#contact"
                  className="inline-flex w-full h-64 rounded-lg bg-linear-to-br from-violet-500 via-pink-500 to-orange-400 items-center justify-center transition-transform duration-300 hover:scale-105"
                >
                  <span className="text-white font-semibold text-lg">Profile</span>
                </a>
              </div>
              
              {/* Right column - About content */}
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold text-foreground mb-4">About me</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I'm a passionate web developer with expertise in modern technologies. 
                  I love creating intuitive user experiences and solving complex problems. 
                  When I'm not coding, you can find me exploring new frameworks or contributing to open source projects.
                </p>
                <a
                  href="#contact"
                  className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
                >
                  Contactar
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="bg-card rounded-lg p-4 shadow-sm border hover:shadow-md transition-shadow">
                <a
                  href="#"
                  className="inline-flex w-full h-32 bg-linear-to-br from-emerald-400 via-cyan-500 to-blue-600 rounded-md mb-3 items-center justify-center transition-transform duration-300 hover:scale-105"
                >
                  <span className="text-white font-medium text-sm">{project.title}</span>
                </a>
                <h3 className="font-semibold text-foreground mb-1">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Talks Section */}
        <section className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">Talks</h2>
          <div className="space-y-6">
            {talks.map((talk) => (
              <div key={talk.id} className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Thumbnail */}
                  <div className="shrink-0">
                    <a
                      href="#"
                      className="inline-flex w-full md:w-32 h-24 bg-linear-to-br from-rose-400 via-fuchsia-500 to-indigo-600 rounded-md items-center justify-center transition-transform duration-300 hover:scale-105"
                    >
                      <span className="text-white font-medium text-xs">Talk</span>
                    </a>
                  </div>
                  
                  {/* Content */}
                  <div className="grow">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{talk.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{talk.summary}</p>
                    <a
                      href="#"
                      className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors text-sm"
                    >
                      Ver charla
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
