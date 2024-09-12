import { CssBaseline, Container, Box, Typography, Button } from "@mui/material";
import Dashboard from "./components/Dashboard";
import {
  WeatherProvider,
  useWeatherContext,
} from "./components/WeatherContext";

const TempToggle = () => {
  const { unit, toggleUnit } = useWeatherContext();

  return (
    <Box sx={{ mb: 2 }}>
      <Typography>Current Unit: {unit}</Typography>
      <Button variant="outlined" onClick={toggleUnit}>
        {unit === "C" ? "Celsius => Fahrenheit" : "Fahrenheit => Celsius"}
      </Button>
    </Box>
  );
};

const App = () => {
  return (
    <WeatherProvider>
      <CssBaseline />
      <Container  sx={{ background: '#b6b5c352', height: '100vh', overflow: 'auto' }}>
        <Box sx={{ p: 4, textAlign: "center" }}>
          <Typography variant="h4" gutterBottom>
            Weather Dashboard
          </Typography>
          <TempToggle />
          <Dashboard />
        </Box>
      </Container>
    </WeatherProvider>
  );
};

export default App;
