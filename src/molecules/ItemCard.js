import React from 'react';
import { Typography, Avatar } from '@mui/material';
import { Card, CardHeader, CardContent } from '@mui/material';
import { FolderOpen } from '@mui/icons-material';
import { format } from 'date-fns';

const ItemCard = ({ item }) => (
  <Card
    sx={{ borderRadius: 2 }}
    variant='outlined'
  >
    <CardHeader
      title={item && item.name}
      subheader={item && format(item.date.toDate(), 'do MMMM Y')}
      avatar={<Avatar>
        <FolderOpen />
      </Avatar>}
    />
    <CardContent>
      <Typography>{item.description}</Typography>
    </CardContent>
  </Card>
);

export default ItemCard;
