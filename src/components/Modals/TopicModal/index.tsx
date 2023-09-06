import React, { useState } from 'react';
import * as Yup from 'yup';

import { ErrorText } from '@globalStyles/index';
import {
  TextInput,
  TitleText,
  ContentContainer,
  ButtonContainer,
  ButtonText,
  CustomButton,
} from '../styles';
import { closeModal } from '@/slices/modalSlice';
import { addTopic } from '@/slices/topicSlice';
import { useAppDispatch } from '@/hooks';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Input is required'),
});

function TopicModal() {
  const [name, setName] = useState('');
  const [validationError, setValidationError] = useState('');
  const dispatch = useAppDispatch();

  function handleAddTopic() {
    try {
      validationSchema.validateSync({ name });
      dispatch(addTopic(name));
      dispatch(closeModal());
      setName('');
      setValidationError('');
    } catch (error: any) {
      setValidationError(error.message);
    }
  }

  return (
    <ContentContainer>
      <TitleText>Topic name</TitleText>
      <TextInput placeholder="Work" value={name} onChangeText={(text) => setName(text)} />
      {validationError !== '' && <ErrorText>{validationError}</ErrorText>}
      <ButtonContainer>
        <CustomButton onPress={() => dispatch(closeModal())}>
          <ButtonText>Back</ButtonText>
        </CustomButton>
        <CustomButton onPress={handleAddTopic}>
          <ButtonText>Add</ButtonText>
        </CustomButton>
      </ButtonContainer>
    </ContentContainer>
  );
}

export default TopicModal;
