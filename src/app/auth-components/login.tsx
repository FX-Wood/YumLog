"use client";
import { TextField, Button, Stack } from "@mui/material";
import { enqueueSnackbar } from "notistack";
import { getClient } from "@/lib/apollo-client";
import { gql, useMutation } from "@apollo/client";
import { UserCredentialInput } from '../../../apollo/custom-resolvers/auth-types';

const LOGIN = gql`mutation Login($data: UserCredentialInput!) {
  login(data: $data) {
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

export default function Login() {
  const client = getClient()
  const [ login ] = useMutation(LOGIN, { client })
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const mutationInput: UserCredentialInput = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value
    }
    const res = await login({ variables: { data: mutationInput }})
    if (res.data.login.code) {
        enqueueSnackbar({ 
            variant: 'error',
            autoHideDuration: 3000,
            message: res.data.message
        })
    }
    if (res.data.login.user) {
        enqueueSnackbar({
            variant: 'success',
            autoHideDuration: 3000,
            message: "Login successful",
        })
        localStorage.setItem('yumlog:jwt', res.data.login.jwt)
    }
  }

  return (
    <Stack component="form" onSubmit={handleLogin} direction="column" spacing={1}>
      <TextField id="email" name="email" label="email" variant="outlined" />
      <TextField id="password" name="password" label="password" variant="outlined" />
      <Button type="submit" variant="contained">Log In</Button>
    </Stack>
  )
}

