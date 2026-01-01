import { useLocation, Link } from "react-router-dom";

function Result() {
  const location = useLocation();
  console.log(location.state);
  const { result } = location.state || {};

  if (result === undefined) {
    return (
      <section className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50 flex items-center justify-center px-6">
        <div className="text-center bg-white p-10 rounded-2xl shadow-xl max-w-md w-full border border-slate-100">
          <div className="mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-slate-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">
              No Data Found
            </h2>
            <p className="text-slate-500 mb-8">
              Sorry, there is no prediction result to display.
            </p>
          </div>
          <Link to="/predict">
            <button className="w-full py-3 rounded-full font-bold text-white bg-teal-600 hover:bg-teal-700 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              Go to Prediction Page
            </button>
          </Link>
        </div>
      </section>
    );
  }

  const prediction = result.prediction || "Unknown";
  const confidence = result.probabilities * 100;

  const getColorTheme = (status) => {
    switch (status) {
      case "Good":
        return {
          bg: "bg-green-100",
          border: "border-green-200",
          text: "text-green-700",
          badge: "bg-green-200 text-green-800",
          icon: "🍃",
          barBg: "bg-green-500"
        };
      case "Moderate":
        return {
          bg: "bg-yellow-100",
          border: "border-yellow-200",
          text: "text-yellow-700",
          badge: "bg-yellow-200 text-yellow-800",
          icon: "😐",
          barBg: "bg-yellow-500"
        };
      case "Poor":
        return {
          bg: "bg-orange-100",
          border: "border-orange-200",
          text: "text-orange-700",
          badge: "bg-orange-200 text-orange-800",
          icon: "😷",
          barBg: "bg-orange-500"
        };
      case "Hazardous":
        return {
          bg: "bg-red-100",
          border: "border-red-200",
          text: "text-red-700",
          badge: "bg-red-200 text-red-800",
          icon: "☠️",
          barBg: "bg-red-600"
        };
      default: // Unknown
        return {
          bg: "bg-slate-100",
          border: "border-slate-200",
          text: "text-slate-700",
          badge: "bg-slate-200 text-slate-800",
          icon: "❓",
          barBg: "bg-slate-400"
        };
    }
  };

  const theme = getColorTheme(prediction);

  return (
    <section className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50 flex items-center justify-center px-6">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
        
        <div className="text-center pt-10 px-10 pb-4">
          <span className="inline-block bg-teal-100 text-teal-800 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Prediction Result
          </span>
          <h1 className="text-3xl font-extrabold text-slate-900">
            Air Quality Status
          </h1>
        </div>

        <div className={`mx-6 my-4 p-6 rounded-xl border-2 flex flex-col items-center ${theme.bg} ${theme.border}`}>
          
          <div className="text-7xl mb-4 animate-bounce-slow">
            {theme.icon}
          </div>

          <span className={`px-6 py-2 rounded-full text-lg font-bold mb-6 shadow-sm ${theme.badge}`}>
            {prediction}
          </span>

          <div className="w-full text-center">
            <p className={`text-sm font-medium mb-2 ${theme.text}`}>
              Confidence Level
            </p>
            <div className="flex items-center justify-between mb-1">
              <span className={`text-4xl font-extrabold ${theme.text}`}>
                {confidence.toFixed(2)}%
              </span>
              <span className={`text-sm font-medium ${theme.text}`}>Very Confident</span>
            </div>
            
            <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden shadow-inner">
              <div 
                className={`h-full rounded-full transition-all duration-1000 ease-out ${theme.barBg}`}
                style={{ width: `${confidence}%` }} 
              ></div>
            </div>
          </div>
        </div>

        <div className="p-6 pt-2">
          <Link to="/predict">
            <button className="w-full py-4 rounded-full font-bold text-lg text-white bg-teal-600 hover:bg-teal-700 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              Predict Again 🔄
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Result;