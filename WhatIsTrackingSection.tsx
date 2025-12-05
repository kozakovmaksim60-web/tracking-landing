import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Network, Zap, HeartHandshake, Sparkles, Send } from "lucide-react";

export function WhatIsTrackingSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">
              Трекинг — это не коучинг и не консалтинг
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Column 1 */}
            <Card className="p-6 bg-white hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4">
                <div className="inline-flex p-3 bg-purple-100 rounded-lg">
                  <Network className="size-8 text-purple-600" />
                </div>
              </div>
              <h3 className="mb-3">
                Опора на методологию Голдратта
              </h3>
              <p className="text-slate-600">
                Метод ограничений позволяет находить узкие места бизнеса и устранять их, а не «чинить всё сразу».
              </p>
            </Card>

            {/* Column 2 */}
            <Card className="p-6 bg-white hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4">
                <div className="inline-flex p-3 bg-blue-100 rounded-lg">
                  <Zap className="size-8 text-blue-600" />
                </div>
              </div>
              <h3 className="mb-3">
                Фокус на действиях, а не теориях
              </h3>
              <p className="text-slate-600">
                Каждая неделя — конкретные шаги, метрики, решения и результаты.
              </p>
            </Card>

            {/* Column 3 */}
            <Card className="p-6 bg-white hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4">
                <div className="inline-flex p-3 bg-green-100 rounded-lg">
                  <HeartHandshake className="size-8 text-green-600" />
                </div>
              </div>
              <h3 className="mb-3">
                Поддержка предпринимателя
              </h3>
              <p className="text-slate-600">
                Структура, объективный взгляд со стороны, контроль фокуса и энергии.
              </p>
            </Card>
          </div>

          {/* Summary Block */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-sm opacity-20" />
            <Card className="relative p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
              <div className="flex items-center gap-4 justify-center flex-wrap mb-6">
                <Sparkles className="size-8" />
                <p className="text-xl text-center">
                  Трекинг = системность + скорость + ответственность + рост
                </p>
                <Sparkles className="size-8" />
              </div>
              <div className="text-center">
                <Button 
                  variant="secondary"
                  className="bg-white text-blue-600 hover:bg-blue-50"
                  onClick={() => window.open('https://t.me/mylifetracking', '_blank')}
                >
                  <Send className="mr-2 size-4" />
                  Подписаться на канал о трекинге
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}