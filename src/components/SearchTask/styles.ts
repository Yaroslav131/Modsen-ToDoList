import { styled } from 'styled-components/native';

export const SearchContainer = styled.View`
  margin-top: 20px;
  border-radius: 15px;
  padding-vertical: 5px;
  padding-horizontal: 15px;
  width: 80%;
  background-color: #fff;
  elevation: 30;
`;

export const SearchFieldContainer = styled.View`
  flex-direction: row;
  gap: 5px;
`;

export const SearchButton = styled.TouchableOpacity`
  min-height: 30px;
  flex: 1;
  align-self: center;
`;

export const SearchImage = styled.Image`
  align-self: center;
  min-height: 30px;
`;

export const SearchInput = styled.TextInput`
  font-family: jost_regular;
  color: #363636;
  flex: 9;
  width: 100%;
  font-size: 24px;
`;
