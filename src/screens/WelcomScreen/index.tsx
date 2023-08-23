/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';

import { welcomImg } from '../../../assets/images';
import { welcomDescription, welcomTitle } from '@/constants';

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
      <StyledImage source={welcomImg} />
      <Content>
        <SectionTitle>{welcomTitle}</SectionTitle>
        <SectionDescription>
          {welcomDescription}
        </SectionDescription>
      </Content>
      <StartButton onPress={pressHandler} activeOpacity={0.7}>
        <ButtonText>Get Started</ButtonText>
      </StartButton>
    </Container>
  );
}

export default WelcomScreen;
