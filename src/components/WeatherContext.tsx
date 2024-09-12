import { createContext, useContext, useState, ReactNode } from "react";

type TempUnit = "C" | "F";

type WeatherContextType = {
  unit: TempUnit;
  toggleUnit: () => void;
};

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const useWeatherContext = () => {
  return useContext(WeatherContext)!;
};

type WeatherProviderProps = {
  children: ReactNode;
};

export const WeatherProvider = ({ children }: WeatherProviderProps) => {
  const [unit, setUnit] = useState<TempUnit>("C");

  const toggleUnit = () => {
    setUnit((prev) => (prev === "C" ? "F" : "C"));
  };

  return (
    <WeatherContext.Provider value={{ unit, toggleUnit }}>
      {children}
    </WeatherContext.Provider>
  );
};
