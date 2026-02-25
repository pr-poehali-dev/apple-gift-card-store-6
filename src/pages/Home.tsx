import Icon from "@/components/ui/icon";

interface HomeProps {
  onNavigate: (page: string) => void;
}

const FEATURED = [
  {
    id: 1,
    amount: 500,
    currency: "₽",
    region: "Россия",
    color: "from-zinc-800 to-zinc-900",
    accent: "#ffffff",
    popular: false,
  },
  {
    id: 2,
    amount: 1000,
    currency: "₽",
    region: "Россия",
    color: "from-zinc-700 to-zinc-800",
    accent: "#ffffff",
    popular: true,
  },
  {
    id: 3,
    amount: 2500,
    currency: "₽",
    region: "Россия",
    color: "from-zinc-600 to-zinc-700",
    accent: "#ffffff",
    popular: false,
  },
];

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="font-golos">
      {/* Hero */}
      <section className="pt-24 pb-20 px-6 max-w-5xl mx-auto">
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <span className="inline-block text-xs tracking-[0.2em] uppercase text-zinc-400 mb-6 font-golos">
            Мгновенная доставка
          </span>
        </div>
        <h1
          className="font-cormorant text-[clamp(3rem,8vw,6.5rem)] leading-[0.95] font-semibold text-zinc-900 mb-8 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Apple<br />
          <em className="font-cormorant italic font-normal text-zinc-500">Gift Cards</em>
        </h1>
        <p
          className="text-zinc-500 text-lg max-w-md mb-12 leading-relaxed opacity-0 animate-fade-in"
          style={{ animationDelay: "0.35s" }}
        >
          Пополняйте Apple ID, покупайте приложения и подписки — код придёт на почту за секунды.
        </p>
        <div
          className="flex flex-wrap gap-4 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          <button
            onClick={() => onNavigate("catalog")}
            className="bg-zinc-900 text-white px-8 py-3.5 text-sm font-medium tracking-wide hover:bg-zinc-700 transition-colors duration-200"
          >
            Перейти в каталог
          </button>
          <button
            onClick={() => onNavigate("about")}
            className="border border-zinc-200 text-zinc-700 px-8 py-3.5 text-sm font-medium tracking-wide hover:border-zinc-400 transition-colors duration-200"
          >
            О магазине
          </button>
        </div>
      </section>

      {/* Featured cards */}
      <section className="pb-24 px-6 max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h2
            className="font-golos text-sm tracking-[0.15em] uppercase text-zinc-400 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            Популярные номиналы
          </h2>
          <button
            onClick={() => onNavigate("catalog")}
            className="text-sm text-zinc-400 hover:text-zinc-900 transition-colors flex items-center gap-1 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            Все карты <Icon name="ArrowRight" size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {FEATURED.map((card, i) => (
            <div
              key={card.id}
              className="group relative opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.7 + i * 0.12}s` }}
            >
              {card.popular && (
                <div className="absolute -top-3 left-6 z-10 bg-zinc-900 text-white text-[10px] tracking-[0.15em] uppercase px-3 py-1">
                  Хит продаж
                </div>
              )}
              <div
                className={`bg-gradient-to-br ${card.color} p-8 aspect-[1.6/1] flex flex-col justify-between cursor-pointer transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-xl`}
                onClick={() => onNavigate("catalog")}
              >
                <div className="flex items-start justify-between">
                  <Icon name="Apple" size={22} color="rgba(255,255,255,0.7)" />
                  <span className="text-[10px] tracking-[0.15em] uppercase text-white/40">
                    {card.region}
                  </span>
                </div>
                <div>
                  <div className="text-white/50 text-xs tracking-widest uppercase mb-1">
                    Gift Card
                  </div>
                  <div className="text-white font-cormorant text-4xl font-semibold">
                    {card.amount.toLocaleString()}{card.currency}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="border-t border-zinc-100 py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { icon: "Zap", title: "Мгновенно", desc: "Код приходит на почту в течение нескольких секунд после оплаты" },
            { icon: "Shield", title: "Безопасно", desc: "Коды хранятся в зашифрованном виде и доступны только покупателю" },
            { icon: "Clock", title: "История", desc: "Все ваши покупки сохраняются — можно найти код в любой момент" },
          ].map((b, i) => (
            <div
              key={b.title}
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.2 + i * 0.15}s` }}
            >
              <div className="w-10 h-10 flex items-center justify-center bg-zinc-50 mb-5">
                <Icon name={b.icon} size={18} className="text-zinc-700" />
              </div>
              <h3 className="font-golos font-semibold text-zinc-900 mb-2">{b.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
