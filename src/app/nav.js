'use client';
import { AppBar, Box, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function Nav() {

  const route = useRouter();
/*
* 페이지를 이동한다.
* @param {string} url 이동할 링크
* @returns void
* */
  const link = (url) => {
    route.replace(url)
  };



  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
          </IconButton>
         <Stack direction={'row'} spacing={3}>
            <Typography variant='h6' component='div'>
              이력서
            </Typography>
            <Typography variant='h6' component='div' onClick={()=>{link('/')}}>
              실습실
            </Typography>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
