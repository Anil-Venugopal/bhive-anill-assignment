import React from 'react';
import { Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { FormattedMessage } from 'react-intl';
import Feature from './Feature';
import { features } from '../../constants/features';

const Features: React.FC = () => {
  return (
    <Box component="section" sx={{ pt: 6 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontSize: { xs: '2.4rem', sm: '3.6rem' },
          fontWeight: 700,
          color: 'text.primary',
          lineHeight: 1.21,
        }}
      >
        <FormattedMessage id="features.title" />
      </Typography>
      <Grid
        container
        sx={{ pt: 4 }}
        spacing={{
          xs: 2,
          md: 0,
        }}
      >
        {features.map((feature, index) => (
          <Grid key={index} size={{ xs: 6, md: 4, lg: 3 }}>
            <Feature {...feature} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Features;
