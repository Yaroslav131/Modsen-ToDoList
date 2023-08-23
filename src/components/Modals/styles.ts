import { styled } from "styled-components/native";
import { Text, View, TouchableOpacity } from 'react-native';

export const TitleText = styled(Text)`
    font-size: 22px;
    font-family: "signika_regular";
    color: #363636;
`;

export const TextInput = styled.TextInput`
font-family: jost_regular;
color: #363636;
width: 100%;
font-size: 20px;
border-bottom-width: 1px;
border-color: gray;
border-radius: 5px;
`;

export const ButtonContainer = styled(View)`
    margin-top: 30px;
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;
`;

export const CustomButton = styled(TouchableOpacity)`
    border-radius: 5px;
    background-color: #FFF;
    padding-horizontal: 15px;
    padding-vertical: 5px;
`;

export const ButtonText = styled(Text)`
    font-size: 20px;
    font-family: "Roboto";
    color: #646FD4;
`;


export const ContentContainer = styled(View)`
    background-color: white;
    padding-horizontal: 30px;
    padding-vertical: 20px;
    border-radius: 20px;
    align-items: flex-start;
    align-self: center;
    width: 80%;
    elevation: 25;
`;


