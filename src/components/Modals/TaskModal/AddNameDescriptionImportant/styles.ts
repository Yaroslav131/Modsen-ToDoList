import { styled } from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 20px;
  flex-direction: row;
  width: 100%;
  align-content: center;
`;

export const NameInputContainer = styled.View`
  flex: 9;
`;

export const CheckBox = styled.TouchableOpacity`
  align-items: flex-end;
  justify-content: center;
  flex: 2;
`;

export const CheckBoxImage = styled.Image<{ windowWidth: number }>`
  width: ${({ windowWidth }) => windowWidth * 0.1}px;
  height: ${({ windowWidth }) => windowWidth * 0.1}px;
`;
