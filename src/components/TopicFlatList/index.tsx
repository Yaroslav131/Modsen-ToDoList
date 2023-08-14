import { useState, useEffect } from "react";
import { FlatList, ListRenderItem } from "react-native";
import FilterButton from "./TopicButton";
import { ImageName, filterButtonType } from "../../types";
import { useAppSelector } from "../../hooks";

interface TopicButtonType {
    onPress: () => void;
    type: filterButtonType
    buttonText?: string;
    taskCounter?: number
    buttonColor?: string
    imageSource: ImageName
}

function TopicFlatList() {
    const [filterButtons, setFilterButtons] = useState<TopicButtonType[]>([])
    const topics = useAppSelector((state) => state.topics.value)

    const addButtonData: TopicButtonType = {
        type: "add",
        onPress: () => { },
        imageSource: "icPlus",
    }

    useEffect(() => {
        const customFilters: TopicButtonType[] = topics.map(x => {
            return {
                type: "filter",
                onPress: () => { },
                buttonText: x.name,
                imageSource: x.imageSource,
                taskCounter: 0,
                buttonColor: x.color
            } as TopicButtonType
        })

        setFilterButtons(customFilters.concat([addButtonData]))
    }, [])

    const renderItem: ListRenderItem<TopicButtonType> = ({ item }) => (
        <FilterButton
            type={item.type}
            onClick={item.onPress}
            buttonColor={item.buttonColor}
            buttonText={item.buttonText}
            taskCounter={item.taskCounter}
            imageSource={item.imageSource}
        />
    );

    const keyExtractor = (item: TopicButtonType, index: number) => index.toString();
    return (

        <FlatList
            data={filterButtons}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            numColumns={3}
            showsVerticalScrollIndicator={false}
        />

    );
}

export default TopicFlatList;