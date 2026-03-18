import { useNavigate } from "react-router-dom";

function formatNumber(num) {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
  if (num >= 1000) return (num / 1000).toFixed(0) + "K";
  return num;
}

function AppCard({ app }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/apps/${app.id}`);
  }

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-xl overflow-hidden cursor-pointer hover:shadow-lg transition-shadow border border-slate-100"
    >
      <img
        src={app.image}
        alt={app.title}
        className="w-full aspect-square object-cover"
      />
      <div className="p-3">
        <h3 className="text-slate-800 font-medium text-sm leading-tight mb-2 line-clamp-2">
          {app.title}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-slate-500 text-xs">{formatNumber(app.downloads)}</span>
          <div className="flex items-center gap-1">
            <span className="text-yellow-400 text-xs">★</span>
            <span className="text-slate-600 text-xs font-medium">{app.ratingAvg}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppCard;