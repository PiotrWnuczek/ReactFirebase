import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const createItem = createAsyncThunk(
  'createItem', async (data, thunk) => {
    const firestore = thunk.extra.getFirestore();
    const ref = firestore.collection('items');
    return await ref.add({
      ...data, date: new Date(),
    }).then(() => (data)).catch((err) => (err));
  },
);

/*export const createItem = (data) => (dispatch, gs, { getFirestore }) => {
  const firestore = getFirestore();
  const ref = firestore.collection('items');
  ref.add({
    ...data, date: new Date(),
  }).then(() => {
    dispatch({ type: 'createItemSuccess', payload: data });
  }).catch((err) => {
    dispatch({ type: 'createItemError', payload: err });
  })
};*/

export const updateItem = (data, id) => (dispatch, gs, { getFirestore }) => {
  const firestore = getFirestore();
  const ref = firestore.collection('items');
  ref.doc(id).update({
    ...data,
  }).then(() => {
    dispatch({ type: 'updateItemSuccess', payload: data });
  }).catch((err) => {
    dispatch({ type: 'updateItemError', payload: err });
  })
};

export const removeItem = (id) => (dispatch, gs, { getFirestore }) => {
  const firestore = getFirestore();
  const ref = firestore.collection('items');
  ref.doc(id).delete().then(() => {
    dispatch({ type: 'removeItemSuccess', payload: id });
  }).catch((err) => {
    dispatch({ type: 'removeItemError', payload: err });
  })
};

const itemsSlice = createSlice({
  name: 'items', initialState: {},
  extraReducers: {
    [createItem.fulfilled]: (state, action) => {
      console.log(action.type, action.payload);
      return state;
    },
  },
});

export default itemsSlice.reducer;
