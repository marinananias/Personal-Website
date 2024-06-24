import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export default function MediaCard() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Lato", '"Helvetica Neue"', "Roboto", "sans-serif"].join(
        ","
      ),
    },
  });

  const matchesXsOnly = useMediaQuery(theme.breakpoints.only("xs"));
  const matchesLgOnly = useMediaQuery(theme.breakpoints.only("lg"));

  const cardMaxWidth = matchesXsOnly ? "100%" : matchesLgOnly ? 350 : 250;

  return (
    <Card sx={{ maxWidth: cardMaxWidth }}>
      <CardMedia
        sx={{ height: "auto" }}
        image="images/logo.jpeg"
        title="Project Title"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Project Title
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Description
        </Typography>
      </CardContent>
      <CardActions>{/* GitHub Icon + Link */}</CardActions>
    </Card>
  );
}
