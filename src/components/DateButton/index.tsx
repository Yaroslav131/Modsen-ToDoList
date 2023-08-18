/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import { ButtonWrapper, ButtonText } from './styles';

interface DateButtonProps {
  buttonText: string
}

function DateButton({ buttonText }: DateButtonProps) {
  return (
    <ButtonWrapper activeOpacity={0.5}>
      <ButtonText>{buttonText}</ButtonText>
    </ButtonWrapper>
  );
}

export default DateButton;
