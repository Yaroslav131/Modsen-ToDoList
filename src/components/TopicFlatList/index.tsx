/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import TopicButton from './TopicButton';
import { ImageName, topicButtonType } from '@/types';
import { useAppSelector } from '@/hooks';

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
  toggleAddTopicModal: () => void
}

function TopicFlatList({ toggleAddTopicModal }: TopicFlatListProps) {
  const [topicButtons, setTopicButtons] = useState<TopicButtonType[]>([]);
  const topics = useAppSelector((state) => state.topics.value);

  const addButtonData: TopicButtonType = {
    id: "",
    type: 'add',
    onPress: toggleAddTopicModal,
    imageSource: 'icPlus',
  };

  useEffect(() => {
    const customFilters: TopicButtonType[] = topics.map((x) => ({
      id: x.id,
      type: x.type,
      onPress: () => { },
      buttonText: x.name,
      imageSource: x.imageSource,
      buttonColor: x.color,
    } as TopicButtonType));

    setTopicButtons(customFilters.concat([addButtonData]));
  }, [topics]);

  const renderItem: ListRenderItem<TopicButtonType> = ({ item }) => (
    <TopicButton
      id={item.id}
      type={item.type}
      onClick={item.onPress}
      buttonColor={item.buttonColor}
      buttonText={item.buttonText}
      imageSource={item.imageSource}
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
