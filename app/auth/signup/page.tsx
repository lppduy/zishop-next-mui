import { Button, Stack, TextField } from "@mui/material";
import Link from "next/link";

export default function SignUp() {
  return (
    <Stack spacing={2} className="w-full max-w-xs">
      <TextField label="Email" variant="outlined" type="email" />
      <TextField label="Password" variant="outlined" type="password" />
      <Button variant="contained">Sign Up</Button>
      <Link href="/auth/login" className="self-center">Login</Link>
    </Stack>
  );
}
