import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography, Link } from '@mui/material';
import BasicLayout from 'about/BasicLayout';
import HeroSection from 'about/HeroSection';
import FormSection from 'about/FormSection';

const AboutView = () => {
  const navigate = useNavigate();

  return (
    <BasicLayout>
      <HeroSection />
      <FormSection />
      <Box sx={{ p: 5, bgcolor: 'secondary.light' }}>
        <Box sx={{
          display: 'flex', flexWrap: 'wrap',
          alignItems: 'center', justifyContent: 'center',
        }}>
          <Button
            sx={{ mx: 1 }}
            onClick={() => navigate('/privacy')}
            size='small'
          >
            Privacy
          </Button>
          <Button
            sx={{ mx: 1 }}
            onClick={() => navigate('/rules')}
            size='small'
          >
            Rules
          </Button>
        </Box>
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
      </Box>
    </BasicLayout>
  )
};

export default AboutView;
