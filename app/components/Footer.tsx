import { GraduationCap } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <div className="text-left">
              <div className="font-bold text-white text-xl">Aprenda com Tio</div>
              <div className="text-sm text-gray-400">aprendacomtio.com.br</div>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-gray-400 max-w-md">
            A melhor plataforma de cursos preparatórios para concursos públicos. 
            Preparando você para conquistar seus sonhos.
          </p>
          
          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gray-700"></div>
          
          {/* Copyright */}
          <div className="text-sm text-gray-500">
            <p>© {currentYear} Aprenda com Tio. Todos os direitos reservados.</p>
            <p className="mt-2">
              Curso Preparatório - Câmara Municipal de Caraguatatuba
            </p>
          </div>
          
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <span className="text-gray-700">•</span>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Termos de Uso
            </a>
            <span className="text-gray-700">•</span>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Contato
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
