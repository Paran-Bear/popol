'use client';
import MobileNav from '@/app/mobileNav';
import Nav from '@/app/nav';
import Theme from '@/theme/theme';
import { ThemeProvider, useMediaQuery, useTheme } from '@mui/material';
import './globals.css';

export default function RootLayout({ children }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'),{defaultMatches:true});
  return (<html lang='en'>
  <head />
  <body>
  <ThemeProvider theme={Theme}>
    {isMobile?<MobileNav />:<Nav />}
    {children}
  </ThemeProvider>
  </body>
  </html>);
}
