import React, { useState } from 'react';
import { signupUser } from 'store/usersSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { Button, Grid, Typography } from '@mui/material';
import { Formik } from 'formik';
import FrontLayout from 'pages/FrontLayout';
import TextInput from 'atoms/TextInput';

const SignupView = () => {
  const [info, setInfo] = useState(false);
  const auth = useSelector(state => state.firebase.auth);
  const error = useSelector(state => state.users.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (auth.uid ?
    <Navigate to='/board' /> :
    <FrontLayout>
      <Typography variant='h4' m={2}>
        Sign Up
      </Typography>
      <Formik
        initialValues={{
          firstname: '',
          lastname: '',
          email: '',
          password: '',
          confirm: '',
        }}
        onSubmit={(values) => {
          if (values.password === values.confirm) {
            dispatch(signupUser({
              firstname: values.firstname,
              lastname: values.lastname,
              email: values.email,
              password: values.password,
            }));
          } else { setInfo(true) }
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Grid container columnSpacing={2}>
              <Grid item xs={12} sm={6}>
                <TextInput
                  onChange={handleChange}
                  value={values.name}
                  label='First Name'
                  name='firstname'
                  type='text'
                  autoFocus
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextInput
                  onChange={handleChange}
                  value={values.name}
                  label='Last Name'
                  name='lastname'
                  type='text'
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextInput
                  onChange={handleChange}
                  value={values.email}
                  label='Email'
                  name='email'
                  type='email'
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextInput
                  onChange={handleChange}
                  value={values.password}
                  label='Password'
                  name='password'
                  type='password'
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextInput
                  onChange={handleChange}
                  value={values.confirm}
                  label='Password'
                  name='confirm'
                  type='password'
                  required
                />
              </Grid>
            </Grid>
            <Button
              sx={{ mb: 1 }}
              type='submit'
              variant='contained'
              fullWidth
            >
              Sign Up
            </Button>
            <br />
            <Button
              onClick={() => navigate('/signin')}
              fullWidth
            >
              Sign In
            </Button>
            {error && <p>{error}</p>}
            {info && <p>Passowrds are not identical</p>}
          </form>
        )}
      </Formik>
    </FrontLayout>
  )
};

export default SignupView;
