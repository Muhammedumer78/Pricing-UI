'use client';
import React from 'react';
import { FIcon1, FIcon2, FIcon3 } from '../icons/Icons';
import { Box, HStack, StackProps, Icon, Text, Stack } from '@chakra-ui/react';

interface FeatureProps extends StackProps {
  icon: React.ElementType;
}


export const Feature = (props: FeatureProps) => {
  const { icon, children, ...rest } = props;
  return (
    <HStack {...rest} spacing='6' align='start'>
      <Icon as={icon} boxSize={['8', '8', '8', '12']}></Icon>
      <Text textAlign='left' fontSize='lg' fontWeight='bold'>
        {children}
      </Text>
    </HStack>
  );
}
export default function Features() {
  return (
    <Box as='section' maxW='906px' m='auto' pt='16' pb='8'>
      <Stack
        px={['6', '6', '8']}
        spacing={['6', '6', '5']}
        direction={['column', 'column', 'row']}
        width={['auto', '480px', 'auto']}
        margin='auto'
      >
        <Feature icon={FIcon1}>30 days money back Guarantee</Feature>
        <Feature icon={FIcon2}>No setup fees 100% hassle-free</Feature>
        <Feature icon={FIcon3}>
          No monthly subscription Pay once and for all
        </Feature>
      </Stack>
    </Box>
  );
}