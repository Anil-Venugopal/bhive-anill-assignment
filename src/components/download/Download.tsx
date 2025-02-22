import React from 'react';
import Grid from '@mui/material/Grid2';
import { Typography, Box, useTheme } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import playStoreImage from '../../assets/playstore.png';
import appStoreImage from '../../assets/appstore.png';
import screenshots from '../../assets/screenshots.svg';

const downloadLinks = {
  playStore:
    'https://play.google.com/store/apps/details?id=com.bhive.workspace',
  appStore: 'https://apps.apple.com/in/app/bhive-workspace/id6463923684',
};

const Download: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      component="section"
      sx={{
        pt: {
          xs: 8,
          md: 16,
        },
        pb: 4,
      }}
    >
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
        <FormattedMessage id="download.title" />
      </Typography>
      <Box
        sx={{
          display: 'flex',
          borderRadius: '8px',
          border: `1px solid ${theme.palette.divider}`,
          p: '2rem 1.6rem',
          backgroundColor: 'common.white',
          boxShadow: '0px 1px 8px 0px #0000000F',
          position: 'relative',
          overflow: 'visible',
          mt: {
            xs: 4,
            md: 28,
          },
        }}
      >
        <Grid container spacing={0} sx={{ pt: 4 }}>
          <Grid size={{ xs: 12, md: 6 }} sx={{
            display: {
              xs: 'flex',
            },
            justifyContent: {
              xs: 'center',
            },
          }}>
            <Box
              component="img"
              src={screenshots}
             
              sx={{
                width: {
                  xs: '80vw',
                  md: '40rem',
                },
                objectFit: 'cover',
                borderRadius: '8px',
                marginTop: '2rem',
                position: {
                  xs: 'relative',
                  md: 'absolute',
                },
                bottom: '0',
                left: {
                  xs: 'unset',
                  md: '3rem',
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              sx={{
                fontFamily: 'Inter',
                fontSize: '2rem',
                fontWeight: 500,
                lineHeight: '2.8rem',
                textAlign: 'left',
                color: '#605F5F',
                display: {
                  xs: 'none',
                  md: 'unset',
                },
              }}
            >
              <FormattedMessage id="download.description" />
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: {
                  xs: 'center',
                  md: 'unset',
                },
                gap: '2rem',
                mt: 4,
              }}
            >
              <a href={downloadLinks.playStore} target="_blank">
                <img src={playStoreImage} alt="Download" height="45px" />
              </a>
              <a href={downloadLinks.appStore} target="_blank">
                <img src={appStoreImage} alt="Download" height="45px" />
              </a>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Download;
