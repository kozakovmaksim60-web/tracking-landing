import { Separator } from "./ui/separator";
import { Send, Mail, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h3 className="text-white mb-4">
                Бюро консалтинга перемен
              </h3>
              <p className="text-sm text-slate-400">
                Трекинг для предпринимателей: системный рост через фокус и устранение ограничений
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white mb-4">
                Быстрые ссылки
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#diagnostic-section" className="hover:text-blue-400 transition-colors">
                    Записаться на диагностику
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    О методологии
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Кейсы клиентов
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Отзывы
                  </a>
                </li>
              </ul>
            </div>

            {/* Contacts */}
            <div>
              <h4 className="text-white mb-4">
                Контакты
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a 
                    href="https://t.me/Sergey_kozyakov" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                  >
                    <Send className="size-4" />
                    <span>Telegram: @Sergey_kozyakov</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:sergey.kozyakov@gmail.com"
                    className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                  >
                    <Mail className="size-4" />
                    <span>sergey.kozyakov@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="tel:+79139177017"
                    className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                  >
                    <Phone className="size-4" />
                    <span>+7 (913) 917-70-17</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-slate-700" />

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <div>
              <p>© {currentYear} Сергей Козяков. Все права защищены.</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-blue-400 transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Пользовательское соглашение
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}