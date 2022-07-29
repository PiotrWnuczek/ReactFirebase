import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import Picture from 'assets/picture.png';

const HeroSection = () => (
  <Grid
    sx={{ py: 5, px: { xs: 5, md: 30 } }}
    container
  >
    <Grid
      sx={{
        p: 2, display: 'flex', alignItems: 'center',
        justifyContent: 'center',
      }}
      item xs={12} sm={6}
    >
      <Box sx={{ textAlign: 'center' }}>
        <Typography
          sx={{
            my: 1, fontSize: { xs: 26, md: 36 },
            fontWeight: 600, letterSpacing: 2,
          }}
          variant='h1'
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Typography>
        <Typography
          sx={{
            my: 2, fontSize: { xs: 14, md: 18 },
            fontWeight: 400, letterSpacing: 1,
          }}
          variant='subtitle1'
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eros ex, eleifend quis lacus quis, tincidunt egestas arcu. Duis condimentum mauris in orci varius iaculis. Etiam tincidunt tempor turpis eget hendrerit. Praesent id sollicitudin turpis, et feugiat tortor. Aenean eros tellus, efficitur nec interdum vel, viverra tincidunt est
        </Typography>
      </Box>
    </Grid>
    <Grid
      sx={{
        p: 2, display: 'flex', alignItems: 'center',
        justifyContent: 'center',
      }}
      item xs={12} sm={6}
    >
      <Box
        sx={{
          width: '100%', height: 'auto',
          maxWidth: 400,
        }}
        component='img'
        src={Picture}
      />
    </Grid>
  </Grid>
);

export default HeroSection;
