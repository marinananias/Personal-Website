import React from "react";
import Grid from "@mui/material/Grid";

export default function ResGrid({ children }) {
  return (
    <Grid
      container
      spacing={{ xs: 3, sm: 7, md: 5, lg: 10 }}
      justifyContent="center"
      alignItems="center"
    >
      {React.Children.map(children, (child, index) => (
        <Grid item xs={10} sm={7} md={7} lg={5} key={index}>
          {child}
        </Grid>
      ))}
    </Grid>
  );
}
