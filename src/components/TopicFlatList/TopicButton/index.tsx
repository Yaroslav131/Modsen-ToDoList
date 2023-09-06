import {
  Image, Text, TouchableOpacity, Animated, Easing,
} from 'react-native';
import { useState, useEffect } from 'react';

import { deleteIcon } from '@assets/images';
import { ImageName, topicButtonType } from '@/types';
import { Images } from '@/constants';
import { useAppDispatch } from '@/hooks';
import { deleteTopic } from '@/slices/topicSlice';

import { deleteTopicForTasks } from '@/slices/taskSlice';

import { styles } from './styles';

interface TopicButtonProps {
  id: string;
  onClick: () => void;
  buttonText?: string;
  buttonColor?: string;
  type: topicButtonType;
  imageSource: ImageName;
  taskCounter?: number;
}

function TopicButton(props: TopicButtonProps) {
  const [deleteButtonVisability, setDeleteButtonVisability] = useState(false);
  const dispatch = useAppDispatch();

  const animatedValue = new Animated.Value(0);

  useEffect(() => {
    if (deleteButtonVisability) {
      startSwingAnimation();
    } else {
      animatedValue.setValue(0);
    }
  }, [deleteButtonVisability]);

  const startSwingAnimation = (speed = 2) => {
    const animationDuration = 1000 / speed;

    const easing = Easing.inOut(Easing.ease);

    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: animationDuration,
          easing,
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, {
          toValue: -1,
          duration: animationDuration,
          easing,
          useNativeDriver: true,
        }),
      ]),
      { iterations: -1 },
    ).start();
  };

  function toggleDeleteButtonVisability() {
    setDeleteButtonVisability(!deleteButtonVisability);
  }

  function hidenButtonVisability() {
    setDeleteButtonVisability(false);
  }

  function deleteButton() {
    dispatch(deleteTopicForTasks(props.id));
    dispatch(deleteTopic(props.id));
    setDeleteButtonVisability(false);
  }

  return props.type == 'add' ? (
    <TouchableOpacity
      onPress={props.onClick}
      activeOpacity={0.5}
      style={[styles.addButton, styles.button]}
    >
      <Image style={styles.imgStyle} source={Images[props.imageSource]} />
    </TouchableOpacity>
  ) : props.type == 'custom' && deleteButtonVisability ? (
    <TouchableOpacity
      onLongPress={toggleDeleteButtonVisability}
      onPress={deleteButton}
      activeOpacity={0.5}
      style={[styles.button, { backgroundColor: props.buttonColor }]}
    >
      <Animated.Image
        style={[
          styles.imgStyle,
          {
            transform: [
              {
                rotate: animatedValue.interpolate({
                  inputRange: [-1, 1],
                  outputRange: ['-5deg', '5deg'],
                }),
              },
            ],
          },
        ]}
        source={deleteIcon}
      />
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      onPress={props.onClick}
      onLongPress={toggleDeleteButtonVisability}
      activeOpacity={0.5}
      onBlur={hidenButtonVisability}
      style={[styles.button, { backgroundColor: props.buttonColor }]}
    >
      <Text style={styles.counterText}>{props.taskCounter}</Text>
      <Image style={styles.imgStyle} source={Images[props.imageSource]} />
      <Text style={styles.buttonText}>{props.buttonText}</Text>
    </TouchableOpacity>
  );
}

export default TopicButton;
