import { Dimensions, Image } from 'react-native';
import styled from 'styled-components/native';

export const windowWidth = Dimensions.get('window').width;

export const Container = styled.View`
  flex-direction: row;
`;

export const StyledLeftEllipse = styled(Image)`
  position: absolute;
  left: -15px;
  top: -15px;
  height: ${windowWidth / 1.7}px;
  width: ${windowWidth / 1.7}px;
  resize-mode: stretch;
  z-index: 1;
`;

export const StyledRightEllipse = styled(Image)`
  position: absolute;
  right: -15px;
  top: -15px;
  height: ${windowWidth / 1.4}px;
  width: ${windowWidth / 1.4}px;
  resize-mode: stretch;
  z-index: 2;
`;

export const ChildrenContainer = styled.View`
  flex: 1;
  z-index: 5;
`;
