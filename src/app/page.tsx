"use client";
import { Grid, Typography, Link } from '@mui/material'
import { useState } from "react";
import Register from './auth-components/register'
import Login from './auth-components/login'


export default function Home() {
  const [isNewUser, setIsNewUser] = useState(true)
  return (
    <Grid container height="100vh" alignItems="center" justifyContent="center" direction="column">
      <Typography variant="h4" component="h1">YumLog</Typography>
      {isNewUser ? <Register /> : <Login />}
      <Typography variant="body1">
        {isNewUser ? "Already have an account?" : "No account?"}
        <Link component="button" onClick={() => setIsNewUser(!isNewUser)} >
          {isNewUser ? "Log in" : "Create one"}
        </Link>
      </Typography>
    </Grid>
  );
}
