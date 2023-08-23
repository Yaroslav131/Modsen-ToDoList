import { Image, Text, TouchableOpacity } from 'react-native';
import { useState } from "react"

import { ImageName, topicButtonType } from '@/types';
import { Images } from '@/constants';
import { deleteIcon } from '@assets/images';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { deleteTopic } from '@/slices/topicSlice';
import { filterTasksByTopic } from '@/helpingFunctions';
import { deleteTopicForTasks } from '@/slices/taskSlice';

import { styles } from './styles';

interface TopicButtonProps {
  id: string
  onClick: () => void;
  buttonText?: string;
  buttonColor?: string
  type: topicButtonType
  imageSource: ImageName
}

function TopicButton(props: TopicButtonProps) {
  const [deleteButtonVisability, setDeleteButtonVisability] = useState(false)
  const dispatch = useAppDispatch()
  const tasks = useAppSelector(state => state.tasks.value)
  const taskCounter = filterTasksByTopic(tasks, props.id)

  function toggleDeleteButtonVisability() {
    setDeleteButtonVisability(!deleteButtonVisability)
  }

  function hidenButtonVisability() {
    setDeleteButtonVisability(false)
  }

  function deleteButton() {
    dispatch(deleteTopicForTasks(props.id))
    dispatch(deleteTopic(props.id))
    setDeleteButtonVisability(false)
  }

  return (
    props.type == "add" ? (
      <TouchableOpacity
        onPress={props.onClick}
        activeOpacity={0.5}
        style={[styles.addButton, styles.button]}>
        <Image style={styles.imgStyle} source={Images[props.imageSource]} />
      </TouchableOpacity>

    )
      : (props.type == "custom" && deleteButtonVisability ?
        <TouchableOpacity
          onLongPress={toggleDeleteButtonVisability}
          onPress={deleteButton}
          activeOpacity={0.5}
          style={[styles.button, { backgroundColor: props.buttonColor }]}>
          <Image style={styles.imgStyle} source={deleteIcon} />
        </TouchableOpacity>
        :
        (<TouchableOpacity
          onPress={props.onClick}
          onLongPress={toggleDeleteButtonVisability}
          activeOpacity={0.5}
          onBlur={hidenButtonVisability}
          style={[styles.button, { backgroundColor: props.buttonColor }]}>


          <Text style={styles.counterText}>{taskCounter.length}</Text>
          <Image style={styles.imgStyle} source={Images[props.imageSource]} />
          <Text style={styles.buttonText}>{props.buttonText}</Text>
        </TouchableOpacity>)
      )
  );
}

export default TopicButton;
