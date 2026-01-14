import { useState } from "react";
import { Github, ExternalLink, Sparkles, Sun, Moon, Search } from "lucide-react";

const repos = [
  {
    name: "Warung Sayur App",
    description: "Aplikasi simulasi belanja warung sayur",
    url: "https://ayudhaa.github.io/warung-sayur-app/",
    color: "from-green-500 to-emerald-500"
  },
  {
    name: "Translator App",
    description: "Aplikasi penerjemah sederhana",
    url: "https://ayudhaa.github.io/translator-app/",
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Bookmark Manager",
    description: "Manajemen bookmark berbasis web",
    url: "https://ayudhaa.github.io/bookmark-manager/",
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Edukasi Anak",
    description: "Media pembelajaran interaktif untuk anak",
    url: "https://ayudhaa.github.io/edukasi-anak/",
    color: "from-orange-500 to-yellow-500"
  },
  {
    name: "Game Warna",
    description: "Game edukasi mengenal warna",
    url: "https://ayudhaa.github.io/game-warna/",
    color: "from-rose-500 to-red-500"
  },
  {
    name: "Belajar Huruf & Kata",
    description: "Aplikasi belajar membaca",
    url: "https://ayudhaa.github.io/belajar-huruf-kata/",
    color: "from-indigo-500 to-sky-500"
  },
  {
    name: "Wordle Clone",
    description: "Game tebak kata ala Wordle",
    url: "https://ayudhaa.github.io/wordle/",
    color: "from-slate-500 to-gray-500"
  },
  {
    name: "Rekomendasi Ku",
    description: "Aplikasi rekomendasi sederhana",
    url: "https://ayudhaa.github.io/rekomendasi-ku/",
    color: "from-teal-500 to-cyan-500"
  },
  {
    name: "Math Quiz",
    description: "Kuis matematika interaktif",
    url: "https://ayudhaa.github.io/math-quiz/",
    color: "from-lime-500 to-green-500"
  },
  {
    name: "Get Quotes",
    description: "Aplikasi generator quote",
    url: "https://ayudhaa.github.io/get-quotes/",
    color: "from-fuchsia-500 to-pink-500"
  },
  {
    name: "E-Report",
    description: "Dashboard laporan sederhana",
    url: "https://ayudhaa.github.io/e-report/",
    color: "from-blue-600 to-indigo-600"
  },
  {
    name: "ChitChat App",
    description: "Aplikasi chat berbasis web",
    url: "https://ayudhaa.github.io/chitchat-app-web/",
    color: "from-violet-500 to-purple-600"
  },
  {
    name: "Kidding Around",
    description: "Game ringan untuk anak-anak",
    url: "https://ayudhaa.github.io/kidding-around/",
    color: "from-amber-500 to-orange-500"
  },
  {
    name: "My Todo",
    description: "Aplikasi todo list sederhana",
    url: "https://ayudhaa.github.io/my-todo/",
    color: "from-sky-500 to-blue-500"
  },
  {
    name: "GitHub Search",
    description: "Pencarian repository GitHub",
    url: "https://ayudhaa.github.io/github-search/",
    color: "from-gray-600 to-slate-600"
  }
];

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState("All");

  const filteredRepos = repos.filter(repo => {
    const matchSearch = repo.name.toLowerCase().includes(search.toLowerCase());
    const matchTag = activeTag === "All" || repo.tags.includes(activeTag);
    return matchSearch && matchTag;
  });

  return (
    <div className={darkMode
      ? "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white"
      : "min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-100 text-slate-900"}
    >
      <header className="max-w-6xl mx-auto px-6 py-12 text-center">
        <div className="flex justify-between items-center mb-10">
          {/* Dark / Light Toggle - Fixed Top */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="
              fixed
              top-4
              right-4
              z-50
              p-3
              rounded-full
              backdrop-blur
              shadow-lg
              transition
              bg-black/20 text-white
              hover:scale-110
              dark:bg-white/20 dark:text-white
            "
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Build. Learn. Play.
        </h1>
        <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
          Tempat kumpulan project web yang fun dan fungsional — siap dicoba langsung tanpa ribet.
        </p>

        <div className="mt-8 max-w-md mx-auto relative">
          <Search className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-black/10 dark:bg-white/10 outline-none"
          />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredRepos.map(repo => (
          <a
            key={repo.name}
            href={repo.url}
            target="_blank"
            className="group relative rounded-3xl p-[1px] overflow-hidden"
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${repo.color} opacity-70 group-hover:opacity-100 transition`} />
            <div className={`relative h-full rounded-3xl p-6 flex flex-col justify-between ${darkMode ? "bg-slate-900" : "bg-white"}`}>
              <div>
                <h2 className="text-xl font-bold mb-2 flex justify-between items-center">
                  {repo.name}
                  <ExternalLink className="w-4 h-4 opacity-60" />
                </h2>
                <p className="text-sm opacity-80">{repo.description}</p>
              </div>
            </div>
          </a>
        ))}
      </main>

      <footer className="max-w-6xl mx-auto px-6 py-12 mt-16 border-t border-black/10 dark:border-white/10 flex justify-center items-center text-sm opacity-70 text-center">
        <span>made with❤️</span>
      </footer>
    </div>
  );
}
