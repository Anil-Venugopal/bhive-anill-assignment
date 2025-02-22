import React from 'react';
import { AppBar, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import logo from '../../assets/logo.svg';
import callIcon from '../../assets/call-icon.svg';

const supportPhoneNumber = '+919014373823';

const Header: React.FC = () => {
  const theme = useTheme();

  return (
    <AppBar
      position="fixed"
      sx={{
        height: { xs: '72px', md: '90px' },
        boxShadow: {
          xs: `1px 1px 3px 1px ${theme.palette.grey[100]}`,
          md: 'none',
        },
        backgroundColor: theme.palette.common.white,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: {
          xs: '0 16px',
          lg: '0 120px',
        },
        flexDirection: 'row',
      }}
    >
      <Box
        component="img"
        src={logo}
        width="125px"
        height="40px"
        sx={{
          cursor: 'pointer',
        }}
      ></Box>
      <Box
        component="a"
        href={`tel:${supportPhoneNumber}`}
        sx={{
          lineHeight: '0',
        }}
      >
        <img src={callIcon} width="72px" height="72px" />
      </Box>
    </AppBar>
  );
};

export default Header;
