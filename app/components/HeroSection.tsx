import { GraduationCap, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L2c+PC9zdmc+')] opacity-30"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-blue-900 px-4 py-2 rounded-full font-semibold text-sm">
              <GraduationCap className="w-5 h-5" />
              Plataforma Aprenda com Tio
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Curso Preparatório para Câmara Municipal de Caraguatatuba
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              A preparação mais completa e focada em aprovação. 
              Conteúdo atualizado, professores especializados e suporte exclusivo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
              >
                Garantir Minha Vaga Agora
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 hover:bg-white/20 text-white border-white/30 font-semibold text-lg px-8 py-6 backdrop-blur-sm"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar no WhatsApp
              </Button>
            </div>
            
            <div className="flex items-center gap-6 pt-4 text-sm text-blue-100">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span>Conteúdo 100% Atualizado</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span>Simulados Exclusivos</span>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-yellow-400 rounded-3xl transform rotate-3"></div>
            <img 
              src="https://images.unsplash.com/photo-1577036421869-7c8d388d2123?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwc3R1ZHlpbmclMjBzdWNjZXNzfGVufDF8fHx8MTc2ODIyMDMxMnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Estudante bem-sucedida" 
              className="relative rounded-3xl shadow-2xl object-cover w-full h-[400px] md:h-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
