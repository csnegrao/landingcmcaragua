import { MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export function FinalCTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L2c+PC9zdmc+')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Pronto para começar sua preparação?
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-4 leading-relaxed">
            Junte-se aos aprovados e conquiste sua vaga na Câmara Municipal de Caraguatatuba
          </p>
          
          <p className="text-lg text-blue-200 mb-10 max-w-2xl mx-auto">
            Não deixe para depois. Quanto antes você começar, maiores serão suas chances de aprovação.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold text-xl px-10 py-8 shadow-2xl hover:shadow-yellow-400/50 transition-all hover:scale-105 group"
            >
              Comprar Agora
              <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 font-semibold text-xl px-10 py-8 backdrop-blur-sm"
            >
              <MessageCircle className="w-6 h-6 mr-2" />
              Falar no WhatsApp
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-1">+200</div>
              <div className="text-sm text-blue-200">Videoaulas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-1">+500</div>
              <div className="text-sm text-blue-200">Alunos Aprovados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-1">4.9★</div>
              <div className="text-sm text-blue-200">Avaliação Média</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-1">24/7</div>
              <div className="text-sm text-blue-200">Acesso Ilimitado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
