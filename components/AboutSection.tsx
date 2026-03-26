import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="w-full h-96 bg-linear-to-br from-green-400 to-blue-600 rounded-lg shadow-lg"></div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About me</h2>
            <div className="space-y-4 text-gray-600 mb-6">
              <p>
                Soy un desarrollador apasionado por crear experiencias web increíbles. 
                Con años de experiencia en el desarrollo de aplicaciones modernas, 
                me especializo en tecnologías frontend y backend.
              </p>
              <p>
                Mi enfoque se centra en escribir código limpio, mantenible y escalable. 
                Disfruto aprendiendo nuevas tecnologías y aplicando las mejores prácticas 
                en cada proyecto que desarrollo.
              </p>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Ver más
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
