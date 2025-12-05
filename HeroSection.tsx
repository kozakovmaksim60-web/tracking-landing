import { Button } from "./ui/button";
import { ArrowRight, Target, TrendingUp, Focus } from "lucide-react";
import profileImage from "figma:asset/c32945f814e483ab1cbc23c79115b62230190822.png";

export function HeroSection() {
  const scrollToDiagnostic = () => {
    const element = document.getElementById('diagnostic-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              {/* Main Heading */}
              <div className="mb-6">
                <h1 className="mb-4">
                  Бюро консалтинга перемен
                </h1>
                <p className="text-xl text-slate-600">
                  Помогаю предпринимателям усилить рост бизнеса через трекинг: фокус, системность и устранение ограничений
                </p>
              </div>

              {/* Service Description */}
              <div className="mb-8">
                <p className="text-lg text-slate-700">
                  Трекинг для вашего бизнеса: фокус на действиях, которые реально приводят к результату
                </p>
              </div>

              {/* USP Block */}
              <div className="mb-10 flex flex-wrap justify-center lg:justify-start gap-3">
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200 text-sm">
                  <Target className="size-4 text-blue-600" />
                  <span className="text-slate-700">Реальный опыт</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200 text-sm">
                  <TrendingUp className="size-4 text-blue-600" />
                  <span className="text-slate-700">Экспертность в ритейле</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200 text-sm">
                  <Focus className="size-4 text-blue-600" />
                  <span className="text-slate-700">Работа на результат</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mb-8">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 w-full lg:w-auto"
                  onClick={scrollToDiagnostic}
                >
                  Записаться на бесплатную диагностику
                  <ArrowRight className="ml-2 size-5" />
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>50+ клиентов</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>15 лет в бизнесе</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>Рост до 10х</span>
                </div>
              </div>
            </div>

            {/* Right Column - Photo */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                {/* Photo Frame */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <img 
                    src={profileImage} 
                    alt="Консультант по бизнес-трекингу" 
                    className="w-full h-auto"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none" />
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-20 blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500 rounded-full opacity-20 blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-slate-400 rounded-full" />
        </div>
      </div>
    </section>
  );
}