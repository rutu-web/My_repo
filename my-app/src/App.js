
import * as React from 'react';
import './App.css';
import Card from '@mui/material/Card';

import Paper from '@mui/material/Paper';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import { styled } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


import { useState, useEffect } from 'react';



function App() {

  const [users, setUsers] = useState([]);
  
  
  const getData = async () => {
    
    const res = await fetch('https://reqres.in/api/users');
    const data = await res.json();
    setUsers(data.data);
    
};

  
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));



  
  

  return(
    <>
{/* Navbar */}

<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Navbar
          </Typography>
          <>
          <Button color="inherit" onClick={getData}>Get Users</Button>

          

        
      </>
        </Toolbar>
      </AppBar>
      
    </Box>


{/* display user data */}
    <div>
          {users.length > 0 && (
        <div className='parent'>
          {users.map(user => (



       
            <Card variant="outlined" key={user.id} style={{
              width: 300,
              display: 'inline-block',
              margin: 10
            }}>

  <CardMedia
        sx={{ height: 140 }}
        image={user.avatar}
        
      />
              <CardContent>
                <Typography>  {user.id} </Typography>
                <Typography>  {user.email} </Typography>
                <Typography>  {user.first_name} {user.last_name}</Typography>
                
              </CardContent>


            </Card>
           
            
          ))}
        </div>
        
      )}
            </div>

    </>



    
    
  )
}

export default App;
