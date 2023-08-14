import React from 'react';
import { leftEllipse, rightEllipse } from '../../../assets/images';
import { Container, StyledLeftEllipse, ChildrenContainer, StyledRightEllipse } from './styled';

interface MainBackgroundLayoutProps {
  children: React.ReactNode;
}

const MainBackgroundLayout: React.FC<MainBackgroundLayoutProps> = (props) => {
  return (
    <Container>
      <StyledLeftEllipse source={leftEllipse} />
      <StyledRightEllipse source={rightEllipse} />
      <ChildrenContainer>{props.children}</ChildrenContainer>
    </Container>
  );
};

export default MainBackgroundLayout;
