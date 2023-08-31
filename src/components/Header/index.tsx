/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import { ImageProps } from 'react-native';

import {
  ButtonImage,
  HeaderContainer,
  LeftButton,
  TitleText,
} from './styles';

interface HeaderProps {
  onPress: () => void;
  leftImage: ImageProps;
  title: string;
}

function Header({ onPress, leftImage, title }: HeaderProps) {
  return (
    <HeaderContainer>
      <LeftButton onPress={onPress}>
        <ButtonImage source={leftImage} />
      </LeftButton>
      <TitleText>{title}</TitleText>
    </HeaderContainer>
  );
}

export default Header;
