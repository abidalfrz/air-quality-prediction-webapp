import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="relative overflow-hidden">
      
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>

      <div className="relative flex flex-col items-center justify-center min-h-screen text-center px-6">
        
        <div className="mb-6 inline-flex items-center gap-2 bg-teal-100 text-teal-800 px-5 py-2 rounded-full text-sm font-semibold tracking-wide shadow-sm animate-fade-in">
          🌱 AI-Powered Environmental Intelligence
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight animate-slide-up">
          Breathe Smarter <br />
          <span className="bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
            Live Healthier
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl leading-relaxed animate-fade-in delay-150">
          Harness the power of artificial intelligence to predict air quality levels 
          in real time.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/predict">
            <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-teal-500/40 transition-all duration-300 transform hover:-translate-y-1">
              Start Prediction 🚀
            </button>
          </Link>

        </div>
      </div>
    </section>
  );
}

export default Home;
