import { Dimensions, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ImageName, filterButtonType } from '../../../types';
import { Images } from '../../../constants';


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

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  imgStyle: {
    resizeMode: 'cover'
  },

  addButton: {
    backgroundColor:"#FFF",
    borderWidth: 2,
    borderColor: "#D25EB0",
    justifyContent: 'center',
  },

  button: {
    elevation: 3,
    width: screenWidth * 0.28,
    height: screenWidth * 0.28,
    margin: 10,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 10
  },
  buttonText: {

    textAlign: "center",
    color: '#FFF',
    fontFamily: 'jost_regular',
    fontSize: 20,
  },
  counterText: {
    position: 'absolute',
    right: 10,
    top: 10,
    textAlign: 'right',
    color: '#FFF',
    fontFamily: 'jost_regular',
    fontSize: 20,
  },
});

export default FilterButton;
