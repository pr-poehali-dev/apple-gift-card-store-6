import Icon from "@/components/ui/icon";

export default function About() {
  return (
    <div className="font-golos pt-24 pb-20 px-6 max-w-5xl mx-auto">
      <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
        <span className="text-xs tracking-[0.2em] uppercase text-zinc-400 mb-4 block">О нас</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div>
          <h1
            className="font-cormorant text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] font-semibold text-zinc-900 mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Надёжный<br />
            <em className="italic font-normal text-zinc-500">магазин</em><br />
            Gift Cards
          </h1>
          <p
            className="text-zinc-500 leading-relaxed mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.35s" }}
          >
            Мы специализируемся на продаже официальных подарочных карт Apple. Работаем с 2020 года — за это время выдали тысячи кодов без единого сбоя.
          </p>
          <p
            className="text-zinc-500 leading-relaxed opacity-0 animate-fade-in"
            style={{ animationDelay: "0.45s" }}
          >
            Каждый код проверяется перед выдачей. Коды хранятся в зашифрованном хранилище и доступны только вам — ни мы, ни третьи лица не видят ваши покупки.
          </p>
        </div>

        <div
          className="space-y-0 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          {[
            { icon: "ShieldCheck", label: "Официальные коды", desc: "Все карты сертифицированы и проверены" },
            { icon: "Zap", label: "Мгновенная выдача", desc: "Код на почте в секунды после оплаты" },
            { icon: "Lock", label: "Шифрование данных", desc: "AES-256 защищает ваши коды в хранилище" },
            { icon: "HeadphonesIcon", label: "Поддержка 24/7", desc: "Ответим в течение 15 минут в любое время" },
            { icon: "RotateCcw", label: "Гарантия возврата", desc: "Вернём деньги, если код не подошёл" },
          ].map((item, i) => (
            <div
              key={item.label}
              className="flex gap-5 py-6 border-b border-zinc-100 last:border-0"
              style={{ animationDelay: `${0.55 + i * 0.1}s` }}
            >
              <div className="w-9 h-9 flex items-center justify-center bg-zinc-50 flex-shrink-0 mt-0.5">
                <Icon name={item.icon} size={16} className="text-zinc-600" />
              </div>
              <div>
                <div className="font-semibold text-zinc-900 mb-0.5">{item.label}</div>
                <div className="text-sm text-zinc-500">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div
        className="mt-20 grid grid-cols-3 gap-8 border-t border-zinc-100 pt-16 opacity-0 animate-fade-in"
        style={{ animationDelay: "0.6s" }}
      >
        {[
          { value: "10 000+", label: "Выданных кодов" },
          { value: "4.98", label: "Средняя оценка" },
          { value: "< 5 сек", label: "Время выдачи" },
        ].map((s) => (
          <div key={s.label}>
            <div className="font-cormorant text-4xl font-semibold text-zinc-900 mb-1">
              {s.value}
            </div>
            <div className="text-zinc-400 text-sm">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
