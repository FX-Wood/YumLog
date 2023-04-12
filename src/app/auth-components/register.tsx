"use client";
import { TextField, Button, Stack } from "@mui/material";
import { enqueueSnackbar } from "notistack";
import { getClient } from "@/lib/apollo-client";
import { gql, useMutation } from "@apollo/client";
import { UserCredentialInput } from '../../../apollo/custom-resolvers/auth-types';

const REGISTER = gql`mutation Register($data: UserCredentialInput!) {
  register(data: $data) {
    ... on AuthSuccess {
      user {
        email
      }
      jwt
    }
    ... on AuthError {
      code
      message
    }
  }
}`
  
export default function Register() {
  const client = getClient()
  const [register] = useMutation(REGISTER, { client })
  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const mutationInput: UserCredentialInput = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value
    }
    const { data } = await register({ variables: { data: mutationInput }}) 
    console.log(data)
    console.log(data.register.message)
    if (data.register.code) {
        enqueueSnackbar({ 
            variant: 'error',
            autoHideDuration: 3000,
            message: data.register.message
        })
    }
    if (data.register.user) {
        enqueueSnackbar({
            variant: 'success',
            autoHideDuration: 3000,
            message: "Login successful",
        })
        localStorage.setItem('yumlog:jwt', data.register.jwt)
    }
  }
  return (
    <Stack component="form" onSubmit={handleRegister} direction="column" spacing={1}>
      <TextField id="email" name="email" label="Email"  variant="outlined" autoFocus />
      <TextField id="password" name="password" label="Password" variant="outlined" />
      <Button type="submit" variant="contained">Register New Account</Button>
    </Stack>
  )
}

