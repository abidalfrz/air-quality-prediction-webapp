import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const getLinkClass = (path) => {
    const baseClass = "transition duration-300 font-medium";
    const activeClass = "text-teal-600 font-bold";
    const inactiveClass = "text-slate-500 hover:text-teal-600";

    return location.pathname === path 
      ? `${baseClass} ${activeClass}` 
      : `${baseClass} ${inactiveClass}`;
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        <Link to="/" className="group flex items-center gap-2">
          <span className="text-2xl group-hover:animate-bounce-slow filter drop-shadow-sm">
            🍃
          </span>
          <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-700 tracking-tight">
            AirGuard
          </span>
        </Link>

        <div className="flex items-center space-x-8">
          
          <Link to="/" className={getLinkClass("/")}>
            Home
          </Link>

          <Link to="/predict">
            <button className={`
              px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5
              ${location.pathname === "/predict" 
                ? "bg-teal-700 text-white ring-2 ring-teal-200" 
                : "bg-teal-500 text-white hover:bg-teal-600"    
              }
            `}>
              Start Predict ✨
            </button>
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;