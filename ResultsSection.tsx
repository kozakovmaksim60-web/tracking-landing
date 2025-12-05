import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { TrendingUp, DollarSign, Users, BookOpen, ExternalLink, Send } from "lucide-react";

export function ResultsSection() {
  const cases = [
    {
      type: "Нутрициология",
      client: "Елена Баранова",
      result: "Доход вырос в 2,5 раза",
      description: "У клиентки не было чётких финансовых целей, размытая ЦА и низкая монетизация знаний. После системной работы были поставлены конкретные цели по доходу, сфокусировались на платежеспособной ЦА, запущены марафоны как точка входа. Бизнес превратился в управляемую систему с понятными KPI.",
      icon: TrendingUp,
      color: "blue",
      telegramLink: "https://t.me/sergey_kozyakov_result/8"
    },
    {
      type: "НКО",
      client: "Благотворительный фонд «Дирижабль»",
      result: "Рост доходов с 0 до 780 000 руб.",
      description: "Фонд работал без чёткой системы: не было стратегии фандрайзинга, структуры в работе с волонтёрами, планирования. Внедрены еженедельные спринты, дашборд задач, систематизирован онбординг. Команда научилась фокусироваться на приоритетах.",
      icon: Users,
      color: "green",
      telegramLink: "https://t.me/sergey_kozyakov_result/10"
    },
    {
      type: "Фриланс",
      client: "Автор",
      result: "+24 000 руб. за месяц",
      description: "Клиентка хотела научиться прогнозировать доход, смело планировать крупные расходы. Работа с трекером помогла сфокусироваться на целях, начать делегирование и проанализировать бизнес-процессы, что привело к дополнительному доходу и ясности в развитии.",
      icon: DollarSign,
      color: "purple",
      telegramLink: "https://t.me/sergey_kozyakov_result/14"
    },
    {
      type: "Интернет-проект",
      client: "«Лаборатория сказок»",
      result: "Запущен сайт за 3 дня, 26 продаж",
      description: "Клиент-перфекционист долго не мог запуститься из-за стремления к идеалу. Сместили фокус на «достаточно хорошо для старта», определили минимальные шаги для запуска. Это позволило быстро выйти на рынок, получить первых клиентов и обратную связь.",
      icon: BookOpen,
      color: "amber",
      telegramLink: "https://t.me/sergey_kozyakov_result/12"
    }
  ];

  const colorClasses: Record<string, { bg: string; icon: string; badge: string }> = {
    blue: { bg: "bg-blue-50", icon: "text-blue-600", badge: "bg-blue-100 text-blue-700" },
    green: { bg: "bg-green-50", icon: "text-green-600", badge: "bg-green-100 text-green-700" },
    purple: { bg: "bg-purple-50", icon: "text-purple-600", badge: "bg-purple-100 text-purple-700" },
    amber: { bg: "bg-amber-50", icon: "text-amber-600", badge: "bg-amber-100 text-amber-700" }
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">
              Результаты клиентов
            </h2>
            <p className="text-xl text-slate-600">
              50+ клиентов. Средний срок работы — 6 месяцев
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {cases.map((caseItem, index) => {
              const Icon = caseItem.icon;
              const colors = colorClasses[caseItem.color];
              
              return (
                <Card 
                  key={index} 
                  className="p-6 bg-white hover:shadow-xl transition-all duration-300 cursor-pointer group border-2 hover:border-blue-200"
                  onClick={() => window.open(caseItem.telegramLink, '_blank')}
                >
                  <div className="flex items-start justify-between mb-4">
                    <Badge className={`${colors.badge} hover:${colors.badge}`}>
                      {caseItem.type}
                    </Badge>
                    <ExternalLink className="size-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                  
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 ${colors.bg} rounded-lg flex-shrink-0`}>
                      <Icon className={`size-6 ${colors.icon}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2">
                        {caseItem.result}
                      </h3>
                      <p className="text-sm text-slate-500 mb-3">
                        {caseItem.client}
                      </p>
                      <p className="text-slate-600">
                        {caseItem.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* CTA Block */}
          <div className="mt-12 text-center">
            <p className="text-slate-500 mb-4">
              Нажмите на любой кейс, чтобы узнать подробности в Telegram
            </p>
            <Button 
              variant="outline"
              className="mt-4 border-blue-600 text-blue-600 hover:bg-blue-50"
              onClick={() => window.open('https://t.me/mylifetracking', '_blank')}
            >
              <Send className="mr-2 size-4" />
              Больше кейсов в Telegram канале
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
