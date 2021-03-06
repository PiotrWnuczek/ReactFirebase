import React from 'react';
import { createItem } from 'store/itemsSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { Formik } from 'formik';
import MainLayout from 'pages/MainLayout';
import TextInput from 'atoms/TextInput';

const CreateView = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <MainLayout>
      <Box sx={{ p: 2 }}>
        <Formik
          initialValues={{ name: '' }}
          onSubmit={(values) => {
            dispatch(createItem({ values, navigate }));
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

export default CreateView;
