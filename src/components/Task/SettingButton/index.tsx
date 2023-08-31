import { Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { styles } from './styles';

interface SettingButtonProps {
  title: string;
  onClick: () => void;
}

function SettingButton(props: SettingButtonProps) {
  return (
    <TouchableOpacity onPress={() => {}} style={styles.settingButton}>
      <Text onPress={props.onClick} style={styles.settingButtonText}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}

export default SettingButton;
