import { useState, useEffect } from "react";
import { FlatList, ListRenderItem } from "react-native";
import FilterButton from "./FilterButton";
import { ImageName, filterButtonType } from "../../types";
import { testArr } from "../../constants";

interface FilterButtonType {
    onPress: () => void;
    type: filterButtonType
    buttonText?: string;
    taskCounter?: number
    buttonColor?: string
    imageSource: ImageName
}

function FilterFlatList() {
    const [filterButtons, setFilterButtons] = useState<FilterButtonType[]>([])

    const addButtonData: FilterButtonType = {
        type: "add",
        onPress: () => { },
        imageSource: "icPlus",
    }

    useEffect(() => {
        const customFilters: FilterButtonType[] = testArr.map(x => {
            return {
                type: "filter",
                onPress: () => { },
                buttonText: x.topic,
                imageSource: "icDefault",
                taskCounter: x.taskCounter,
                buttonColor: x.buttonColor
            } as FilterButtonType
        })
        
        setFilterButtons(data.concat(customFilters).concat([addButtonData]))
    }, [])

    const data: FilterButtonType[] = [
        {
            type: "filter",
            onPress: () => { },
            buttonText: "School",
            imageSource: "icSchool",
            taskCounter: 4,
            buttonColor: "#5EB0D2"
        },
        {
            type: "filter",
            onPress: () => { },
            buttonText: "Work",
            imageSource: "icWork",
            taskCounter: 2,
            buttonColor: "#BE8972"
        }
        ,
        {
            type: "filter",
            onPress: () => { },
            buttonText: "Shop",
            imageSource: "icShopping",
            taskCounter: 12,
            buttonColor: "#2A8899"
        },
        {
            type: "filter",
            onPress: () => { },
            buttonText: "Read",
            imageSource: "icBook",
            taskCounter: 2,
            buttonColor: "#646FD4"
        }
        ,
        {
            type: "filter",
            onPress: () => { },
            buttonText: "Workout",
            imageSource: "icWorkout",
            taskCounter: 0,
            buttonColor: "#83BC74"
        },
    ]

    const renderItem: ListRenderItem<FilterButtonType> = ({ item }) => (
        <FilterButton
            type={item.type}
            onClick={item.onPress}
            buttonColor={item.buttonColor}
            buttonText={item.buttonText}
            taskCounter={item.taskCounter}
            imageSource={item.imageSource}
        />
    );

    const keyExtractor = (item: FilterButtonType, index: number) => index.toString();
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

export default FilterFlatList;