import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Search, Play, RefreshCw, TrendingUp, Send } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Диагностическая сессия (0₽)",
      description: "Разбор текущей ситуации, определение точки роста, формирование гипотез.",
      color: "blue"
    },
    {
      number: "02",
      icon: Play,
      title: "Запуск трекинга",
      description: "1 встреча в неделю + контроль между встречами.",
      color: "green"
    },
    {
      number: "03",
      icon: RefreshCw,
      title: "Еженедельная работа по системе",
      description: "Фиксация ключевой цели, узкое место недели, набор конкретных действий, метрики и контроль.",
      color: "purple"
    },
    {
      number: "04",
      icon: TrendingUp,
      title: "Рост и масштабирование",
      description: "Системность + фокус → прогнозируемые результаты.",
      color: "amber"
    }
  ];

  const colorClasses: Record<string, { bg: string; text: string; icon: string }> = {
    blue: { bg: "bg-blue-50", text: "text-blue-600", icon: "text-blue-600" },
    green: { bg: "bg-green-50", text: "text-green-600", icon: "text-green-600" },
    purple: { bg: "bg-purple-50", text: "text-purple-600", icon: "text-purple-600" },
    amber: { bg: "bg-amber-50", text: "text-amber-600", icon: "text-amber-600" }
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">
              Как проходит работа
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const colors = colorClasses[step.color];
              
              return (
                <Card 
                  key={index} 
                  className="p-6 bg-white hover:shadow-lg transition-all duration-300 relative overflow-hidden border-2 hover:border-blue-200"
                >
                  {/* Background Number */}
                  <div className={`absolute -right-4 -top-2 text-8xl opacity-5 ${colors.text}`}>
                    {step.number}
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 ${colors.bg} rounded-lg flex-shrink-0`}>
                        <Icon className={`size-6 ${colors.icon}`} />
                      </div>
                      <div className="flex-1">
                        <div className={`text-sm ${colors.text} mb-1`}>
                          Шаг {step.number}
                        </div>
                        <h3 className="mb-2">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-slate-600 pl-16">
                      {step.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Process Details */}
          <Card className="mt-12 p-8 bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-100">
            <h3 className="mb-4 text-center">
              Еженедельный цикл работы включает:
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                <p className="text-slate-700">Фиксация ключевой цели на неделю</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                <p className="text-slate-700">Определение узкого места</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                <p className="text-slate-700">Набор конкретных действий</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                <p className="text-slate-700">Метрики и контроль выполнения</p>
              </div>
            </div>
            <div className="text-center mt-6">
              <Button 
                variant="default"
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => window.open('https://t.me/mylifetracking', '_blank')}
              >
                <Send className="mr-2 size-4" />
                Узнать больше о методологии в канале
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}