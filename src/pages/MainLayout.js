import React, { useState } from 'react';
import { Box, Typography, AppBar } from '@mui/material';
import { Divider, IconButton, Toolbar } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { format } from 'date-fns';
import SideBar from 'organisms/SideBar';

const MainLayout = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  const width = { xs: 180, sm: 140, md: 180 };
  const appbar = { sm: `calc(100% - 140px)`, md: `calc(100% - 180px)` };

  return (
    <Box sx={{ display: 'flex' }}>
      <SideBar
        sx={{
          display: { xs: 'block', sm: 'none' }, width, '& .MuiDrawer-paper':
            { bgcolor: 'secondary.dark', justifyContent: 'space-between', width },
        }}
        variant='temporary'
        open={sidebar}
        onClose={() => setSidebar(!sidebar)}
      />
      <SideBar
        sx={{
          display: { xs: 'none', sm: 'block' }, width, '& .MuiDrawer-paper':
            { bgcolor: 'secondary.dark', justifyContent: 'space-between', width },
        }}
        variant='permanent'
      />
      <AppBar
        sx={{ width: appbar, bgcolor: 'secondary.light' }}
        color='inherit'
        elevation={0}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', m: { xs: 1.2, sm: 2.2 } }}>
          <IconButton
            sx={{ display: { xs: 'flex', sm: 'none' }, mr: 2 }}
            onClick={() => setSidebar(!sidebar)}
          >
            <Menu />
          </IconButton>
          <Typography variant='h6'>
            Today is the {format(new Date(), 'do MMMM Y')}
          </Typography>
        </Box>
        <Divider />
      </AppBar>
      <Box sx={{ flexGrow: 1 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  )
};

export default MainLayout;
