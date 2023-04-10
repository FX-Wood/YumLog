"use client";
import { TextField, Button, Stack } from "@mui/material";
import { getClient } from "@/lib/apollo-client";
import { gql, useMutation } from "@apollo/client";
import { UserRegisterInput } from '../../../apollo/custom-resolvers/register';

const REGISTER = gql`mutation Register($data: UserRegisterInput!) {
  register(data: $data) {
    email
    password
  }
}`
  
export default function Register() {
  const client = getClient()
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
    <Stack component="form" onSubmit={handleRegister} direction="column" spacing={1}>
      <TextField id="email" name="email" label="Email"  variant="outlined" autoFocus />
      <TextField id="password" name="password" label="Password" variant="outlined" />
      <Button type="submit" variant="contained">Register New Account</Button>
    </Stack>
  )
}

