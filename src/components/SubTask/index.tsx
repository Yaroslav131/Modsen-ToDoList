import React from 'react';
import {
  View, Text, TouchableOpacity, Image,
} from 'react-native';
import { cancel, checked } from '@assets/images';
import { styles } from './styles';
import { useAppDispatch } from '@/hooks';
import { tongleSubTaskCompleted } from '@/slices/subTaskSlice';

interface SubTaskProps {
  id: string;
  isCompleted: boolean;
  title: string;
  onDeleteSubTasks?: (id: string) => void;
  isEdited?: boolean;
}

function SubTask({
  isCompleted, title, id, onDeleteSubTasks, isEdited,
}: SubTaskProps) {
  const dispatch = useAppDispatch();

  const handleCheck = () => {
    dispatch(tongleSubTaskCompleted([id, !isCompleted]));
  };

  return (
    <View style={styles.container}>
      <View style={styles.subTaskContainer}>
        <TouchableOpacity onPress={handleCheck} style={styles.checkBox}>
          {isCompleted && <Image style={styles.checkBoxImage} source={checked} />}
        </TouchableOpacity>
        <Text style={styles.titleText}>{title}</Text>
      </View>

      {isEdited && onDeleteSubTasks && (
        <TouchableOpacity
          onPress={() => {
            onDeleteSubTasks(id);
          }}
          style={styles.cancelButton}
        >
          <Image style={styles.checkBoxImage} source={cancel} />
        </TouchableOpacity>
      )}
    </View>
  );
}

export default SubTask;
