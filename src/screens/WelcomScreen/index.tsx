import React from 'react';

import { IMAGES } from '@/constants';
import { WELCOM_DESCRIPTION, WELCOME_TITLE } from '@/constants';

import {
  Container,
  ButtonText,
  SectionDescription,
  SectionTitle,
  StartButton,
  StyledImage,
  Content,
} from './styles';

interface WelcomScreenProps {
  pressHandler: () => void;
}

function WelcomScreen({ pressHandler }: WelcomScreenProps) {
  return (
    <Container>
      <StyledImage source={IMAGES.welcomImg} />
      <Content>
        <SectionTitle>{WELCOME_TITLE}</SectionTitle>
        <SectionDescription>{WELCOM_DESCRIPTION}</SectionDescription>
      </Content>
      <StartButton onPress={pressHandler} activeOpacity={0.7}>
        <ButtonText>Get Started</ButtonText>
      </StartButton>
    </Container>
  );
}

export default WelcomScreen;
