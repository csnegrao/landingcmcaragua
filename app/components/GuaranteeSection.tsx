import { Shield, CheckCircle } from 'lucide-react';

export function GuaranteeSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-green-400">
            <div className="bg-gradient-to-r from-green-500 to-green-600 px-8 py-6">
              <div className="flex items-center justify-center gap-3">
                <Shield className="w-10 h-10 text-white" />
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
                  Garantia de Satisfação
                </h2>
              </div>
            </div>
            
            <div className="p-8 md:p-12">
              <div className="text-center mb-8">
                <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  7 Dias de Garantia Incondicional
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Experimente o curso sem riscos. Se não ficar satisfeito com o conteúdo, 
                  devolvemos 100% do seu investimento nos primeiros 7 dias.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Sem Burocracia</h4>
                  <p className="text-sm text-gray-600">
                    Processo simples e rápido de reembolso
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Sem Perguntas</h4>
                  <p className="text-sm text-gray-600">
                    Não precisa justificar o motivo
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">100% Seguro</h4>
                  <p className="text-sm text-gray-600">
                    Seu investimento está protegido
                  </p>
                </div>
              </div>
              
              <div className="mt-10 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl border border-green-200">
                <p className="text-center text-gray-700 font-semibold">
                  💡 <span className="text-green-700">Aproveite agora</span> e comece sua preparação com total segurança!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
