import { Target, Users, RefreshCw, MapPin } from 'lucide-react';

const benefits = [
  {
    icon: Target,
    title: 'Didática Aprovada',
    description: 'Metodologia comprovada que já aprovou centenas de alunos em concursos públicos.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Users,
    title: 'Professores Especializados',
    description: 'Time de professores com vasta experiência em concursos públicos municipais.',
    color: 'from-yellow-500 to-yellow-600',
  },
  {
    icon: RefreshCw,
    title: 'Conteúdo Sempre Atualizado',
    description: 'Material revisado constantemente seguindo as últimas mudanças legislativas.',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: MapPin,
    title: 'Foco em Caraguatatuba',
    description: 'Conteúdo específico e direcionado para o concurso da Câmara Municipal local.',
    color: 'from-purple-500 to-purple-600',
  },
];

export function BenefitsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Por que este curso é a melhor preparação
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Diferenciais que fazem toda a diferença na sua jornada rumo à aprovação
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-5 rounded-full transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-lg">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
