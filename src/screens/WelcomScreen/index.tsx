import React from 'react';

import { welcomImg } from '../../../assets/images';
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

const WelcomScreen = (props: WelcomScreenProps) => {
  return (
    <Container>
      <StyledImage source={welcomImg} />
      <Content>
        <SectionTitle>Manage your tasks</SectionTitle>
        <SectionDescription>
          Organize, plan, and collaborate on tasks with Modsen todo list. Your busy life deserves
          this. you can manage checklist and your goal.
        </SectionDescription>
      </Content>
      <StartButton onPress={props.pressHandler} activeOpacity={0.7}>
        <ButtonText>Get Started</ButtonText>
      </StartButton>
    </Container>
  );
};

export default WelcomScreen;
