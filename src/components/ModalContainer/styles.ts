import { View, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { BlurView } from '@react-native-community/blur';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const Container = styled(View)`
  flex: 1;
  justify-content: center;
`;

export const BlurViewContainer = styled(BlurView)`
  position: absolute;
  top: 0;
  left: 0;
  width: ${windowWidth}px;
  height: ${windowHeight}px;
  justify-content: center;
  align-items: center;
`;

export const ContentContainer = styled(View)`
  background-color: white;
  padding-horizontal: 30px;
  padding-vertical: 20px;
  border-radius: 10px;
  align-items: flex-start;
  align-self: center;
  width: 80%;
  elevation: 5;
`;
