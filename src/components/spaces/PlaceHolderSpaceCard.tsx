import { Box, useTheme } from '@mui/material';

export function PlaceHolderSpaceCard() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '8px',
        border: `1px solid ${theme.palette.divider}`,
        p: '1.6rem',
        backgroundColor: theme.palette.common.white,
      }}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'space-between',
          height: '4rem',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <Box
          sx={{
            height: '1.8rem',
            width: '90%',
            backgroundColor: theme.palette.grey[100],
            borderRadius: '5px',
          }}
        ></Box>
        <Box
          sx={{
            height: '1.8rem',
            width: '10%',
            backgroundColor: theme.palette.grey[100],
            borderRadius: '5px',
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          position: 'relative',
        }}
      >
        <Box
          sx={{
            height: '20rem',
            width: '100%',
            backgroundColor: theme.palette.grey[100],
            borderRadius: '8px',
            marginTop: '2rem',
            position: 'relative',
          }}
        ></Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '1rem',
          py: '2rem',
        }}
      >
        <Box
          sx={{
            height: '5rem',
            width: '100%',
            backgroundColor: theme.palette.grey[100],
            borderRadius: '5px',
          }}
        ></Box>
        <Box
          sx={{
            height: '5rem',
            width: '100%',
            backgroundColor: theme.palette.grey[100],
            borderRadius: '5px',
          }}
        ></Box>
      </Box>
    </Box>
  );
}


export default PlaceHolderSpaceCard;