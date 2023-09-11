import styled from 'styled-components/native';
import { Dimensions, TouchableOpacity, StyleSheet,Appearance } from 'react-native';
import { ligthTheme } from '@/theme';

export const { height, width } = Dimensions.get('window');

const theme = Appearance.getColorScheme();

const color = theme === "light" ? ligthTheme.addTopic.color : ligthTheme.addTopic.color

export const Container = styled.View`
  width: 100%;
`;

export const styles = StyleSheet.create({
  FlatList: {
    maxHeight: height * 0.2,
  },
});

export const TopicButton = styled(TouchableOpacity) <{ chosen: boolean }>`
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  background-color: ${(props) => (props.chosen ? color : 'transparent')};
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  font-family: 'signika_regular';
`;
