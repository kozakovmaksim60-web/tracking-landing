import { Card } from "./ui/card";
import { Quote, Star } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Руслан Бмиташев",
      company: "WIB по полочкам",
      text: "Сергей за пару сессий помог выстроить чёткий план для тестирования гипотез. Получили реальные данные, отсекли неработающие варианты и вышли на прибыльный сценарий — всё до вложения денег. Говорит прямо, без воды, даёт инструменты, а не советы. Работа с ним — это действия, а не «греть идеи на бумаге». Рекомендую.",
      rating: 5
    },
    {
      name: "Консультант в новой нише",
      company: "Эксперт по проектам (СНГ)",
      text: "Ожидала общие рекомендации, а получила четкий план действий, который вызвал мозговой перегрев. За неделю собрали больше аналитики, чем планировали. Ценность в том, что трекер не давал советы, а помогал структурировать хаос и двигаться к результату. Темп высокий, опыт — драйвовый и полезный.",
      rating: 5
    },
    {
      name: "Автор проекта в сфере услуг",
      company: "Фрилансер, автор личного бренда",
      text: "Увеличила средний чек и выручку благодаря глубинному пониманию клиентов. Трекинг помог стать организованнее и достигать целей с меньшими усилиями. Очень рекомендую!",
      rating: 5
    },
    {
      name: "Предприниматель в сфере услуг",
      company: "Владелец онлайн-бизнеса",
      text: "Он показал, что задачи, на которые я отводил неделю, можно сделать за пару дней. Дисциплинированные маленькие шаги проведут дальше, чем кажется. Получил мощный импульс к действию.",
      rating: 5
    },
    {
      name: "Руководитель НКО",
      company: "Некоммерческий проект",
      text: "Работа с Сергеем — стимул для очень быстрого execution. Он сочетает прямоту и тактичность, создавая атмосферу tough play. Не было ни одной встречи без чёткого результата. Благодаря ему сдвинулась с нуля привлекаемых денег до первых поступлений.",
      rating: 5
    },
    {
      name: "Анонимный предприниматель",
      company: "Владелец продукта / проекта",
      text: "Работа помогает из недели в неделю фокусироваться на конкретных действиях. Ценен взгляд со стороны от людей, которым «похуй» на твой продукт — это отрезвляет. Рекомендую тем, кому не хватает дисциплины, взгляда со стороны и поддержки окружения.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">
              Отзывы клиентов
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-200 relative"
              >
                <Quote className="absolute top-4 right-4 size-8 text-blue-100" />
                
                <div className="mb-4">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 mb-4 relative z-10">
                    "{testimonial.text}"
                  </p>
                </div>

                <div className="border-t pt-4">
                  <p className="text-slate-900 mb-1">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-slate-500">
                    {testimonial.company}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
