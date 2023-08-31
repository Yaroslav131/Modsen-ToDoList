import styled from 'styled-components/native';
import { Dimensions, TouchableOpacity, StyleSheet } from 'react-native';

export const { height, width } = Dimensions.get('window');

export const Container = styled.View`
  width: 100%;
`;

export const styles = StyleSheet.create({
  FlatList: {
    maxHeight: height * 0.2,
  },
});

export const TopicButton = styled(TouchableOpacity)<{ chosen: boolean }>`
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  background-color: ${(props) => (props.chosen ? '#c4c4c4' : 'transparent')};
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  font-family: 'signika_regular';
`;
