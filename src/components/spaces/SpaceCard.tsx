import React from 'react';
import { Typography, Box, useTheme } from '@mui/material';
import NavigationButton from './NavigationButton';
import BookPassButton from './BookPassButton';
import SpacesTag from './SpacesTag';
import { WorkSpace } from '../../types/WorkSpace';
import { apiBaseUrl } from '../../environment';

const SpaceCard: React.FC<WorkSpace> = ({
  name,
  images,
  google_maps_url,
  day_pass_price,
  day_pass_discounts_percentage,
}) => {
  const theme = useTheme();
  const discount = day_pass_discounts_percentage?.[10]?.value ?? 0;

  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '8px',
        border: `1px solid ${theme.palette.divider}`,
        p: '2rem 1.6rem',
        backgroundColor: theme.palette.common.white,
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', height: '4rem', alignItems: 'center' }}>
        <Typography sx={{ fontSize: '1.8rem', fontWeight: 600 }}>{name}</Typography>
        <NavigationButton url={google_maps_url} />
      </Box>

      {images?.length > 0 && (
        <Box
  component="img"
  src={images?.length ? apiBaseUrl + images[0] : '/placeholder.jpg'} // Fallback Image
  height="20rem"
  width="100%"
  sx={{
    objectFit: 'cover',
    borderRadius: '8px',
    marginTop: '2rem',
    position: 'relative',
  }}
  onError={(e) => (e.currentTarget.src = '/placeholder.jpg')} // Handle broken images
/>
      )}

      <SpacesTag />

      <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', pt: '2rem' }}>
        <BookPassButton noOfDays={1} price={day_pass_price} />
        <BookPassButton noOfDays={10} price={day_pass_price} discount={discount} />
      </Box>
    </Box>
  );
};

export default SpaceCard;
