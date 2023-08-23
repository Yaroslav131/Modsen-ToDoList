import { Image, StyleSheet, TouchableOpacity, View, Dimensions } from "react-native";

import { TextInput, TitleText } from "../../styles";
import { important, notImportant } from '@assets/images';


interface AddNameDescriptionImportantProps {
    taskName: string;
    description?: string;
    isImportant: boolean;
    handleToggleImportent: () => void;
    onDescriptionTextCahnge: (text: string) => void;
    onNameTextCahnge: (text: string) => void;
}
function AddNameDescriptionImportant({
    taskName,
    description,
    isImportant,
    handleToggleImportent,
    onNameTextCahnge,
    onDescriptionTextCahnge,
}: AddNameDescriptionImportantProps) {
    return (
        <>
            <View style={styles.container}>

                <View style={styles.nameInputContainer}>
                    <TitleText>Task name</TitleText>
                    <TextInput
                        placeholder="Do homework"
                        value={taskName}
                        onChangeText={onNameTextCahnge}
                    />
                </View>
                <TouchableOpacity style={styles.checkBox} onPress={handleToggleImportent} activeOpacity={0.5} >
                    <Image style={styles.checkBoxImage} source={isImportant ? important : notImportant} />
                </TouchableOpacity>
            </View>

            <TitleText>Description (Optional)</TitleText>
            <TextInput
                placeholder="Do homework"
                value={description}
                onChangeText={onDescriptionTextCahnge}
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