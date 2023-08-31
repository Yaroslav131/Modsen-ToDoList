import { styled } from 'styled-components/native';
import { Text } from 'react-native';

interface StyledTextProps {
  textColor: string;
  fontSize: string;
}

export const StyledText = styled(Text)<StyledTextProps>`
  font-family: jost_semiBold;
  text-align: center;
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.textColor};
`;

export const ErrorText = styled.Text`
  color: red;
  font-family: jost_regular;
  font-size: 15px;
`;
