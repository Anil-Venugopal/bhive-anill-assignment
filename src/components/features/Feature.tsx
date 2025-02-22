import React from 'react';
import { Typography, Box, useTheme } from '@mui/material';
import { FormattedMessage } from 'react-intl';

// Feature component props
export interface FeatureProps {
  icon: string;
  messageId: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, messageId }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        boxShadow: {
          xs: `1px 1px 3px 1px ${theme.palette.grey[100]}`,
          md: 'unset',
        },
        backgroundColor: {
          xs: 'common.white',
          md: 'transparent',
        },
        border: {
          xs: `0.6px solid ${theme.palette.divider}`,
          md: 'unset',
        },
        borderRadius: {
          xs: `8px`,
          md: 'unset',
        },
        // height: '8rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        flexDirection: {
          xs: 'column',
          md: 'row',
        },
        gap: {
          xs: '1rem',
          md: '2.4rem',
        },
        p: 2,
        cursor: 'pointer',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'translate(0.5rem, -0.5rem)',
          transition: 'transform 0.3s ease-in-out',
          backgroundColor: 'common.white',
          borderRadius: '8px',
        },
        ':hover::after': {
          md: {
            content: "'One liner details about the feature'",
            position: 'absolute',
            top: '4rem',
            left: '6.8rem',
            color: theme.palette.text.primary,
            fontSize: '1.2rem',
            fontWeight: '500',
            zIndex: 1,
            transition: 'opacity 0.3s ease-in-out',
            opacity: 0.7,
          },
        },
        ':not(:nth-child(4)):not(:nth-child(8))': {
          borderRight: `0.6px solid ${theme.palette.divider}`,
        },
        ':nth-child(-n+4)': {
          borderBottom: `0.6px solid ${theme.palette.divider}`,
        },
      }}
    >
      <Box component="img" src={icon} height="28px" width="28px"></Box>
      <Typography
        variant="body2"
        align="center"
        sx={{
          fontSize: {
            xs: '1.4rem',
            md: '1.8rem',
          },
          fontWeight: '500',
        }}
      >
        <FormattedMessage id={messageId} />
      </Typography>
    </Box>
  );
};

export default Feature;
