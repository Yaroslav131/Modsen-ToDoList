import React, { useState } from 'react';
import { ic_plus } from '@assets/images';
import { ErrorText } from '@globalStyles/index';
import * as Yup from 'yup';
import { SubTaskType } from '@/types';
import SubTaskFlatList from '@/components/SubTaskFlatList';
import { TextInput, TitleText } from '../../styles';
import { AddButton, AddButtonImage } from './styles';

const validationSchema = Yup.object().shape({
  subTaskName: Yup.string().required('Input is required'),
});

interface AddSubTaskProps {
  subTasks: SubTaskType[];
  onAddSubTasks: (name: string) => void;
  onDeleteSubTasks: (id: string) => void;
}

function AddSubTask({ subTasks, onAddSubTasks, onDeleteSubTasks }: AddSubTaskProps) {
  const [subTaskName, setSubTaskName] = useState('');
  const [validationError, setValidationError] = useState('');

  const handleAddAddSubTask = () => {
    try {
      validationSchema.validateSync({ subTaskName });
      onAddSubTasks(subTaskName);
      setSubTaskName('');
      setValidationError('');
    } catch (error: any) {
      setValidationError(error.message);
    }
  };

  return (
    <>
      <TitleText>Subtasks</TitleText>
      <SubTaskFlatList isEdited onDeleteSubTasks={onDeleteSubTasks} tasks={subTasks} />
      {validationError !== '' && <ErrorText>{validationError}</ErrorText>}
      <TextInput
        placeholder="New subtask"
        value={subTaskName}
        onChangeText={(text) => setSubTaskName(text)}
      />

      <AddButton onPress={handleAddAddSubTask}>
        <AddButtonImage source={ic_plus} />
      </AddButton>
    </>
  );
}

export default AddSubTask;
