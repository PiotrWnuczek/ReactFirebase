import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Button } from '@mui/material';
import { Card, Typography, Link } from '@mui/material';

const FrontLayout = ({ children }) => {
  const navigate = useNavigate();

  return (
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

        <Box sx={{
          my: 1, display: 'flex', flexWrap: 'wrap',
          alignItems: 'center', justifyContent: 'center',
        }}>
          <Typography>
            Copyright © created by
          </Typography>
          <Link
            sx={{ ml: 0.5 }}
            href='#'
            target='_blank'
            underline='hover'
          >
            Author
          </Link>
        </Box>
        <Button
          sx={{ mx: 1 }}
          onClick={() => navigate('/')}
          size='small'
        >
          About
        </Button>
      </Container>
    </Box>
  )
};

export default FrontLayout;
