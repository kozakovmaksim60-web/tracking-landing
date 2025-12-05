import { Card } from "./ui/card";
import { Eye, Boxes, FireExtinguisher, Target } from "lucide-react";

export function WhoFitsSection() {
  const benefits = [
    {
      icon: Eye,
      title: "Вам нужен внешний объективный взгляд",
      description: "Сложно принимать решения в одиночку.",
      color: "blue"
    },
    {
      icon: Boxes,
      title: "Нужна система для регулярного роста",
      description: "Хаос в задачах → нет движения вперёд.",
      color: "purple"
    },
    {
      icon: FireExtinguisher,
      title: "Нужно перестать тушить пожары",
      description: "Хотите высвободить время и управлять, а не «разгребать».",
      color: "orange"
    },
    {
      icon: Target,
      title: "Хотите увеличить выручку без вложений в рекламу",
      description: "Фокус на продукт, процессы и конверсию.",
      color: "green"
    }
  ];

  const colorClasses: Record<string, { bg: string; icon: string; border: string }> = {
    blue: { bg: "bg-blue-50", icon: "text-blue-600", border: "border-blue-200" },
    purple: { bg: "bg-purple-50", icon: "text-purple-600", border: "border-purple-200" },
    orange: { bg: "bg-orange-50", icon: "text-orange-600", border: "border-orange-200" },
    green: { bg: "bg-green-50", icon: "text-green-600", border: "border-green-200" }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">
              Кому точно подойдёт трекинг
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              const colors = colorClasses[benefit.color];
              
              return (
                <Card 
                  key={index} 
                  className={`p-6 ${colors.bg} border-2 ${colors.border} hover:shadow-lg transition-all duration-300`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Icon className={`size-8 ${colors.icon}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-slate-600">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
