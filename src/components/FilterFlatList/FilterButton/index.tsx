import { Dimensions, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ImageName, filterButtonType } from '../../../types';
import { Images } from '../../../constants';
import { styles } from './styles';


interface FilterButtonProps {
  onClick: () => void
  buttonText?: string;
  buttonColor?: string
  taskCounter?: number;
  type: filterButtonType
  imageSource: ImageName
}

function FilterButton(props: FilterButtonProps) {
  let image = null;

  try {
    image = <Image style={styles.imgStyle} source={Images[props.imageSource]} />
  } catch {
    image = <Image style={styles.imgStyle} source={Images['icDefault']} />
  }

  return (
    props.type == "filter" ?
      <TouchableOpacity activeOpacity={0.5} style={[styles.button, { backgroundColor: props.buttonColor }]}>
        <Text style={styles.counterText}>{props.taskCounter}</Text>
        {image}
        <Text style={styles.buttonText}>{props.buttonText}</Text>
      </TouchableOpacity>
      :
      <TouchableOpacity activeOpacity={0.5} style={[styles.addButton,styles.button]}>
        {image}
      </TouchableOpacity>
  );
}

export default FilterButton;
