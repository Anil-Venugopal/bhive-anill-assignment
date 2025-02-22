import { Typography, Box, useTheme } from '@mui/material';

import navigationIcon from '../../assets/navigation-icon.svg';

export interface NavigationButtonProps {
  url: string;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ url }) => {
  const theme = useTheme();
  return (
    <Box
      component="a"
      href={url}
      target="_blank"
      sx={{
        height: '4.4rem',
        width: '4.4rem',
        borderRadius: '5.6px',
        border: `0.4px solid #EEE7E7`,
        backgroundColor: '#F9F9F9',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.4rem',
        cursor: url ? 'pointer' : 'not-allowed',
        pt: '0.4rem',
        transition: 'box-shadow 0.3s ease-in-out',
        textDecoration: 'none',
        // hover show shadow
        '&:hover': {
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        },
      }}
    >
      <img src={navigationIcon} height="18px" color="#1C1B1F"></img>
      <Typography
        component="div"
        sx={{
          fontSize: '0.8rem',
          fontWeight: 500,
          color: theme.palette.grey[300],
        }}
      >
        0 Kms
      </Typography>
    </Box>
  );
};

export default NavigationButton;
