import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

interface SettingButtonProps {
  title: string;
  onClick: () => void;
}

function SettingButton(props: SettingButtonProps) {
  return (
    <TouchableOpacity style={styles.settingButtonWrapper} onPress={props.onClick}>
      <Text style={styles.settingButtonText}>{props.title}</Text>
    </TouchableOpacity>
  );
}

export default SettingButton;
