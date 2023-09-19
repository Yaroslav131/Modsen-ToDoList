import React, { useState } from 'react';
import * as Yup from 'yup';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { ErrorText } from '@globalStyles/index';
import { closeModal } from '@/slices/modalSlice';
import { addTopic } from '@/slices/topicSlice';
import { useAppDispatch } from '@/hooks';
import { styles } from './styles';

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
    <View style={styles.contentContainer}>
      <Text style={styles.titleText}>Topic name</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Work"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      {validationError !== '' && <ErrorText>{validationError}</ErrorText>}
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => dispatch(closeModal())} style={styles.customButton}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleAddTopic} style={styles.customButton}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default TopicModal;
