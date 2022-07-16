import React from 'react';
import { updateItem, removeItem } from 'store/itemsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { Formik } from 'formik';
import MainLayout from 'pages/MainLayout';
import TextInput from 'atoms/TextInput';

const UpdateView = () => {
  const { id } = useParams();
  const item = useSelector(state => state.firestore.data[id]);
  useFirestoreConnect([{ storeAs: id, collection: 'items', doc: id }]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <MainLayout>
      {item ? <Box sx={{ p: 2 }}>
        <Formik
          initialValues={{ name: item && item.name }}
          onSubmit={(values) => {
            dispatch(updateItem({ values, id, navigate }));
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
                Update
              </Button>
            </form>
          )}
        </Formik>
        <Button
          onClick={() => dispatch(removeItem({ id, navigate }))}
          variant='outlined'
          color='error'
          fullWidth
        >
          Remove
        </Button>
      </Box> : <p> loading... </p>}
    </MainLayout>
  )
};

export default UpdateView;
