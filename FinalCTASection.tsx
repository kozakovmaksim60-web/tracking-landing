import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ArrowRight, CheckCircle2, Award, Users, TrendingUp } from "lucide-react";

export function FinalCTASection() {
  const handleCTAClick = () => {
    window.open('https://t.me/Sergey_kozyakov', '_blank');
  };

  return (
    <section id="final-cta-section" className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <div className="mb-8">
            <h2 className="mb-4 text-white">
              Узнайте, как увеличить выручку вашего бизнеса в 2–10 раз
            </h2>
            <p className="text-xl text-blue-100">
              без вложений в рекламу
            </p>
          </div>

          {/* Subheadline */}
          <div className="mb-10">
            <p className="text-lg text-blue-100">
              Запишитесь на бесплатную диагностику.
              <br />
              Вы получите конкретный план действий на 2–4 недели.
            </p>
          </div>

          {/* CTA Button */}
          <div className="mb-12">
            <Button 
              size="lg" 
              className="text-lg px-10 py-7 bg-white text-blue-600 hover:bg-blue-50 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
              onClick={handleCTAClick}
            >
              Записаться на диагностику
              <ArrowRight className="ml-2 size-6" />
            </Button>
            <p className="mt-4 text-sm text-blue-200">
              45-60 минут • Бесплатно • Без продаж
            </p>
          </div>

          {/* Trust Block */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center gap-2">
                <Award className="size-8 text-blue-200" />
                <p className="text-sm text-blue-100">
                  Сертифицированный трекер
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Users className="size-8 text-blue-200" />
                <p className="text-sm text-blue-100">
                  50+ клиентов
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CheckCircle2 className="size-8 text-blue-200" />
                <p className="text-sm text-blue-100">
                  15 лет предпринимательства
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <TrendingUp className="size-8 text-blue-200" />
                <p className="text-sm text-blue-100">
                  Рост выручки клиентов до 10х
                </p>
              </div>
            </div>
          </Card>

          {/* Social Proof */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Badge className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm px-4 py-2">
              Сколково
            </Badge>
            <Badge className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm px-4 py-2">
              А:Старт
            </Badge>
            <Badge className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm px-4 py-2">
              IKEA Experience
            </Badge>
            <Badge className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm px-4 py-2">
              МБА
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}