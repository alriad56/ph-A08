import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Toast from "../components/Toast";

function formatNumber(num) {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
  if (num >= 1000) return (num / 1000).toFixed(0) + "K";
  return num;
}

function InstallationPage() {
  const navigate = useNavigate();
  const [toast, setToast] = useState(null);
  const [sortOrder, setSortOrder] = useState("default");

  // Read from localStorage
  const [installedApps, setInstalledApps] = useState(() => {
    return JSON.parse(localStorage.getItem("installedApps") || "[]");
  });

  function handleUninstall(appId) {
    const updated = installedApps.filter((a) => a.id !== appId);
    localStorage.setItem("installedApps", JSON.stringify(updated));
    setInstalledApps(updated);
    setToast({ message: "App uninstalled successfully!", type: "success" });
  }

  // Sort logic
  let displayApps = [...installedApps];
  if (sortOrder === "high-low") {
    displayApps.sort((a, b) => b.downloads - a.downloads);
  } else if (sortOrder === "low-high") {
    displayApps.sort((a, b) => a.downloads - b.downloads);
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      {/* Title Section */}
      <section className="bg-white border-b border-slate-100 py-12 px-4 text-center">
        <h1 className="text-3xl font-bold text-slate-800">Your Installed Apps</h1>
        <p className="text-slate-500 mt-2">
          Explore All Trending Apps on the Market developed by us
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-slate-600 font-medium">
            {displayApps.length} Apps Found
          </p>
          {/* Sort dropdown */}
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="border border-slate-200 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="default">Sort By Size ▼</option>
            <option value="high-low">High - Low</option>
            <option value="low-high">Low - High</option>
          </select>
        </div>

        {/* Empty state */}
        {displayApps.length === 0 && (
          <div className="text-center py-16">
            <p className="text-6xl mb-4">📭</p>
            <h2 className="text-xl font-semibold text-slate-700">No apps installed yet</h2>
            <p className="text-slate-500 mt-2 mb-6">
              Go browse our apps and install something!
            </p>
            <button
              onClick={() => navigate("/apps")}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-xl font-medium transition-colors"
            >
              Browse Apps
            </button>
          </div>
        )}

        {/* Installed Apps List */}
        {displayApps.length > 0 && (
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            {displayApps.map((app, index) => (
              <div
                key={app.id}
                className={`flex items-center gap-4 px-6 py-4 ${
                  index !== displayApps.length - 1 ? "border-b border-slate-100" : ""
                }`}
              >
                {/* App image */}
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-14 h-14 rounded-xl object-cover flex-shrink-0"
                />

                {/* App info */}
                <div
                  className="flex-1 cursor-pointer"
                  onClick={() => navigate(`/apps/${app.id}`)}
                >
                  <h3 className="font-semibold text-slate-800 text-sm">{app.title}</h3>
                  <div className="flex items-center gap-3 mt-1 text-xs text-slate-500">
                    <span>{formatNumber(app.downloads)}</span>
                    <span className="flex items-center gap-1">
                      <span className="text-yellow-400">★</span> {app.ratingAvg}
                    </span>
                    <span>{app.size} MB</span>
                  </div>
                </div>

                {/* Uninstall button */}
                <button
                  onClick={() => handleUninstall(app.id)}
                  className="bg-green-500 hover:bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex-shrink-0"
                >
                  Uninstall
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default InstallationPage;