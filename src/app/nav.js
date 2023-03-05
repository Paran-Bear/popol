'use client';
import { AppBar, Box, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function Nav() {
    const route = useRouter();
    /*
     * 페이지를 이동한다.
     * @param {string} url 이동할 링크
     * @returns void
     * */
    const link = (url) => {
        route.replace(url);
    };

    return (
        <Box sx={{ flexGrow: 1 }} mb={2}>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton
                        size='large'
                        edge='start'
                        color='inherit'
                        aria-label='menu'
                        sx={{ mr: 2 }}
                    ></IconButton>
                    <Stack direction={'row'} spacing={3}>
                        <Typography
                            variant='h6'
                            className='navBtn'
                            component='div'
                            onClick={() => {
                                link('/');
                            }}
                        >
                            이력서
                        </Typography>

                        <Typography
                            variant='h6'
                            className='navBtn'
                            component='div'
                            onClick={() => {
                                link('/excer');
                            }}
                        >
                            연습장
                        </Typography>
                    </Stack>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
