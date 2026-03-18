import { useEffect } from "react";

function Toast({ message, type = "success", onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = type === "success" ? "bg-green-500" : "bg-red-500";

  return (
    <div className={`fixed bottom-6 right-6 z-50 ${bgColor} text-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-3 animate-bounce`}>
      <span>{type === "success" ? "✓" : "✗"}</span>
      <span className="font-medium">{message}</span>
      <button onClick={onClose} className="ml-2 text-white opacity-70 hover:opacity-100">×</button>
    </div>
  );
}

export default Toast;