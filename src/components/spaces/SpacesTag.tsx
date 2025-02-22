import { Box, Typography } from '@mui/material';
import premiumIcon from '../../assets/premium-icon.svg';

export default function SpacesTag() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        position: 'absolute',
        top: '3rem',
        left: '1rem',
        backgroundColor: 'common.black',
        borderRadius: '5px',
        color: '#FFBB00',
        border: '1px solid #FFBB0080',
        p: '0.5rem 1rem',
        backgroundImage: 'linear-gradient(45deg, #263238, #2F4B59)',
      }}
    >
      <Box component="img" src={premiumIcon}></Box>
      <Typography
        sx={{ ml: 1, textShadow: '0px 0px 3px #FFD04F99' }}
      >
        Workspace
      </Typography>
    </Box>
  );
}
