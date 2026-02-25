import { useState } from "react";
import Icon from "@/components/ui/icon";

export default function Contacts() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="font-golos pt-24 pb-20 px-6 max-w-5xl mx-auto">
      <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
        <span className="text-xs tracking-[0.2em] uppercase text-zinc-400 mb-4 block">Контакты</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left */}
        <div>
          <h1
            className="font-cormorant text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] font-semibold text-zinc-900 mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Есть<br />
            <em className="italic font-normal text-zinc-500">вопрос?</em>
          </h1>
          <p
            className="text-zinc-500 leading-relaxed mb-10 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.35s" }}
          >
            Напишите нам — ответим в течение 15 минут. Если вопрос срочный, пишите напрямую в Telegram.
          </p>

          <div className="space-y-5 opacity-0 animate-fade-in" style={{ animationDelay: "0.45s" }}>
            {[
              { icon: "Mail", label: "Почта", value: "support@giftcards.ru" },
              { icon: "MessageCircle", label: "Telegram", value: "@giftcards_support" },
              { icon: "Clock", label: "Время работы", value: "Круглосуточно, 7 дней" },
            ].map((c) => (
              <div key={c.label} className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-zinc-50">
                  <Icon name={c.icon} size={16} className="text-zinc-600" />
                </div>
                <div>
                  <div className="text-xs text-zinc-400 mb-0.5">{c.label}</div>
                  <div className="text-zinc-800 font-medium">{c.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div
          className="opacity-0 animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          {sent ? (
            <div className="flex flex-col items-center justify-center h-full min-h-[320px] text-center gap-4 animate-scale-in">
              <div className="w-14 h-14 bg-zinc-900 flex items-center justify-center">
                <Icon name="Check" size={22} color="white" />
              </div>
              <h3 className="font-cormorant text-3xl font-semibold text-zinc-900">
                Сообщение отправлено
              </h3>
              <p className="text-zinc-500 text-sm">Мы ответим вам в ближайшее время</p>
              <button
                onClick={() => { setSent(false); setForm({ name: "", email: "", message: "" }); }}
                className="mt-4 text-sm text-zinc-400 hover:text-zinc-700 transition-colors underline underline-offset-4"
              >
                Отправить ещё
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { key: "name", label: "Имя", type: "text", placeholder: "Ваше имя" },
                { key: "email", label: "Email", type: "email", placeholder: "you@example.com" },
              ].map(({ key, label, type, placeholder }) => (
                <div key={key}>
                  <label className="block text-xs text-zinc-400 tracking-wide mb-2 uppercase">
                    {label}
                  </label>
                  <input
                    type={type}
                    placeholder={placeholder}
                    value={form[key as keyof typeof form]}
                    onChange={(e) => setForm((p) => ({ ...p, [key]: e.target.value }))}
                    required
                    className="w-full border border-zinc-200 px-4 py-3 text-zinc-900 placeholder-zinc-300 focus:outline-none focus:border-zinc-500 transition-colors bg-white text-sm"
                  />
                </div>
              ))}

              <div>
                <label className="block text-xs text-zinc-400 tracking-wide mb-2 uppercase">
                  Сообщение
                </label>
                <textarea
                  placeholder="Ваш вопрос..."
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                  required
                  className="w-full border border-zinc-200 px-4 py-3 text-zinc-900 placeholder-zinc-300 focus:outline-none focus:border-zinc-500 transition-colors bg-white text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-zinc-900 text-white py-3.5 text-sm font-medium tracking-wide hover:bg-zinc-700 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Icon name="Send" size={15} />
                Отправить
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
