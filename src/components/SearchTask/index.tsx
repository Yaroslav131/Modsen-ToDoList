import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';
import {
  View, Text, TextInput, TouchableOpacity, Image,
} from 'react-native';

import { searchIcon } from '@assets/images';
import { StackNavigation } from '@/types';
import { styles } from './styles';

const validationSchema = Yup.object().shape({
  inputText: Yup.string().required('Input is required'),
});

function SearchTask() {
  const [inputText, setInputText] = useState('');
  const [validationError, setValidationError] = useState('');
  const navigation = useNavigation<StackNavigation>();

  const handleSubmit = async () => {
    try {
      await validationSchema.validate({ inputText });
      navigation.navigate('TaskScreen', {
        type: ['Searched', { name: inputText }],
        title: 'Found tasks',
      });
      setInputText('');
      setValidationError('');
    } catch (error: any) {
      setValidationError(error.message);
    }
  };

  return (
    <View style={styles.searchContainer}>
      {validationError !== '' && <Text style={styles.errorText}>{validationError}</Text>}
      <View style={styles.searchFieldContainer}>
        <TouchableOpacity style={styles.searchButton} onPress={handleSubmit}>
          <Image style={styles.searchImage} source={searchIcon} />
        </TouchableOpacity>

        <TextInput
          style={styles.searchInput}
          onSubmitEditing={handleSubmit}
          placeholder="Search tasks"
          value={inputText}
          onChangeText={(text) => setInputText(text)}
        />
      </View>
    </View>
  );
}

export default SearchTask;
