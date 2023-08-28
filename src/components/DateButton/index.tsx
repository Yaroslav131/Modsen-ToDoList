/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import { ButtonWrapper, ButtonText } from './styles';

interface DateButtonProps {
  buttonText: string
  onPress: () => void
}

function DateButton({ buttonText, onPress }: DateButtonProps) {
  return (
    <ButtonWrapper onPress={onPress} activeOpacity={0.5}>
      <ButtonText>{buttonText}</ButtonText>
    </ButtonWrapper>
  );
}

export default DateButton;
