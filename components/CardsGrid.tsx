import * as React from 'react';
import Grid from '@mui/material/Grid';
import MediaCard from './Cards';

export default function CardsGrid({n}, ) {
  const cards = Array.from({ length: n }); 

  return (
    <Grid 
    container 
    spacing={2}      
    justifyContent="left"
    alignItems="center"
    >
      {cards.map((card, index) => (
        <Grid item xs={6} sm={4} md={4} lg={4} key={index}>
          <MediaCard />
        </Grid>
      ))}
    </Grid>
  );
}
