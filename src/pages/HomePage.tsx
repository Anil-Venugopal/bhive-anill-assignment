import React from 'react';
import { Box, Container } from '@mui/material';
import Header from '../components/layout/Header';
import Hero from '../components/features/Hero';
import Features from '../components/features/Features';
import Spaces from '../components/spaces/Spaces';
import Download from '../components/download/Download';

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Box
          sx={{
            mt: { xs: '7.2rem', md: '9rem' },
          }}
        >
          <Hero />
          <Container maxWidth="lg">
            <Features />
            <Spaces />
            <Download />
          </Container>
        </Box>
      </main>
    </>
  );
};

export default HomePage;
