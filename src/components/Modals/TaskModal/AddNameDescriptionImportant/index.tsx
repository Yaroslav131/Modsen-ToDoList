import React from 'react';
import { Dimensions } from 'react-native';

import { images } from '@/constants';
import { ErrorText } from '@globalStyles/index';
import { TextInput, TitleText } from '@/components/Modals/styles';

import {
  CheckBox, CheckBoxImage, Container, NameInputContainer,
} from './styles';

interface AddNameDescriptionImportantProps {
  taskName: string;
  description?: string;
  isImportant: boolean;
  handleToggleImportent: () => void;
  onDescriptionTextChange: (text: string) => void;
  onNameTextChange: (text: string) => void;
  validationError: string;
}

const windowWidth = Dimensions.get('window').width;

function AddNameDescriptionImportant({
  taskName,
  description,
  isImportant,
  handleToggleImportent,
  onNameTextChange,
  onDescriptionTextChange,
  validationError,
}: AddNameDescriptionImportantProps) {
  return (
    <>
      <Container>
        <NameInputContainer>
          <TitleText>Task name</TitleText>
          {validationError !== '' && <ErrorText>{validationError}</ErrorText>}
          <TextInput placeholder="Do homework" value={taskName} onChangeText={onNameTextChange} />
        </NameInputContainer>
        <CheckBox onPress={handleToggleImportent} activeOpacity={0.5}>
          <CheckBoxImage
            source={isImportant ? images.important : images.notImportant}
            windowWidth={windowWidth}
          />
        </CheckBox>
      </Container>

      <TitleText>Description</TitleText>
      <TextInput
        placeholder="Do homework"
        value={description}
        onChangeText={onDescriptionTextChange}
      />
    </>
  );
}

export default AddNameDescriptionImportant;
