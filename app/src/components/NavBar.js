import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function NavBar() {

  const barStyle = {
    display: "flex",
    color: "black",
    backgroundColor: "white",
    justifyContent: "space-between"
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={barStyle}>
          <Typography variant="h6">
            NOTES
          </Typography>
          <Button color="inherit">New Note</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}