import React from 'react';
import { leftEllipse, largeRightEllipse } from '../../../assets/images';
import { Container, StyledLeftEllipse, ChildrenContainer, StyledRightEllipse } from './styles';

interface MainBackgroundLayoutProps {
  children: React.ReactNode;
}

const MainBackgroundLayout: React.FC<MainBackgroundLayoutProps> = (props) => {
  return (
    <Container>
      <StyledLeftEllipse source={leftEllipse} />
      <StyledRightEllipse source={largeRightEllipse} />
      <ChildrenContainer>{props.children}</ChildrenContainer>
    </Container>
  );
};

export default MainBackgroundLayout;
