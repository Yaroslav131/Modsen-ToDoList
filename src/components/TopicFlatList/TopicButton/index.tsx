import {
  Image, Text, TouchableOpacity,
} from 'react-native';

import { useState } from "react"
import { ImageName, topicButtonType } from '../../../types';
import { Images } from '../../../constants';
import { styles } from './styles';
import { deleteIcon } from '../../../../assets/images';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { deleteTopic } from '@/slices/topicSlice';
import { filterTasksByTopic } from '@/helpingFunctions';


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
  // const rotateValue = useSharedValue(0);

  function toggleDeleteButtonVisability() {
    setDeleteButtonVisability(!deleteButtonVisability)
  }


  function hidenButtonVisability() {
    setDeleteButtonVisability(false)
  }

  function deleteButton() {
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

// {props.type == "custom" ?
// <TouchableOpacity
//   onPress={deleteButton}
//   activeOpacity={0.5}
//   style={[styles.deleteButton, { display: deleteButtonVisability ? 'flex' : "none" }]}>
//   <Image style={styles.deleteImg} source={deleteIcon} />
// </TouchableOpacity>
// :
// null
// }
export default TopicButton;
