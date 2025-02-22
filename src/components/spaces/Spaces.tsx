import React, { useEffect } from 'react';
import { Typography, Box, Alert } from '@mui/material';
import Grid from '@mui/material/Grid2';
import SpaceCard from './SpaceCard';
import { FormattedMessage } from 'react-intl';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchWorkSpaces, selectWorkSpaces, selectLoading, selectError } from '../../redux/workSpaceSlice';
import PlaceHolderSpaceCard from './PlaceHolderSpaceCard';

const Spaces: React.FC = () => {
  const dispatch = useAppDispatch();
  const spaces = useAppSelector(selectWorkSpaces);
  const loading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);

  useEffect(() => {
    if (spaces.length === 0) {
      dispatch(fetchWorkSpaces());
    }
  }, [dispatch, spaces.length]);

  return (
    <Box component="section" sx={{ pt: 12 }}>
      <Typography variant="h4" gutterBottom sx={{ fontSize: { xs: '2.4rem', sm: '3.6rem' }, fontWeight: 700 }}>
        <FormattedMessage id="spaces.title" />
      </Typography>

      {loading && (
        <Grid container spacing={4} sx={{ pt: 4 }}>
          {[...Array(6)].map((_, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <PlaceHolderSpaceCard />
            </Grid>
          ))}
        </Grid>
      )}

      {error && <Alert severity="error">{error}</Alert>}

      {!loading && !error && spaces.length === 0 && (
        <Typography sx={{ textAlign: 'center', pt: 4 }}>No workspaces available.</Typography>
      )}

      {!loading && !error && spaces.length > 0 && (
        <Grid container spacing={4} sx={{ pt: 4 }}>
          {spaces.map((space) => (
            <Grid key={space.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <SpaceCard {...space} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Spaces;
