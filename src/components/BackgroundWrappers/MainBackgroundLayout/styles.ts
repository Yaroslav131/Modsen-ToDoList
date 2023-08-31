import { Dimensions, Image } from 'react-native';
import styled from 'styled-components/native';

export const windowWidth = Dimensions.get('window').width;

export const StyledRightEllipse = styled(Image)`
  position: absolute;
  right: -15px;
  top: -15px;
  height: ${windowWidth / 1.4}px;
  width: ${windowWidth / 1.4}px;
  resize-mode: stretch;
  z-index: 2;
`;
