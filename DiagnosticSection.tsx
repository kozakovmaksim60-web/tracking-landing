import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { CheckCircle2, TrendingUp, Zap, ArrowRight } from "lucide-react";

export function DiagnosticSection() {
  const scrollToFinalCTA = () => {
    const element = document.getElementById('final-cta-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="diagnostic-section" className="py-20 bg-gradient-to-br from-blue-50 via-slate-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">
              Бесплатная диагностическая сессия<br />уже даёт быстрые результаты
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Fact 1 */}
            <Card className="p-6 bg-white hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-300">
              <div className="mb-4">
                <div className="inline-flex p-3 bg-green-100 rounded-full">
                  <CheckCircle2 className="size-8 text-green-600" />
                </div>
              </div>
              <h3 className="mb-2">
                100% клиентов
              </h3>
              <p className="text-slate-600">
                окупили стоимость работы за первый месяц. Сессия позволяет увидеть реальные точки роста.
              </p>
            </Card>

            {/* Fact 2 */}
            <Card className="p-6 bg-white hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-300">
              <div className="mb-4">
                <div className="inline-flex p-3 bg-blue-100 rounded-full">
                  <TrendingUp className="size-8 text-blue-600" />
                </div>
              </div>
              <h3 className="mb-2">
                Рост выручки до 10х
              </h3>
              <p className="text-slate-600">
                По итогам регулярной работы в трекинге.
              </p>
            </Card>

            {/* Fact 3 */}
            <Card className="p-6 bg-white hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-300">
              <div className="mb-4">
                <div className="inline-flex p-3 bg-purple-100 rounded-full">
                  <Zap className="size-8 text-purple-600" />
                </div>
              </div>
              <h3 className="mb-2">
                Ускорение принятия решений
              </h3>
              <p className="text-slate-600">
                Выход из операционного тумана и ясный план на 1–3 месяца.
              </p>
            </Card>
          </div>

          {/* CTA Block */}
          <Card className="p-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white border-0 shadow-2xl">
            <div className="text-center">
              <h3 className="mb-4 text-white">
                Получите бесплатную диагностику вашего бизнеса
              </h3>
              <p className="mb-6 text-blue-100">
                45–60 минут. Без продаж. Только анализ вашей ситуации и план действий.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={scrollToFinalCTA}
              >
                Записаться на бесплатную диагностику
                <ArrowRight className="ml-2 size-5" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
