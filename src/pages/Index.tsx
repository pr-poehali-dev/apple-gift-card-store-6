import { useState } from "react";
import Icon from "@/components/ui/icon";
import Home from "./Home";
import Catalog from "./Catalog";
import About from "./About";
import Contacts from "./Contacts";

type Page = "home" | "catalog" | "about" | "contacts";

const NAV = [
  { id: "home" as Page, label: "Главная" },
  { id: "catalog" as Page, label: "Каталог" },
  { id: "about" as Page, label: "О магазине" },
  { id: "contacts" as Page, label: "Контакты" },
];

export default function Index() {
  const [page, setPage] = useState<Page>("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = (p: string) => {
    setPage(p as Page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white font-golos">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => navigate("home")}
            className="flex items-center gap-2.5"
          >
            <div className="w-7 h-7 bg-zinc-900 flex items-center justify-center">
              <Icon name="Apple" size={14} color="white" />
            </div>
            <span className="font-golos font-semibold text-zinc-900 tracking-tight text-sm">
              Gift<em className="font-cormorant italic font-normal text-zinc-500 text-base">Cards</em>
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => navigate(n.id)}
                className={`text-sm transition-colors duration-150 ${
                  page === n.id
                    ? "text-zinc-900 font-medium"
                    : "text-zinc-400 hover:text-zinc-700"
                }`}
              >
                {n.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => navigate("catalog")}
              className="bg-zinc-900 text-white text-xs tracking-wide px-5 py-2 hover:bg-zinc-700 transition-colors"
            >
              Купить карту
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={20} className="text-zinc-700" />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-zinc-100 bg-white animate-fade-in">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => navigate(n.id)}
                className={`w-full text-left px-6 py-4 text-sm border-b border-zinc-50 transition-colors ${
                  page === n.id ? "text-zinc-900 font-medium" : "text-zinc-500"
                }`}
              >
                {n.label}
              </button>
            ))}
          </div>
        )}
      </header>

      <main>
        {page === "home" && <Home onNavigate={navigate} />}
        {page === "catalog" && <Catalog />}
        {page === "about" && <About />}
        {page === "contacts" && <Contacts />}
      </main>

      <footer className="border-t border-zinc-100 py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-zinc-900 flex items-center justify-center">
              <Icon name="Apple" size={12} color="white" />
            </div>
            <span className="text-zinc-400 text-sm">GiftCards Store</span>
          </div>
          <nav className="flex gap-6">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => navigate(n.id)}
                className="text-sm text-zinc-400 hover:text-zinc-700 transition-colors"
              >
                {n.label}
              </button>
            ))}
          </nav>
          <div className="text-zinc-300 text-xs">© 2025 GiftCards Store</div>
        </div>
      </footer>
    </div>
  );
}
