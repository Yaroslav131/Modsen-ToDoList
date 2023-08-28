import { Image, StyleSheet, TouchableOpacity, View, Dimensions } from "react-native";

import { TextInput, TitleText } from "../../styles";
import { important, notImportant } from '@assets/images';
import { ErrorText } from "../../../../../styles";


interface AddNameDescriptionImportantProps {
    taskName: string;
    description?: string;
    isImportant: boolean;
    handleToggleImportent: () => void;
    onDescriptionTextChange: (text: string) => void;
    onNameTextChange: (text: string) => void;
    validationError: string
}
function AddNameDescriptionImportant({
    taskName,
    description,
    isImportant,
    handleToggleImportent,
    onNameTextChange,
    onDescriptionTextChange,
    validationError
}: AddNameDescriptionImportantProps) {
    return (
        <>

            <View style={styles.container}>

                <View style={styles.nameInputContainer}>
                    <TitleText>Task name</TitleText>
                    {validationError !== '' && (
                        <ErrorText >{validationError}</ErrorText>
                    )
                    }
                    <TextInput
                        placeholder="Do homework"
                        value={taskName}
                        onChangeText={onNameTextChange}
                    />
                </View>
                <TouchableOpacity style={styles.checkBox} onPress={handleToggleImportent} activeOpacity={0.5} >
                    <Image style={styles.checkBoxImage} source={isImportant ? important : notImportant} />
                </TouchableOpacity>
            </View>

            <TitleText>Description</TitleText>
            <TextInput
                placeholder="Do homework"
                value={description}
                onChangeText={onDescriptionTextChange}
            />
        </>
    );
}

export const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create(
    {
        container: {
            marginBottom: 20,
            flexDirection: 'row',
            width: "100%",
            alignContent: 'center',

        },
        nameInputContainer: {
            flex: 9
        },
        checkBox: {
            alignItems: 'flex-end',
            justifyContent: 'center',
            flex: 2
        },
        checkBoxImage: {
            width: windowWidth * 0.1,
            height: windowWidth * 0.1
        }
    }
)

export default AddNameDescriptionImportant;