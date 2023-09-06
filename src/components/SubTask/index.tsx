import React from 'react';
import {
  Text, TouchableOpacity, View, Image,
} from 'react-native';
import { cancel, checked } from '@assets/images';
import { useAppDispatch } from '@/hooks';
import { tongleSubTaskCompleted } from '@/slices/subTaskSlice';
import { styles } from './styles';

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
        <TouchableOpacity style={styles.checkBox} onPress={handleCheck}>
          {isCompleted && <Image style={styles.checkBoxImage} source={checked} />}
        </TouchableOpacity>
        <Text style={styles.titleText}>{title}</Text>
      </View>

      {isEdited && onDeleteSubTasks && (
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => {
            onDeleteSubTasks(id);
          }}
        >
          <Image style={styles.checkBoxImage} source={cancel} />
        </TouchableOpacity>
      )}
    </View>
  );
}

export default SubTask;
