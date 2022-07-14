import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const createItem = createAsyncThunk(
  'createItem', async (data, thunk) => {
    const firestore = thunk.extra.getFirestore();
    const ref = firestore.collection('items');
    try {
      return await ref.add({
        ...data, date: new Date(),
      }).then(() => data);
    } catch (err) { throw err }
  },
);

export const updateItem = createAsyncThunk(
  'updateItem', async ({ data, id }, thunk) => {
    const firestore = thunk.extra.getFirestore();
    const ref = firestore.collection('items');
    try {
      return await ref.doc(id).update({
        ...data,
      }).then(() => data);
    } catch (err) { throw err }
  },
);

export const removeItem = createAsyncThunk(
  'removeItem', async (id, thunk) => {
    const firestore = thunk.extra.getFirestore();
    const ref = firestore.collection('items');
    try {
      return await ref.doc(id).delete().then(() => id);
    } catch (err) { throw err }
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
      console.log(action.type, action.error.message);
      return state;
    },
    [updateItem.fulfilled]: (state, action) => {
      console.log(action.type, action.payload);
      return state;
    },
    [updateItem.rejected]: (state, action) => {
      console.log(action.type, action.error.message);
      return state;
    },
    [removeItem.fulfilled]: (state, action) => {
      console.log(action.type, action.payload);
      return state;
    },
    [removeItem.rejected]: (state, action) => {
      console.log(action.type, action.error.message);
      return state;
    },
  },
});

export default itemsSlice.reducer;
