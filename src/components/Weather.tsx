import { Card, CardContent, Typography, IconButton, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { useWeatherContext } from "./WeatherContext";

type WeatherWidgetProps = {
  id: string;
  onRemove: (id: string) => void;
};

const WeatherWidget = ({ id, onRemove }: WeatherWidgetProps) => {
  const { unit } = useWeatherContext();

  const temperature = unit === "C" ? 22 : 72; 
  const weatherCondition = "Sunny"; 

  return (
    <Card sx={{ width: 300, margin: 2 }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h5">New York</Typography>
          <WbSunnyIcon fontSize="large" />
        </Box>
        <Typography variant="h6">
          {temperature}°{unit}
        </Typography>
        <Typography>{weatherCondition}</Typography>
        <Box display="flex" justifyContent="flex-end">
          <IconButton onClick={() => onRemove(id)}>
            <DeleteIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default WeatherWidget;
