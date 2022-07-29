import React from 'react';
import { signoutUser } from 'store/usersSlice';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { Drawer, Typography, Avatar, List } from '@mui/material';
import { ListItem, ListItemText, ListItemAvatar } from '@mui/material';
import { Add, Dashboard, Logout } from '@mui/icons-material';

const SideBar = ({ ...props }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Drawer {...props}>
      <List>
        <ListItem sx={{ mb: 12 }}>
          <Typography variant='h5'>
            ReactFirebase
          </Typography>
        </ListItem>
        <ListItem
          sx={{ textTransform: 'uppercase' }}
          selected={location.pathname === '/board'}
          onClick={() => navigate('/board')}
          button
        >
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: 'primary.main' }}>
              <Dashboard />
            </Avatar>
          </ListItemAvatar>
          <ListItemText secondary='Board' />
        </ListItem>
        <ListItem
          sx={{ textTransform: 'uppercase' }}
          selected={location.pathname === '/create'}
          onClick={() => navigate('/create')}
          button
        >
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: 'primary.main' }}>
              <Add />
            </Avatar>
          </ListItemAvatar>
          <ListItemText secondary='Create' />
        </ListItem>
      </List>
      <List>
        <ListItem
          sx={{ textTransform: 'uppercase', whiteSpace: 'nowrap' }}
          onClick={() => dispatch(signoutUser())}
          button
        >
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: 'primary.main' }}>
              <Logout />
            </Avatar>
          </ListItemAvatar>
          <ListItemText secondary='Sign Out' />
        </ListItem>
      </List>
    </Drawer>
  )
};

export default SideBar;
