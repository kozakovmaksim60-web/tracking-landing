import { Card } from "./ui/card";
import { Building2, Users, AlertCircle, TrendingUp } from "lucide-react";

export function ForWhoSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">
              Для предпринимателей, которые хотят расти быстрее
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Segment 1 */}
            <Card className="p-8 border-2 hover:border-blue-200 transition-colors duration-300 hover:shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Building2 className="size-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-3">
                    B2B-компании с оборотом от 5 до 50 млн руб
                  </h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>есть стабильные продажи</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>но нет системности и управляемого роста</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Segment 2 */}
            <Card className="p-8 border-2 hover:border-blue-200 transition-colors duration-300 hover:shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Users className="size-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-3">
                    Руководители и предприниматели 30+
                  </h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>высокая загрузка</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>растущая ответственность</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>необходимость развивать команду</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Main Pain */}
          <Card className="p-8 border-2 border-amber-200 bg-amber-50/50">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-amber-100 rounded-lg">
                <AlertCircle className="size-6 text-amber-600" />
              </div>
              <div className="flex-1">
                <h3 className="mb-2 text-amber-900">
                  Основная боль:
                </h3>
                <p className="text-lg text-amber-800">
                  «Тону в операционных задачах, теряю фокус, не двигаюсь к цели»
                </p>
              </div>
            </div>
          </Card>

          {/* Call-out Block */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-2xl shadow-lg">
              <TrendingUp className="size-6" />
              <p className="text-lg">
                Если вы чувствуете, что бизнес растёт медленнее, чем мог бы — вам сюда
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
