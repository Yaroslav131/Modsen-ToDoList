import React, { useState, useEffect } from 'react';
import {
  View, Text, TouchableOpacity, TouchableWithoutFeedback, Image,
} from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';

import { IMAGES } from '@/constants';
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

      if (isAllSubTaskCompleted && isCompleted === false) {
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

  const translationX = useSharedValue(0);

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = translationX.value;
    },
    onActive: (event, ctx) => {
      translationX.value = ctx.startX + event.translationX;
    },
    onEnd: (event) => {
      if (event.velocityX > 500 || event.translationX > 100) {
        runOnJS(handleCheck)();
      } else {
        translationX.value = withTiming(0);
      }
    },
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translationX.value }],
  }));

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <Animated.View style={[styles.container, animatedStyle]}>
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
                      source={IMAGES.checked}
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
                  <Image style={styles.optionMenuImage} source={IMAGES.optionMenu} />
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
      </Animated.View>
    </PanGestureHandler>
  );
}

export default Task;
