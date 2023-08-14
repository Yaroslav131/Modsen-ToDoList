import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
`;

export const StyledImage = styled.Image`
  width: 100%;
`;

export const Content = styled.View``;

export const SectionTitle = styled.Text`
  margin-bottom: 10px;
  font-size: 38px;
  font-family: jost_semiBold;
  color: #363636;
  text-align: center;
`;

export const SectionDescription = styled.Text`
  font-size: 18px;
  font-family: jost_regular;
  margin-horizontal: 45px;
  text-align: center;
  color: #8d93ab;
  line-height: 20px;
`;

export const StartButton = styled.TouchableOpacity`
  background-color: #9ba3eb;
  border-radius: 15px;
  align-items: center;
  width: 80%;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 22px;
  font-family: Roboto;
  font-weight: bold;
  padding: 10px;
`;
