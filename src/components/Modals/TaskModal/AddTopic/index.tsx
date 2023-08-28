import {
    StyleSheet,
    Dimensions,
    FlatList,
    ListRenderItem,
    TouchableOpacity,
    View,
    Text
} from "react-native";

import { TitleText } from "../../styles";
import { useAppSelector } from "@/hooks";
import { TopicType } from "@/types";


interface AddTopicProps {
    handleOnTopicChosen: (id: string) => void;
    chosenId?: string
}
function AddTopic({ handleOnTopicChosen, chosenId }: AddTopicProps) {
    const topics = useAppSelector(state => state.topics.value)

    const renderItem: ListRenderItem<TopicType> = ({ item }) => (
        <TouchableOpacity
            style={[styles.topicButton, item.id === chosenId ? styles.chosenTopicButton : {}]}
            onPress={() => { handleOnTopicChosen(item.id) }}>
            <Text style={styles.buttonText}>{item.name}</Text>
        </TouchableOpacity>
    );

    const keyExtractor = (item: TopicType) => item.id;

    return (
        <View style={styles.container}>
            <TitleText>Choose topic</TitleText>

            <FlatList
                style={styles.flatList}
                data={topics}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                numColumns={1}
            />

        </View>
    );
}

export const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create(
    {
        container: {
            width: "100%"
        },
        flatList: {
            maxHeight: height * 0.2
        },
        topicButton: {
            borderRadius: 5,
            padding: 10,
            width: "100%"
        },
        topicButtonText: {
            width: "100%"
        },
        chosenTopicButton: {
            backgroundColor: "#c4c4c4"
        },
        buttonText: {
            fontSize: 20,
            fontFamily: "signika_regular"
        }
    }
)

export default AddTopic;