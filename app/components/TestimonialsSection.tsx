import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Maria Silva',
    role: 'Aprovada em 2025',
    image: 'https://images.unsplash.com/photo-1561065533-316e3142d586?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHN0dWRlbnQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjgyMjI3NzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    text: 'O curso do Aprenda com Tio foi fundamental para minha aprovação! As aulas são claras, objetivas e o material é completo. Recomendo demais!',
    rating: 5,
  },
  {
    name: 'João Santos',
    role: 'Aprovado em 2024',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    text: 'Professores excelentes e conteúdo atualizado. Os simulados me ajudaram muito a entender o formato da prova. Valeu muito a pena!',
    rating: 5,
  },
  {
    name: 'Ana Oliveira',
    role: 'Aprovada em 2025',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    text: 'Estava há anos tentando passar em concurso. Com o Aprenda com Tio consegui finalmente realizar meu sonho. Método incrível!',
    rating: 5,
  },
  {
    name: 'Carlos Mendes',
    role: 'Aprovado em 2024',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    text: 'O suporte dos professores fez toda diferença. Sempre que tinha dúvida, recebia resposta rápida e clara. Curso top!',
    rating: 5,
  },
  {
    name: 'Patricia Costa',
    role: 'Aprovada em 2025',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    text: 'Material didático excelente e aulas dinâmicas. Consegui conciliar com meu trabalho e me preparar bem. Muito satisfeita!',
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            O que nossos alunos dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Histórias reais de quem conquistou a aprovação com a gente
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-yellow-400 opacity-20" />
              
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
