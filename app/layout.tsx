import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import darkTheme from "./dark.theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Container>
            {children}
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
