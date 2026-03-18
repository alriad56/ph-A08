import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#0f172a] border-t border-slate-700 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">▶</span>
            </div>
            <span className="text-white font-bold">HERO.IO</span>
          </Link>

          {/* Copyright */}
          <p className="text-red-300 text-sm">Copyright © 2025 - All right reserved</p>

          {/* Social Links */}
          <div className="flex flex-col items-end gap-2">
            <span className="text-slate-400 text-sm font-medium">Social Links</span>
            <div className="flex items-center gap-3">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 bg-slate-700 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors text-white text-sm">
                G
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 bg-slate-700 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors text-white text-sm">
                T
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 bg-slate-700 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors text-white text-sm">
                F
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;