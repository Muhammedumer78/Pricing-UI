'use client';
import { Box } from '@chakra-ui/react';
import Header from './components/Header';
import Pricing from './components/Pricing';
import Features from './components/Features';
export default function Home() {
  return (
    <Box backgroundColor='white' minH='100vh'>
      <Header />
      <Pricing />
      <Features />
    </Box>
  );
}