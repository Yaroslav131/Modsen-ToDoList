import React from 'react';

import { TitleText } from '../../styles';

import { Container, StyledDatePicker } from './styles';
import { DatePikerType } from '@/types';

interface AddTimeProps {
  titleText: string;
  onStartTimeChange: (time: Date) => void;
  taskStartTime?: Date;
  mode: DatePikerType;
}

function AddTime({
  titleText, onStartTimeChange, taskStartTime, mode,
}: AddTimeProps) {
  return (
    <Container>
      <TitleText>{titleText}</TitleText>
      <StyledDatePicker
        date={taskStartTime || new Date()}
        onDateChange={onStartTimeChange}
        mode={mode}
      />
    </Container>
  );
}

export default AddTime;
