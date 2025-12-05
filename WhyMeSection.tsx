import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Award, Store, Briefcase, GraduationCap } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function WhyMeSection() {
  const credentials = [
    {
      icon: Award,
      title: "Сертифицированный трекер",
      description: "Сколково, акселератор А:Старт, корпоративный трекинг.",
      color: "blue"
    },
    {
      icon: Store,
      title: "Предприниматель с 15-летним стажем",
      description: "Основатель книжного магазина «Перемен» и директор горнолыжного комплекса «Юрманка».",
      color: "green"
    },
    {
      icon: Briefcase,
      title: "Топ-менеджер IKEA",
      description: "Customer Experience Manager. Опыт работы в крупнейшем ритейлере → практическая глубина в клиентском пути и операциях.",
      color: "amber"
    },
    {
      icon: GraduationCap,
      title: "Преподаватель МБА",
      description: "Понимание методик, систем управления и роста.",
      color: "purple"
    }
  ];

  const colorClasses: Record<string, { bg: string; icon: string }> = {
    blue: { bg: "bg-blue-100", icon: "text-blue-600" },
    green: { bg: "bg-green-100", icon: "text-green-600" },
    amber: { bg: "bg-amber-100", icon: "text-amber-600" },
    purple: { bg: "bg-purple-100", icon: "text-purple-600" }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">
              Опыт и экспертиза
            </Badge>
            <h2 className="mb-4">
              Почему со мной — быстрее
            </h2>
            <p className="text-xl text-slate-600">
              15 лет предпринимательства и работы с ростом бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {credentials.map((cred, index) => {
              const Icon = cred.icon;
              const colors = colorClasses[cred.color];
              
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-200">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 ${colors.bg} rounded-lg flex-shrink-0`}>
                      <Icon className={`size-6 ${colors.icon}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2">
                        {cred.title}
                      </h3>
                      <p className="text-slate-600">
                        {cred.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Optional Image */}
          <div className="mt-12">
            <Card className="overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1551135049-8a33b5883817?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRhbnQlMjBtZW50b3IlMjBtZWV0aW5nfGVufDF8fHx8MTc2NDc4OTU1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Консалтинг и трекинг для бизнеса"
                className="w-full h-64 object-cover"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}