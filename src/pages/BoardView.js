import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase'
import { Grid } from '@mui/material';
import MainLayout from 'pages/MainLayout';
import ItemCard from 'molecules/ItemCard';

const BoardView = () => {
  const items = useSelector(state => state.firestore.ordered.items);
  useFirestoreConnect([{ collection: 'items', orderBy: ['date', 'desc'] }]);

  return (
    <MainLayout>
      <Grid sx={{ p: 2 }} container spacing={2}>
        {items && items.map(item =>
          <Grid item xs={12} key={item.name}>
            <ItemCard item={item} />
          </Grid>
        )}
      </Grid>
    </MainLayout>
  )
};

export default BoardView;
