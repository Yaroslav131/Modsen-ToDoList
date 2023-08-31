import { Dimensions, Image } from 'react-native';
import styled from 'styled-components/native';

export const windowWidth = Dimensions.get('window').width;

export const Container = styled.View`
  flex-direction: row;
  hight: 100%;
  justify-content: center;
  align-items: center;
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

export const ChildrenContainer = styled.View`
  flex: 1;
  z-index: 5;
`;
