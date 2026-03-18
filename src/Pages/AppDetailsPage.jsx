import { useLoaderData, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Toast from "../Components/Toast";

function formatNumber(num) {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
  if (num >= 1000) return (num / 1000).toFixed(0) + "K";
  return num;
}

function AppDetailsPage() {
  const { app } = useLoaderData();
  const navigate = useNavigate();
  const [isInstalled, setIsInstalled] = useState(false);
  const [toast, setToast] = useState(null);

  // Check localStorage on mount
  useEffect(() => {
    const installed = JSON.parse(localStorage.getItem("installedApps") || "[]");
    const found = installed.find((a) => a.id === app.id);
    if (found) setIsInstalled(true);
  }, [app.id]);

  function handleInstall() {
    const installed = JSON.parse(localStorage.getItem("installedApps") || "[]");
    installed.push(app);
    localStorage.setItem("installedApps", JSON.stringify(installed));
    setIsInstalled(true);
    setToast({ message: `${app.title} installed successfully!`, type: "success" });
  }

  // Chart data - reverse so 5 star is on top
  const chartData = [...app.ratings].reverse();

  return (
    <div className="min-h-screen bg-slate-50">
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* App Info Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 mb-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* App Image */}
            <div className="flex-shrink-0">
              <img
                src={app.image}
                alt={app.title}
                className="w-32 h-32 rounded-2xl object-cover shadow"
              />
            </div>

            {/* App Details */}
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-slate-800 mb-1">{app.title}</h1>
              <p className="text-slate-500 text-sm mb-4">
                Developed by{" "}
                <span className="text-purple-600 font-medium">{app.companyName}</span>
              </p>

              {/* Stats row */}
              <div className="flex flex-wrap gap-6 mb-6">
                <div className="text-center">
                  <div className="flex items-center gap-1 text-slate-400 text-xs mb-1">
                    <span>↓</span> DOWNLOAD
                  </div>
                  <p className="text-2xl font-bold text-slate-800">
                    {formatNumber(app.downloads)}
                  </p>
                </div>
                <div className="text-center">
                  <div className="flex items-center gap-1 text-slate-400 text-xs mb-1">
                    <span>★</span> AVG RATING
                  </div>
                  <p className="text-2xl font-bold text-slate-800">{app.ratingAvg}</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center gap-1 text-slate-400 text-xs mb-1">
                    <span>💬</span> REVIEWS
                  </div>
                  <p className="text-2xl font-bold text-slate-800">
                    {formatNumber(app.reviews)}
                  </p>
                </div>
              </div>

              {/* Install Button */}
              <button
                onClick={handleInstall}
                disabled={isInstalled}
                className={`px-6 py-2 rounded-xl font-medium transition-colors text-white ${
                  isInstalled
                    ? "bg-slate-400 cursor-not-allowed"
                    : "bg-green-500 hover:bg-green-600"
                }`}
              >
                {isInstalled ? "Installed ✓" : "Install Now"}
              </button>
            </div>
          </div>
        </div>

        {/* Ratings Chart */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 mb-6">
          <h2 className="text-xl font-bold text-slate-800 mb-6">Ratings</h2>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart
              data={chartData}
              layout="vertical"
              margin={{ left: 10, right: 30, top: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" tick={{ fontSize: 12 }} />
              <YAxis
                type="category"
                dataKey="name"
                tick={{ fontSize: 12 }}
                width={50}
              />
              <Tooltip />
              <Bar dataKey="count" fill="#f97316" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Description */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Description</h2>
          <p className="text-slate-600 leading-relaxed">{app.description}</p>
          <div className="mt-4 flex items-center gap-4 text-sm text-slate-500">
            <span>📦 Size: {app.size} MB</span>
            <span>⭐ Rating: {app.ratingAvg}/5</span>
          </div>
        </div>

        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="mt-6 text-purple-600 hover:text-purple-800 flex items-center gap-1 text-sm"
        >
          ← Go Back
        </button>
      </div>
    </div>
  );
}

export default AppDetailsPage;