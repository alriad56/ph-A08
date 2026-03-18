import { useLoaderData, useNavigate } from "react-router-dom";
import AppCard from "../Components/AppCard";

function HomePage() {
  const { apps } = useLoaderData();
  const navigate = useNavigate();

  return (
    <div>
      {/* Banner Section */}
      <section className="bg-[#0f172a] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            We Build{" "}
            <span className="text-purple-400">Productive Apps</span>
          </h1>
          <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
            At HERO.IO, we craft remarkable apps designed to make everyday life simpler,
            smarter, and more exciting. Our goal is to turn your ideas into digital
            masterpieces that may make an impact.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white px-6 py-3 rounded-xl flex items-center gap-2 transition-colors"
            >
              <span className="text-green-400">▶</span> Google Play
            </a>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white px-6 py-3 rounded-xl flex items-center gap-2 transition-colors"
            >
              <span>🍎</span> App Store
            </a>
          </div>

          {/* Phone mockup */}
          <div className="mt-12 relative flex justify-center">
  <img 
    src="/src/assets/images/hero.png" 
    alt="App Preview" 
    className="w-auto h-80 object-contain"
  />
</div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-purple-700 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">
            Trusted By Millions, Built For You
          </h2>
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-slate-300 text-sm mb-1">Total Downloads</p>
              <p className="text-3xl md:text-4xl font-bold">29.6M</p>
              <p className="text-purple-300 text-xs mt-1">All Time Downloads Metric</p>
            </div>
            <div>
              <p className="text-slate-300 text-sm mb-1">Total Reviews</p>
              <p className="text-3xl md:text-4xl font-bold">906K</p>
              <p className="text-purple-300 text-xs mt-1">All Time User Comments</p>
            </div>
            <div>
              <p className="text-slate-300 text-sm mb-1">Total Apps</p>
              <p className="text-3xl md:text-4xl font-bold">132+</p>
              <p className="text-purple-300 text-xs mt-1">Active Applications</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Apps Section */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-800">Trending Apps</h2>
            <p className="text-slate-500 mt-2">
              Explore All Trending Apps on the Market, developed by us
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {apps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => navigate("/apps")}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-xl font-medium transition-colors"
            >
              Show All
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;