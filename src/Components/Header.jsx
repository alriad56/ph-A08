import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-[#0f172a] border-b border-slate-700 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8  flex items-center justify-center">
            <img src="/src/assets/images/logo.png" alt="logo" />
          </div>
          <span className="text-white font-bold text-lg">HERO.IO</span>
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "text-purple-400 font-medium" : "text-slate-300 hover:text-white transition-colors"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/apps"
            className={({ isActive }) =>
              isActive ? "text-purple-400 font-medium" : "text-slate-300 hover:text-white transition-colors"
            }
          >
            Apps
          </NavLink>
          <NavLink
            to="/installation"
            className={({ isActive }) =>
              isActive ? "text-red-500 font-medium" : "text-slate-300 hover:text-white transition-colors"
            }
          >
            Installation
          </NavLink>
        </nav>

        {/* Contribute Button */}
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
        >
          <span>✦</span> Contribute
        </a>
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden flex justify-center gap-6 pb-3">
        <NavLink to="/" end className={({ isActive }) => isActive ? "text-purple-400 text-sm font-medium" : "text-slate-400 text-sm"}>Home</NavLink>
        <NavLink to="/apps" className={({ isActive }) => isActive ? "text-purple-400 text-sm font-medium" : "text-slate-400 text-sm"}>Apps</NavLink>
        <NavLink to="/installation" className={({ isActive }) => isActive ? "text-purple-400 text-sm font-medium" : "text-slate-400 text-sm"}>Installation</NavLink>
      </div>
    </header>
  );
}

export default Header;