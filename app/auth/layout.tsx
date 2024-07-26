import { Box } from "@mui/material";

type Props = {
  children?: React.ReactNode;
}

export default function AuthLayout({children}: Props) {
  return <Box className='h-screen flex items-center justify-center'>
    {children}
  </Box>;
}
