import { useState } from "react";
import Icon from "@/components/ui/icon";

const CARDS = [
  { id: 1, amount: 250, currency: "₽", region: "Россия", category: "ru" },
  { id: 2, amount: 500, currency: "₽", region: "Россия", category: "ru" },
  { id: 3, amount: 1000, currency: "₽", region: "Россия", category: "ru" },
  { id: 4, amount: 2500, currency: "₽", region: "Россия", category: "ru" },
  { id: 5, amount: 5000, currency: "₽", region: "Россия", category: "ru" },
  { id: 6, amount: 10000, currency: "₽", region: "Россия", category: "ru" },
  { id: 7, amount: 15, currency: "$", region: "США", category: "us" },
  { id: 8, amount: 25, currency: "$", region: "США", category: "us" },
  { id: 9, amount: 50, currency: "$", region: "США", category: "us" },
  { id: 10, amount: 100, currency: "$", region: "США", category: "us" },
];

const FILTERS = [
  { id: "all", label: "Все" },
  { id: "ru", label: "Россия ₽" },
  { id: "us", label: "США $" },
];

interface CartItem {
  id: number;
  amount: number;
  currency: string;
  region: string;
}

export default function Catalog() {
  const [filter, setFilter] = useState("all");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [added, setAdded] = useState<number | null>(null);

  const filtered = CARDS.filter((c) => filter === "all" || c.category === filter);

  const addToCart = (card: CartItem) => {
    setCart((prev) => [...prev, card]);
    setAdded(card.id);
    setTimeout(() => setAdded(null), 1200);
  };

  return (
    <div className="font-golos pt-24 pb-20 px-6 max-w-5xl mx-auto">
      <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
        <span className="text-xs tracking-[0.2em] uppercase text-zinc-400 mb-4 block">Каталог</span>
        <h1 className="font-cormorant text-5xl font-semibold text-zinc-900 mb-10">
          Все номиналы
        </h1>
      </div>

      {/* Filters */}
      <div
        className="flex gap-2 mb-10 opacity-0 animate-fade-in"
        style={{ animationDelay: "0.2s" }}
      >
        {FILTERS.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`px-5 py-2 text-sm tracking-wide transition-colors duration-150 ${
              filter === f.id
                ? "bg-zinc-900 text-white"
                : "bg-zinc-50 text-zinc-600 hover:bg-zinc-100"
            }`}
          >
            {f.label}
          </button>
        ))}

        {cart.length > 0 && (
          <div className="ml-auto flex items-center gap-2 text-sm text-zinc-600">
            <Icon name="ShoppingCart" size={16} />
            <span className="font-medium">{cart.length}</span>
          </div>
        )}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {filtered.map((card, i) => (
          <div
            key={card.id}
            className="group border border-zinc-100 hover:border-zinc-300 transition-all duration-200 p-6 flex flex-col gap-6 opacity-0 animate-fade-in cursor-pointer"
            style={{ animationDelay: `${0.25 + i * 0.07}s` }}
          >
            {/* Mini card visual */}
            <div className="bg-zinc-900 rounded-sm p-5 aspect-[1.7/1] flex flex-col justify-between">
              <Icon name="Apple" size={18} color="rgba(255,255,255,0.6)" />
              <div>
                <div className="text-white/40 text-[9px] tracking-[0.2em] uppercase mb-0.5">
                  Gift Card · {card.region}
                </div>
                <div className="text-white font-cormorant text-3xl font-semibold leading-none">
                  {card.amount.toLocaleString()}{card.currency}
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="flex items-end justify-between">
              <div>
                <div className="text-zinc-400 text-xs mb-1">{card.region}</div>
                <div className="font-golos text-lg font-semibold text-zinc-900">
                  {card.amount.toLocaleString()} {card.currency}
                </div>
              </div>
              <button
                onClick={() => addToCart(card)}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  added === card.id
                    ? "bg-green-600 text-white"
                    : "bg-zinc-900 text-white hover:bg-zinc-700"
                }`}
              >
                {added === card.id ? (
                  <>
                    <Icon name="Check" size={14} />
                    Добавлено
                  </>
                ) : (
                  <>
                    <Icon name="Plus" size={14} />
                    Купить
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
