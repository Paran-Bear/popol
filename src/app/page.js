'use client';

import { Grid, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';

export default function Home() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down(1024), { defaultMatches: true });

    const [mobile, setMobile] = useState(true);
    useEffect(() => {
        setMobile(isMobile);
    }, [isMobile]);
    return (
        <Grid container px={mobile ? 3 : 15} spacing={2} sx={{ height: '100vh' }}>
            <Grid item height={'fit-content'} mobile={12} tablet={12} laptop={6}>
                <Stack direction={'column'} spacing={2}>
                    <Typography variant={'h5'} sx={{ border: '1px solid black' }}>
                        이것은 시작하는 어쩌구...저쩌구..이것은 시작하는 어쩌구...저쩌구.. 이것은
                        시작하는 어쩌구...저쩌구.. 이것은 시작하는 어쩌구...저쩌구.. 이것은 시작하는
                        어쩌구...저쩌구..이것은 시작하는 어쩌구...저쩌구.. 이것은 시작하는
                        어쩌구...저쩌구..이것은 시작하는 어쩌구...저쩌구..이것은 시작하는
                        어쩌구...저쩌구.. 이것은 시작하는 어쩌구...저쩌구.. a1
                    </Typography>
                    <Typography variant={'h5'} sx={{ border: '1px solid black' }}>
                        area 2
                    </Typography>
                </Stack>
            </Grid>
            <Grid item height={'fit-content'} mobile={12} tablet={12} laptop={6}>
                <Stack direction={'column'} spacing={2}>
                    <Typography variant={'h5'} sx={{ border: '1px solid black' }}>
                        area 3
                    </Typography>
                    <Typography variant={'h5'} sx={{ border: '1px solid black' }}>
                        이것은 시작하는 어쩌구...저쩌구..이것은 시작하는 어쩌구...저쩌구.. 이것은
                        시작하는 어쩌구...저쩌구.. 이것은 시작하는 어쩌구...저쩌구.. 이것은 시작하는
                        어쩌구...저쩌구..이것은 시작하는 어쩌구...저쩌구.. 이것은 시작하는
                        어쩌구...저쩌구..이것은 시작하는 어쩌구...저쩌구..이것은 시작하는
                        어쩌구...저쩌구.. 이것은 시작하는 어쩌구...저쩌구.. a4
                    </Typography>
                </Stack>
            </Grid>
        </Grid>
    );
}
