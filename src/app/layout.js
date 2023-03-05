'use client';
import MobileNav from '@/app/mobileNav';
import Nav from '@/app/nav';
import Theme from '@/theme/theme';
import { ThemeProvider, useMediaQuery, useTheme } from '@mui/material';
import './globals.css';
import { useEffect, useState } from 'react';

export default function RootLayout({ children }) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'), { defaultMatches: true });
    const [mobile, setMobile] = useState(true);
    useEffect(() => {
        setMobile(isMobile);
    }, [isMobile]);
    return (
        <html lang='en'>
            <head />
            <body>
                <ThemeProvider theme={Theme}>
                    {mobile ? <MobileNav /> : <Nav />}
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
