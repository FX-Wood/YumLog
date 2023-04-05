"use client";
import { Typography, TextField, Button, Grid, Stack } from "@mui/material";
import { useState } from "react";
import { getClient } from "@/lib/apollo-client";
import { gql, useMutation } from "@apollo/client";
import { UserRegisterInput } from '../../apollo/custom-resolvers/register';

export default function Home() {
  const REGISTER = gql`mutation Register($data: UserRegisterInput!) {
    register(data: $data) {
      email
        password
    }
  }`
  const client = getClient()
  const [isNewUser, setIsNewUser] = useState(true)
  
  if (isNewUser) {
    const [register, { data, loading, error }] = useMutation(REGISTER, { client })
    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const data = new FormData(e.currentTarget)
      const mutationInput: UserRegisterInput = {
        email: String(data.get('email')),
        password: String(data.get('password'))
      }
      await register({ variables: { data: mutationInput }}) 
    }
    return (
      <Grid container height="100vh" alignItems="center" justifyContent="center" direction="column">
        <Typography variant="h4" component="h1">YumLog</Typography>
        <Stack component="form" onSubmit={handleRegister} direction="column" spacing={1}>
          <TextField id="email" name="email" label="Email"  variant="outlined" autoFocus />
          <TextField id="password" name="password" label="Password" variant="outlined" />
          <Button type="submit" variant="contained">Register New Account</Button>
        </Stack>
      </Grid>
    )
  }
  return (
      <Grid container height="100vh" alignItems="center" justifyContent="center" direction="column">
        <Typography variant="h4" component="h1">YumLog</Typography>
        <Stack component="form" direction="column" spacing={1}>
          <TextField id="email" label="email" variant="outlined" />
          <TextField id="password" label="password" variant="outlined" />
          <Button variant="contained">Log In</Button>
        </Stack>
      </Grid>
  );
}
