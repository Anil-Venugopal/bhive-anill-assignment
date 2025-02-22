import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import heroImage from '../../assets/hero-wide.png';
import { useTheme } from '@mui/material/styles';

const videoUrl =
  '/hero-video.mp4';

const Hero: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        textAlign: 'start',
        height: {
          xs: '500px',
          sm: '440px',
        },
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          background: `url(${heroImage}) center center / cover no-repeat`,
          backgroundPosition: 'right',
          textAlign: 'start',
          width: '100%',
          height: {
            xs: '300px',
            lg: '440px',
          },
          overflow: 'hidden',
          right: '0',
          top: '0',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: {
            xs: '180px',
            md: '216px',
          },
          right: {
            xs: '0',
            md: '2%',
            lg: '116px',
          },
          transform: 'translateY(-50%)',
          width: '380px',
          maxWidth: '500px',
          overflow: 'hidden',
          borderRadius: '8px',
          mixBlendMode: 'multiply',
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>

      <Container maxWidth="lg" sx={{ height: '100%', position: 'relative' }}>
        <Box
          sx={{
            pt: {
              sm: '80px',
              xs: '400px',
            },
            maxWidth: '806px',
            width: {
              xs: '100%',
              sm: '60%',
            },
          }}
        >
          <Typography
            component="h1"
            variant="h3"
            sx={{
              fontSize: { xs: '2rem', sm: '3rem', lg: '58px' },
              fontWeight: 700,
              color: 'text.primary',
              lineHeight: 1.21,
              textAlign: {
                xs: 'center',
                sm: 'start',
              },
            }}
          >
            <FormattedMessage id="hero.title" />
          </Typography>
          <Typography
            component="h1"
            variant="h3"
            sx={{
              fontSize: { xs: '2rem', sm: '3rem', lg: '58px' },
              textAlign: {
                xs: 'center',
                sm: 'start',
              },
              fontWeight: 700,
              color: 'text.primary',
              lineHeight: 1.21,
            }}
          >
            <Box component="span">
              <FormattedMessage id="hero.subtitle" />
            </Box>
            <Box
              component="span"
              sx={{
                color: theme.palette.primary.dark,
              }}
            >
              <FormattedMessage id="hero.subtilePrice" />
            </Box>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
