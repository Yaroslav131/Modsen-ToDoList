import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

interface DateButtonProps {
  buttonText: string;
  onPress: () => void;
}

function DateButton({ buttonText, onPress }: DateButtonProps) {
  return (
    <TouchableOpacity style={styles.buttonWrapper} onPress={onPress} activeOpacity={0.5}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
}

export default DateButton;
