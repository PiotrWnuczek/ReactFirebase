import React from 'react';
import { useApp } from 'assets/useApp';
import { connect } from 'react-redux';
import { createItem } from 'store/itemsSlice';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { Button, IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { Formik } from 'formik';
import { format } from 'date-fns';
import MainLayout from 'pages/MainLayout';
import TextInput from 'atoms/TextInput';

const CreateView = ({ createItem }) => {
  const [sidebar, setSidebar] = useApp();
  const navigate = useNavigate();

  return (
    <MainLayout navbar={
      <Box sx={{ display: 'flex', alignItems: 'center', m: { xs: 1.2, sm: 2.2 } }}>
        <IconButton
          sx={{ display: { xs: 'flex', sm: 'none' }, mr: 2 }}
          onClick={() => setSidebar(!sidebar)}
        >
          <Menu />
        </IconButton>
        <Typography variant='h6'>
          Today is the {format(new Date(), 'do MMMM Y')}
        </Typography>
      </Box>
    }>
      <Box sx={{ p: 2 }}>
        <Formik
          initialValues={{ name: '' }}
          onSubmit={(values) => {
            createItem(values);
            navigate('/');
          }}
        >
          {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <TextInput
                onChange={handleChange}
                value={values.name}
                label='Name'
                name='name'
                type='text'
                size='small'
                autoFocus
                required
              />
              <Button
                sx={{ mb: 1 }}
                type='submit'
                variant='contained'
                fullWidth
              >
                Create
              </Button>
            </form>
          )}
        </Formik>
      </Box>
    </MainLayout>
  )
};

const mapDispatchToPorps = (dispatch) => ({
  createItem: (data) => dispatch(createItem(data)),
});

export default connect(null, mapDispatchToPorps)
  (CreateView);
