import { useState } from "react";
const themes = [
  { name: "light", color: "#ffffff" },
  { name: "dark", color: "#1f2937" },
  { name: "cupcake", color: "#fbcfe8" },
  { name: "bumblebee", color: "#fcd34d" },
  { name: "emerald", color: "#10b981" },
  { name: "corporate", color: "#4b5563" },
  { name: "custom-dark", color: "#0f172a" },
  { name: "light-next", color: "#f3f4f6" },
  { name: "custom-blue", color: "#3b82f6" },
  { name: "sunset", color: "#fb923c" },
  { name: "dim", color: "#64748b" },
  { name: "night", color: "#0a0e17" },
];


const AppearanceSetting = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="">
      <h2 className="text-xl font-semibold mb-4">Appearance Settings</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {themes.map(({ name, color }) => (
          <div
            key={name}
            onClick={() => handleThemeChange(name)}
            className={`cursor-pointer p-4 rounded shadow border-2 ${
              theme === name ? "border-blue-500" : "border-transparent"
            }`}
          >
            <div
              className="w-full h-8 md:h-16 rounded"
              style={{ backgroundColor: color }}
            />
            <div className="text-center mt-2 font-medium">{name}</div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default AppearanceSetting;
