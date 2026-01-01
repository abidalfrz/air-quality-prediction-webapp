import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Predict() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    temperature: "",
    humidity: "",
    "pm2.5": "",
    pm10: "",
    no2: "",
    so2: "",
    co: "",
    proximity_to_industrial_areas: "",
    population_density: "",
  });

  const [loading, setLoading] = useState(false);

  const isFormComplete = Object.values(formData).every(
    (value) => value !== ""
  );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormComplete) return;

    setLoading(true);

    try {
      const response = await fetch("http://localhost:8000/predict/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      navigate("/result", { state: { result } });
    } catch (error) {
      console.error("Prediction error:", error);
    } finally {
      setLoading(false);
    }
  };

  const fields = {
    temperature: "Temperature (°C)",
    humidity: "Humidity (%)",
    "pm2.5": "PM2.5 (µg/m³)",
    pm10: "PM10 (µg/m³)",
    no2: "NO₂ (ppb)",
    so2: "SO₂ (ppb)",
    co: "CO (ppm)",
    proximity_to_industrial_areas: "Industrial Proximity (km)",
    population_density: "Population Density (people/km²)",
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50 flex items-center justify-center px-6">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8 md:p-10">

        <div className="text-center mb-10">

          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
            Enter Environmental Data
          </h2>

          <p className="text-slate-600 max-w-xl mx-auto">
            Fill in all environmental parameters below to get the prediction's result.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {Object.keys(formData).map((key) => (
            <div key={key}>
              <label className="block text-sm font-semibold text-slate-700 mb-1 capitalize">
                {fields[key]}
              </label>

              <input
                type="number"
                step="any"
                name={key}
                value={formData[key]}
                onChange={handleChange}
                required
                placeholder={`Enter ${fields[key]}`}
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-800
                           focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500
                           transition capitalize"
              />
            </div>
          ))}

          <div className="sm:col-span-2 lg:col-span-3 mt-8">
            <button
              type="submit"
              disabled={loading || !isFormComplete}
              className={`w-full py-4 rounded-full font-bold text-lg text-white
                transition-all duration-300 shadow-lg
                ${
                  loading
                    ? "bg-slate-400 cursor-wait"
                    : !isFormComplete
                    ? "bg-slate-300 cursor-not-allowed"
                    : "bg-teal-600 hover:bg-teal-700 hover:shadow-teal-500/40 hover:-translate-y-0.5"
                }`}
            >
              {loading
                ? "Processing Prediction..."
                : "Predict Air Quality 🚀"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Predict;
