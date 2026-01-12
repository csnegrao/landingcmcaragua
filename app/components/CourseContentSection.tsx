import { BookOpen, Video, FileCheck, Headphones, Clock, Award } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Material Didático Completo',
    description: 'PDFs, apostilas e resumos de todas as disciplinas do edital',
  },
  {
    icon: Video,
    title: '+200 Videoaulas',
    description: 'Aulas gravadas com os melhores professores, disponíveis 24/7',
  },
  {
    icon: FileCheck,
    title: 'Simulados Ilimitados',
    description: 'Questões atualizadas e simulados no estilo da banca examinadora',
  },
  {
    icon: Headphones,
    title: 'Suporte Dedicado',
    description: 'Tire suas dúvidas diretamente com os professores',
  },
  {
    icon: Clock,
    title: 'Acesso Até a Prova',
    description: 'Estude no seu ritmo com acesso garantido até o dia da prova',
  },
  {
    icon: Award,
    title: 'Certificado de Conclusão',
    description: 'Receba certificado ao completar o curso preparatório',
  },
];

export function CourseContentSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            O que você vai encontrar no curso
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Uma preparação completa e estruturada para você alcançar a aprovação
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
