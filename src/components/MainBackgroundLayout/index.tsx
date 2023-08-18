/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { leftEllipse, rightEllipse } from '../../../assets/images';
import {
  Container, StyledLeftEllipse, ChildrenContainer, StyledRightEllipse,
} from './styles';

interface MainBackgroundLayoutProps {
  children: React.ReactNode;
}

function MainBackgroundLayout(props: MainBackgroundLayoutProps) {
  return (
    <Container>
      <StyledLeftEllipse source={leftEllipse} />
      <StyledRightEllipse source={rightEllipse} />
      <ChildrenContainer>{props.children}</ChildrenContainer>
    </Container>
  );
}

export default MainBackgroundLayout;
