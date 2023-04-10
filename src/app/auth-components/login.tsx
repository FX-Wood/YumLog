"use client";
import { TextField, Button, Stack } from "@mui/material";
import { getClient } from "@/lib/apollo-client";
import { gql, useMutation } from "@apollo/client";
import { UserLoginInput } from '../../../apollo/custom-resolvers/login';

const LOGIN = gql`mutation Login($data: UserLoginInput!) {
  login(data: $data) {
    email
    password
  }
}`

export default function Login() {
  const client = getClient()
  const [login, { data, loading, error }] = useMutation(LOGIN, { client })
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const mutationInput: UserLoginInput = {
      email: String(data.get('email')),
      password: String(data.get('password'))
    }
    await login({ variables: { data: mutationInput }})
  }

  return (
    <Stack component="form" onSubmit={handleLogin} direction="column" spacing={1}>
      <TextField id="email" name="email" label="email" variant="outlined" />
      <TextField id="password" name="password" label="password" variant="outlined" />
      <Button type="submit" variant="contained">Log In</Button>
    </Stack>
  )
}

