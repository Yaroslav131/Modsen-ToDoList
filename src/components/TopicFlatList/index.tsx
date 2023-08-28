/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import TopicButton from './TopicButton';
import { ImageName, StackNavigation, TaskType, topicButtonType } from '@/types';
import { useAppSelector } from '@/hooks';
import { useNavigation } from '@react-navigation/native';
import { filterTasksByTopic } from '@/helpingFunctions';

interface TopicButtonType {
  id: string;
  onPress: () => void;
  type: topicButtonType
  buttonText?: string;
  taskCounter?: number
  buttonColor?: string
  imageSource: ImageName
}

interface TopicFlatListProps {
  tasks: TaskType[]
  toggleAddTopicModal: () => void
}

function TopicFlatList({ toggleAddTopicModal, tasks }: TopicFlatListProps) {
  const [topicButtons, setTopicButtons] = useState<TopicButtonType[]>([]);
  const topics = useAppSelector((state) => state.topics.value);
  const navigation = useNavigation<StackNavigation>();


  const addButtonData: TopicButtonType = {
    id: "",
    type: 'add',
    onPress: toggleAddTopicModal,
    imageSource: 'icPlus',
  };

  useEffect(() => {
    const customFilters: TopicButtonType[] = topics.map((x) => {
      const topicTasks = filterTasksByTopic(tasks, x.id) 
      return (
        {
          id: x.id,
          type: x.type,
          onPress: () => { navigation.navigate("TaskScreen", { type: ["Topic", { id: x.id }], title: `${x.name} tasks` }) },
          buttonText: x.name,
          imageSource: x.imageSource,
          buttonColor: x.color,
          taskCounter: topicTasks.length
        } as TopicButtonType)
    });

    setTopicButtons(customFilters.concat([addButtonData]));
  }, [topics,tasks]);

  const renderItem: ListRenderItem<TopicButtonType> = ({ item }) => (
    <TopicButton
      id={item.id}
      type={item.type}
      onClick={item.onPress}
      buttonColor={item.buttonColor}
      buttonText={item.buttonText}
      imageSource={item.imageSource}
      taskCounter={item.taskCounter}
    />
  );

  const keyExtractor = (item: TopicButtonType, index: number) => index.toString();
  return (

    <FlatList
      data={topicButtons}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      numColumns={3}
      showsVerticalScrollIndicator={false}
    />

  );
}

export default TopicFlatList;
