import React, { useState, useEffect } from 'react';
import {
  View, Text, TouchableOpacity, TouchableWithoutFeedback, Image,
} from 'react-native';

import { checked, optionMenu } from '@assets/images';
import { dynamicTextStyles, styles } from './styles';
import { useAppDispatch, useAppSelector } from '@/hooks';
import SubTaskFlatList from '../SubTaskFlatList';
import { tongleSubTaskCompleted } from '@/slices/subTaskSlice';
import { deleteTask, tongleTaskCompleted } from '@/slices/taskSlice';
import { checkIsAllSubTaskCompleted, formatTime } from '@/helpingFunctions';
import { openModalWithParams } from '@/slices/modalSlice';

import SettingButton from './SettingButton';

interface TaskProps {
  id: string;
  isCompleted: boolean;
  title: string;
  description?: string;
  forTime: string;
  tillTime: string;
}

function Task({
  description, forTime, id, isCompleted, tillTime, title,
}: TaskProps) {
  const dispatch = useAppDispatch();

  const [isDisplaySubTasks, setIsDisplaySubTasks] = useState(false);
  const [isDisplaySetting, setIsDisplaySetting] = useState(false);
  const subTasks = useAppSelector((state) => state.subTasks.value).filter((x) => x.taskId == id);

  useEffect(() => {
    if (subTasks.length != 0) {
      const isAllSubTaskCompleted = checkIsAllSubTaskCompleted(subTasks);

      if (isAllSubTaskCompleted && !isCompleted) {
        dispatch(tongleTaskCompleted(id));
      }
    }
  }, [subTasks]);

  const handleCheck = () => {
    dispatch(tongleTaskCompleted(id));
    subTasks.forEach((x) => dispatch(tongleSubTaskCompleted([x.id, !isCompleted])));
  };

  function handleTogglSettingVisiblety() {
    setIsDisplaySetting(!isDisplaySetting);
  }

  const toggleDisplaySubTasks = () => setIsDisplaySubTasks(!isDisplaySubTasks);

  return (
    <View style={styles.container}>
      <View style={styles.mainContantContainer}>
        <TouchableWithoutFeedback onPress={toggleDisplaySubTasks}>
          <View style={styles.topContainer}>
            <View style={styles.leftContainer}>
              <View style={styles.timeContainer}>
                <Text style={styles.timeText}>{formatTime(forTime)}</Text>
                <Text style={styles.timeText}>{formatTime(tillTime)}</Text>
              </View>

              <View style={styles.taskContainer}>
                <TouchableOpacity onPress={handleCheck} activeOpacity={0.5} style={styles.checkBox}>
                  <Image
                    style={[styles.checkBoxImage, { display: isCompleted ? 'flex' : 'none' }]}
                    source={checked}
                  />
                </TouchableOpacity>

                <View style={styles.taskTextContainer}>
                  <Text style={styles.titleText}>{title}</Text>
                  {description && (
                    <Text style={[dynamicTextStyles(isDisplaySubTasks).descriptionText]}>
                      {description}
                    </Text>
                  )}
                </View>
              </View>
            </View>

            <View style={styles.optionMenuContainer}>
              <TouchableOpacity onPress={handleTogglSettingVisiblety}>
                <Image style={styles.optionMenuImage} source={optionMenu} />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>

        {isDisplaySubTasks && subTasks.length > 0 && (
          <View style={styles.bottomContainer}>
            <SubTaskFlatList tasks={subTasks} />
          </View>
        )}
      </View>

      <View style={[styles.settingContainer, { display: isDisplaySetting ? 'flex' : 'none' }]}>
        <SettingButton
          onClick={() => {
            dispatch(openModalWithParams(id));
          }}
          title="edit task"
        />
        <SettingButton
          onClick={() => {
            dispatch(deleteTask(id));
          }}
          title="delete task"
        />
      </View>
    </View>
  );
}

export default Task;
