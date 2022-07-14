import React from 'react';
import { Box, Container } from '@mui/material';
import { Card, Typography } from '@mui/material';

const FrontLayout = ({ children }) => (
  <Box sx={{
    height: '100vh', textAlign: 'center', display: 'flex',
    alignItems: 'center', justifyContent: 'center',
  }}>
    <Container maxWidth='sm'>
      <Card
        sx={{
          bgcolor: 'inherit', m: 2,
          px: { xs: 2, md: 4 }, py: { xs: 3, md: 5 }
        }}
        variant='outlined'
      >
        {children}
      </Card>
      <Typography mt={2}>
        Copyright © ReactFirebase
      </Typography>
    </Container>
  </Box>
);

export default FrontLayout;
