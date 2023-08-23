/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { leftEllipse, rightEllipse } from '@assets/images';
import { StyledRightEllipse } from './styles';
import { Container, StyledLeftEllipse, ChildrenContainer } from '../styles';

interface MainBackgroundLayoutProps {
  children: React.ReactNode;
}

function MainBackgroundLayout({ children }: MainBackgroundLayoutProps) {
  return (
    <Container>
      <StyledLeftEllipse source={leftEllipse} />
      <StyledRightEllipse source={rightEllipse} />
      <ChildrenContainer>{children}</ChildrenContainer>
    </Container>
  );
}

export default MainBackgroundLayout;
