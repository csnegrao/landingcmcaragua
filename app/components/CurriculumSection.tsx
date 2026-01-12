import { Check } from 'lucide-react';

const subjects = [
  {
    category: 'Conhecimentos Básicos',
    items: [
      'Língua Portuguesa',
      'Matemática e Raciocínio Lógico',
      'Informática Básica',
      'Atualidades e Conhecimentos Gerais',
    ],
  },
  {
    category: 'Conhecimentos Específicos',
    items: [
      'Direito Constitucional',
      'Direito Administrativo',
      'Administração Pública',
      'Legislação Municipal',
    ],
  },
  {
    category: 'Legislação e Ética',
    items: [
      'Regimento Interno da Câmara',
      'Lei Orgânica Municipal',
      'Ética no Serviço Público',
      'Processo Legislativo',
    ],
  },
];

export function CurriculumSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Conteúdo Programático
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Todo o conteúdo do edital organizado e estruturado para seu aprendizado
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {subjects.map((subject, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <div className="mb-6">
                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full mb-4"></div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {subject.category}
                </h3>
              </div>
              
              <ul className="space-y-4">
                {subject.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 leading-relaxed font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-lg">
            <span className="font-bold text-blue-600">+ Bônus:</span> Técnicas de Estudo, Gestão do Tempo e Estratégias de Prova
          </p>
        </div>
      </div>
    </section>
  );
}
