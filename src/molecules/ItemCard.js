import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Avatar } from '@mui/material';
import { Card, CardActionArea } from '@mui/material';
import { CardHeader, CardContent } from '@mui/material';
import { FolderOpen } from '@mui/icons-material';
import { format } from 'date-fns';

const ItemCard = ({ item }) => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{ borderRadius: 2 }}
      variant='outlined'
    >
      <CardActionArea onClick={() => navigate('/' + item.id)}>
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
      </CardActionArea>
    </Card>
  )
};

export default ItemCard;
