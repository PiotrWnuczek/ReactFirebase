import React, { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { TextField, Button } from '@mui/material';
import { blue } from '@mui/material/colors';
import { Formik } from 'formik';

const FormSection = () => {
  const [info, setInfo] = useState(false);

  return (
    <Box sx={{
      py: 7, px: { xs: 5, md: 30 },
      textAlign: 'center', background: blue[100],
    }}>
      <Typography
        sx={{
          my: 1, fontSize: { xs: 22, md: 32 },
          fontWeight: 600, letterSpacing: 2,
        }}
        variant='h2'
      >
        Lorem ipsum dolor sit amet
      </Typography>
      <Typography
        sx={{
          my: 2, fontSize: { xs: 12, md: 16 },
          fontWeight: 400, letterSpacing: 1,
        }}
        variant='subtitle2'
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eros ex, eleifend quis lacus quis, tincidunt egestas arcu. Duis condimentum mauris in orci varius iaculis
      </Typography>
      <Formik
        initialValues={{ email: '' }}
        onSubmit={(values) => {
          fetch('url', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: values.email })
          })
            .then(setInfo(true))
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.error(err));
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Grid sx={{ px: { xs: 5, md: 10 } }} container spacing={1}>
              <Grid item xs={12} sm={9}>
                <TextField
                  sx={{ backgroundColor: 'secondary.light', borderRadius: 1 }}
                  onChange={handleChange}
                  value={values.email}
                  placeholder='Email'
                  name='email'
                  type='email'
                  variant='outlined'
                  size='small'
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Button
                  sx={{ py: 0.85 }}
                  type='submit'
                  variant='contained'
                  fullWidth
                >
                  Zapisz się
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
      <Typography
        sx={{ mt: 3, fontSize: { xs: 10, md: 12 } }}
        variant='body2'
      >
        {info ? 'Thank You' : 'Form Info'}
      </Typography>
    </Box>
  )
};

export default FormSection;
