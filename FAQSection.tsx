import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { HelpCircle } from "lucide-react";

export function FAQSection() {
  const faqs = [
    {
      question: "В чём отличие от коуча/консультанта?",
      answer: "Коуч задаёт вопросы. Консультант даёт советы. Трекер ведёт вас к цели: фокусирует, структурирует, контролирует выполнение. Это регулярная системная работа с конкретными действиями и метриками."
    },
    {
      question: "Сколько нужно времени?",
      answer: "Обычно 1–2 часа в неделю. Одна встреча 60-90 минут и выполнение согласованных действий в течение недели. Это инвестиция времени, которая многократно окупается через рост эффективности."
    },
    {
      question: "Есть ли гарантия результата?",
      answer: "Есть гарантия процесса: вы будете двигаться быстрее, чем сейчас. У всех клиентов — кратный рост метрик. Результат зависит от вашей готовности внедрять изменения, но система трекинга обеспечивает структуру и фокус для достижения целей."
    },
    {
      question: "Можно ли отменить или перенести встречу?",
      answer: "Да, по договорённости. Мы понимаем, что в бизнесе бывают форс-мажоры. Главное — предупредить заранее, и мы найдём удобное время для переноса."
    },
    {
      question: "Как проходит диагностическая сессия?",
      answer: "Это 45-60 минут разговора о вашем бизнесе. Мы анализируем текущую ситуацию, определяем узкие места и точки роста, формируем гипотезы. В конце вы получаете конкретный план действий на 2-4 недели. Это бесплатно и без обязательств."
    },
    {
      question: "Подойдёт ли мне трекинг, если мой бизнес совсем небольшой?",
      answer: "Трекинг наиболее эффективен для B2B-компаний с оборотом от 5 млн рублей, где уже есть стабильные продажи, но нет системности роста. Если ваш бизнес меньше, возможно, вам больше подойдут другие инструменты развития."
    },
    {
      question: "Работаете ли вы с B2C-компаниями?",
      answer: "Основная специализация — B2B-бизнес. Однако методология применима и к B2C, особенно в ритейле и сервисных компаниях. На диагностической сессии мы определим, подходит ли трекинг именно вашему бизнесу."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-4">
              <HelpCircle className="size-8 text-blue-600" />
            </div>
            <h2 className="mb-4">
              Частые вопросы
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-slate-200">
                <AccordionTrigger className="text-left hover:text-blue-600 transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
