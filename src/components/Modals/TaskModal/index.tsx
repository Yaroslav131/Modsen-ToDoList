import React, { useState, useRef } from 'react';
import * as Yup from 'yup';

import {
  ContentContainer, ButtonContainer, ButtonText, CustomButton,
} from '../styles';
import {
  addDataTitle, addEndTimeTitle, addStartTimeTitle, addTaskStages,
} from '@/constants';
import { SubTaskType, TaskType, addTaskStagesType } from '@/types';

import AddNameDescriptionImportant from './AddNameDescriptionImportant';
import AddTopic from './AddTopic';
import AddDataTime from './AddTime';
import { getId } from '@/helpingFunctions';
import AddSubTask from './addSubTasks';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { addTask, changeTask } from '@/slices/taskSlice';
import { addSubTask } from '@/slices/subTaskSlice';
import { closeModal } from '@/slices/modalSlice';

const validationSchema = Yup.object().shape({
  taskName: Yup.string().required('Input is required'),
});

function TaskModal() {
  const [currentStageId, setCurrentStageId] = useState(0);
  const dispatch = useAppDispatch();

  const modalParams = useAppSelector((state) => state.modal.modalParams);
  const sortTasks = useAppSelector((state) => state.tasks.value).find((x) => x.id === modalParams);
  const taskOnChange = modalParams ? sortTasks : null;

  const [taskName, setTaskName] = useState(taskOnChange ? taskOnChange.title : '');
  const [nameValidationError, setNameValidationError] = useState('');
  const [description, setDescription] = useState<string | undefined>(taskOnChange?.description);
  const [isImportant, setIsImportant] = useState(taskOnChange ? taskOnChange.important : false);
  const [topicId, setTopicId] = useState<string | undefined>(taskOnChange?.topicId);
  const [taskStartTime, setTaskStartTime] = useState<Date>(
    taskOnChange ? new Date(taskOnChange.forTime) : new Date(),
  );
  const [taskEndTime, setTaskEndTime] = useState<Date>(
    taskOnChange ? new Date(taskOnChange.tillTime) : new Date(),
  );
  const [taskData, setData] = useState(taskOnChange ? new Date(taskOnChange?.date) : new Date());

  const sortTaskOnChange = useAppSelector((state) => state.subTasks.value)
    .filter((x) => x.taskId === taskOnChange?.id);

  const [subTasks, setSubTasks] = useState<SubTaskType[]>(
    taskOnChange
      ? sortTaskOnChange
      : [],
  );
  const currentTaskId = useRef(taskOnChange ? taskOnChange.id : getId());
  const currentStage: addTaskStagesType = addTaskStages[currentStageId];

  let content;
  switch (currentStage) {
    case 'AddNameDescriptionImportant':
      content = (
        <AddNameDescriptionImportant
          validationError={nameValidationError}
          description={description}
          isImportant={isImportant}
          handleToggleImportent={handleToggleImportent}
          onDescriptionTextChange={handleOnDescriptionChange}
          onNameTextChange={handleOnNameChange}
          taskName={taskName}
        />
      );
      break;

    case 'AddTopic':
      content = (
        <AddTopic
          handleOnTopicChosen={handleOnTopicChosen}
          chosenId={topicId}
        />
      );
      break;

    case 'AddStartTime':
      content = (
        <AddDataTime
          mode="time"
          titleText={addStartTimeTitle}
          onStartTimeChange={handleOnStartTimeChange}
          taskStartTime={taskStartTime}
        />
      );
      break;

    case 'AddEndTime':
      content = (
        <AddDataTime
          mode="time"
          titleText={addEndTimeTitle}
          onStartTimeChange={handleOnEndTimeChange}
          taskStartTime={taskEndTime}
        />
      );
      break;

    case 'AddDate':
      content = (
        <AddDataTime
          mode="date"
          titleText={addDataTitle}
          onStartTimeChange={handleOnDataChange}
          taskStartTime={taskEndTime}
        />
      );
      break;

    default:
      content = (
        <AddSubTask
          onAddSubTasks={handleAddsubTasks}
          onDeleteSubTasks={handleDeletesubTasks}
          subTasks={subTasks}
        />
      );
      break;
  }

  function handleAddTask() {
    const task: TaskType = {
      date: taskData.toString(),
      description,
      forTime: taskStartTime?.toString(),
      tillTime: taskEndTime?.toString(),
      id: currentTaskId.current,
      important: isImportant,
      isCompleted: false,
      title: taskName,
      topicId,
    };

    taskOnChange ? dispatch(changeTask(task)) : dispatch(addTask(task));

    dispatch(addSubTask(subTasks));
    dispatch(closeModal());
  }

  function handleAddsubTasks(name: string) {
    const newSubTask: SubTaskType = {
      id: getId(),
      isCompleted: false,
      taskId: currentTaskId.current,
      title: name,
    };
    setSubTasks([...subTasks, newSubTask]);
  }

  function handleDeletesubTasks(id: string) {
    setSubTasks(subTasks.filter((x) => x.id !== id));
  }

  function handleOnStartTimeChange(time: Date) {
    setTaskStartTime(time);
  }

  function handleOnDataChange(time: Date) {
    setData(time);
  }

  function handleOnEndTimeChange(time: Date) {
    setTaskEndTime(time);
  }

  function handleOnTopicChosen(id: string) {
    if (id == topicId) {
      setTopicId('');
    } else {
      setTopicId(id);
    }
  }

  function handleOnDescriptionChange(text: string) {
    setDescription(text);
  }

  function handleOnNameChange(text: string) {
    setTaskName(text);
  }

  function handleIncrimentStageId() {
    try {
      validationSchema.validateSync({ taskName });
      setCurrentStageId(currentStageId + 1);

      setNameValidationError('');
    } catch (error: any) {
      setNameValidationError(error.message);
    }
  }

  function handleDecrimentStageId() {
    setCurrentStageId(currentStageId - 1);
  }

  function handleToggleImportent() {
    setIsImportant(!isImportant);
  }

  return (
    <ContentContainer>
      {content}

      <ButtonContainer>
        {currentStageId === 0 ? (
          <CustomButton
            onPress={() => {
              dispatch(closeModal());
            }}
          >
            <ButtonText>Cancel</ButtonText>
          </CustomButton>
        ) : (
          <CustomButton onPress={handleDecrimentStageId}>
            <ButtonText>Back</ButtonText>
          </CustomButton>
        )}

        {addTaskStages.length - 1 === currentStageId ? (
          <CustomButton onPress={handleAddTask}>
            <ButtonText>{taskOnChange ? 'Change' : 'Add'}</ButtonText>
          </CustomButton>
        ) : (
          <CustomButton onPress={handleIncrimentStageId}>
            <ButtonText>Next</ButtonText>
          </CustomButton>
        )}
      </ButtonContainer>
    </ContentContainer>
  );
}

export default TaskModal;
