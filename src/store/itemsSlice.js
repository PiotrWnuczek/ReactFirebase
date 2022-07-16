import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const createItem = createAsyncThunk(
  'createItem', async ({ values, navigate }, thunk) => {
    const firestore = thunk.extra.getFirestore();
    const ref = firestore.collection('items');
    try {
      return await ref.add({
        ...values, date: new Date(),
      }).then(
        res => navigate('/' + res.id),
      ).then(() => values);
    } catch (error) { throw error }
  },
);

export const updateItem = createAsyncThunk(
  'updateItem', async ({ values, id, navigate }, thunk) => {
    const firestore = thunk.extra.getFirestore();
    const ref = firestore.collection('items');
    try {
      return await ref.doc(id).update({
        ...values,
      }).then(
        () => navigate('/'),
      ).then(() => values);
    } catch (error) { throw error }
  },
);

export const removeItem = createAsyncThunk(
  'removeItem', async (id, thunk) => {
    const firestore = thunk.extra.getFirestore();
    const ref = firestore.collection('items');
    try {
      return await ref.doc(id).delete().then(() => id);
    } catch (error) { throw error }
  },
);

const itemsSlice = createSlice({
  name: 'items', initialState: {},
  extraReducers: {
    [createItem.fulfilled]: (state, action) => {
      console.log(action.type, action.payload);
      return state;
    },
    [createItem.rejected]: (state, action) => {
      console.log(action.type, action.error);
      return state;
    },
    [updateItem.fulfilled]: (state, action) => {
      console.log(action.type, action.payload);
      return state;
    },
    [updateItem.rejected]: (state, action) => {
      console.log(action.type, action.error);
      return state;
    },
    [removeItem.fulfilled]: (state, action) => {
      console.log(action.type, action.payload);
      return state;
    },
    [removeItem.rejected]: (state, action) => {
      console.log(action.type, action.error);
      return state;
    },
  },
});

export default itemsSlice.reducer;
