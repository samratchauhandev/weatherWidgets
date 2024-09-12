import { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import WeatherWidget from "./Weather";

type WeatherWidgetType = {
  id: string;
};

const Dashboard = () => {
  const [widgets, setWidgets] = useState<WeatherWidgetType[]>([]);

  useEffect(() => {
    const savedWidgets = localStorage.getItem("weatherWidgets");
    if (savedWidgets) {
      setWidgets(JSON.parse(savedWidgets));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("weatherWidgets", JSON.stringify(widgets));
  }, [widgets]);

  const addWidget = () => {
    setWidgets([...widgets, { id: Date.now().toString() }]);
  };

  const removeWidget = (id: string) => {
    setWidgets(widgets.filter((widget) => widget.id !== id));
  };

  return (
    <Box sx={{ p: 2 }}>
      <Button variant="contained" onClick={addWidget}>
        Add Widget
      </Button>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {widgets.map((widget) => (
          <WeatherWidget
            key={widget.id}
            id={widget.id}
            onRemove={removeWidget}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Dashboard;
