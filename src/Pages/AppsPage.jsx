import { useLoaderData, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import AppCard from "../Components/AppCard";

function AppsPage() {
  const { apps } = useLoaderData();
  const [search, setSearch] = useState("");
  const [filteredApps, setFilteredApps] = useState(apps);
  const [isSearching, setIsSearching] = useState(false);

  // Live search with simulated loading
  useEffect(() => {
    setIsSearching(true);
    const timer = setTimeout(() => {
      const result = apps.filter((app) =>
        app.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredApps(result);
      setIsSearching(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [search, apps]);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Title Section */}
      <section className="bg-white border-b border-slate-100 py-12 px-4 text-center">
        <h1 className="text-3xl font-bold text-slate-800">Our All Applications</h1>
        <p className="text-slate-500 mt-2">
          Explore All Apps on the Market developed by us. Thousands of millions.
        </p>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Search and count bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <p className="text-slate-600 font-medium">
            ({filteredApps.length}) Apps Found
          </p>
          <div className="relative w-full sm:w-64">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">🔍</span>
            <input
              type="text"
              placeholder="Search apps..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
            />
          </div>
        </div>

        {/* Loading state */}
        {isSearching && (
          <div className="text-center py-8">
            <div className="inline-block w-8 h-8 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {/* No results */}
        {!isSearching && filteredApps.length === 0 && (
          <div className="text-center py-16">
            <p className="text-5xl mb-4">😕</p>
            <h2 className="text-xl font-semibold text-slate-700">No App Found</h2>
            <p className="text-slate-500 mt-2">
              Try a different search term
            </p>
          </div>
        )}

        {/* Apps Grid */}
        {!isSearching && filteredApps.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {filteredApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AppsPage;