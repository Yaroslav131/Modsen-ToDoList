import React from 'react';
import { Text, TextInput, TouchableOpacity, View, Image } from 'react-native';

import { IMAGES } from '@/constants';
import { ErrorText } from '@globalStyles/index';
import { styles } from './styles';

interface AddNameDescriptionImportantProps {
  taskName: string;
  description?: string;
  isImportant: boolean;
  handleToggleImportent: () => void;
  onDescriptionTextChange: (text: string) => void;
  onNameTextChange: (text: string) => void;
  validationError: string;
}

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
      <View style={styles.container}>
        <View style={styles.nameInputContainer}>
          <Text style={styles.titleText}>Task name</Text>
          {validationError !== '' && <ErrorText>{validationError}</ErrorText>}
          <TextInput
            style={styles.textInput}
            placeholder="Do homework"
            value={taskName}
            onChangeText={onNameTextChange}
          />
        </View>
        <TouchableOpacity onPress={handleToggleImportent} activeOpacity={0.5} style={styles.checkBox}>
          <Image
            source={isImportant ? IMAGES.important : IMAGES.notImportant}
            style={styles.checkBoxImage}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.titleText}>Description</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Do homework"
        value={description}
        onChangeText={onDescriptionTextChange}
      />
    </>
  );
}

export default AddNameDescriptionImportant;
