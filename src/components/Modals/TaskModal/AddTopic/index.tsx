import React from 'react';
import { FlatList } from 'react-native';
import { TitleText } from '@/components/Modals/TaskModal/styles';
import { useAppSelector } from '@/hooks';
import { TopicType } from '@/types';
import {
  ButtonText, Container, TopicButton, styles,
} from './styles';

interface AddTopicProps {
  handleOnTopicChosen: (id: string) => void;
  chosenId?: string;
}

function AddTopic({ handleOnTopicChosen, chosenId }: AddTopicProps) {
  const topics = useAppSelector((state) => state.topics.value);

  const renderItem = ({ item }: { item: TopicType }) => (
    <TopicButton
      chosen={item.id === chosenId}
      onPress={() => {
        handleOnTopicChosen(item.id);
      }}
    >
      <ButtonText>{item.name}</ButtonText>
    </TopicButton>
  );

  const keyExtractor = (item: TopicType) => item.id;

  return (
    <Container>
      <TitleText>Choose topic</TitleText>

      <FlatList
        style={styles.FlatList}
        data={topics}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        numColumns={1}
      />
    </Container>
  );
}

export default AddTopic;
