/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import { leftEllipse, largeRightEllipse } from '@assets/images';
import { StyledRightEllipse } from './styles';
import { Container, StyledLeftEllipse, ChildrenContainer } from '../styles';

interface MainBackgroundLayoutProps {
  children: React.ReactNode;
}

function MainBackgroundLayout({ children }: MainBackgroundLayoutProps) {
  return (
    <Container>
      <StyledLeftEllipse source={leftEllipse} />
      <StyledRightEllipse source={largeRightEllipse} />
      <ChildrenContainer>{children}</ChildrenContainer>
    </Container>
  );
}

export default MainBackgroundLayout;
