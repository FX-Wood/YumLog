"use client";
import { Grid, Stack, Typography, Link } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { SnackbarProvider } from 'notistack';
import { useState } from "react";

import Register from './auth-components/register'
import Login from './auth-components/login'


export default function Home() {
  const [isNewUser, setIsNewUser] = useState(true)
  return (
    <CssBaseline>
      <SnackbarProvider>
        <Grid container height="100vh" alignItems="center" justifyContent="center" direction="column">
          <Stack  spacing={2}>
            <Typography variant="h4" component="h1">YumLog</Typography>
            {isNewUser ? <Register /> : <Login />}
            <Typography variant="body1">
              {isNewUser ? "Already have an account?" : "No account?"}
              <Link component="button" sx={{ pl: 0.5 }} onClick={() => setIsNewUser(!isNewUser)} >
                {isNewUser ? "Log in" : "Create one"}
              </Link>
            </Typography>
          </Stack>
        </Grid>
      </SnackbarProvider>
    </CssBaseline>
  );
}
