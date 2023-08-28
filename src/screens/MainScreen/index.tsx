/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useEffect, useState } from 'react';

import MainBackgroundLayout from '@/components/BackgroundWrappers/MainBackgroundLayout';
import { filtertoDoToday, formatDate } from '@/helpingFunctions';
import DateButton from '@/components/DateButton';
import TopicFlatList from '@/components/TopicFlatList';

import {
  Container,
  DailyTaskText,
  ChangeableTaskText,
  DateText,
  DateButtonContainer,
  BottomContainer,
} from './styles';
import ModalContainer from '@/components/ModalContainer';
import TopicModal from '@/components/Modals/TopicModal';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { openModal } from '@/slices/modalSlice';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import SearchTask from '@/components/SearchTask';
import { burgerMenu } from '@assets/images';
import Header from '@/components/Header';
import { StackNavigation } from '@/types';

function MainScreen() {
  const [currentDate, setCurrentDate] = useState(formatDate(new Date()));
  const tasks = useAppSelector(state => state.tasks.value)
  const modalVisability = useAppSelector(state => state.modal.isVisible)
  const dispatch = useAppDispatch()
  const toDoToday = filtertoDoToday(tasks)

  const navigation = useNavigation<StackNavigation>();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(formatDate(new Date()));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  function handleToggleAddTopicModal() {
    dispatch(openModal())
  }


  return (
    <MainBackgroundLayout>
      <Header title="Modsen Todo list"
        leftImage={burgerMenu}
        onPress={() => { navigation.dispatch(DrawerActions.toggleDrawer()); }} />
      <Container>
        <DailyTaskText>
          {' '}
          you have
          {' '}
          <ChangeableTaskText>
            {toDoToday.length}
            {' '}
            task
            {toDoToday.length !== 1 ? 's' : ''}
          </ChangeableTaskText>
          {' '}
          today!
        </DailyTaskText>
        <DateText>{currentDate}</DateText>
        <SearchTask tasks={tasks} />

        <DateButtonContainer>
          <DateButton
            onPress={() => { navigation.navigate("TaskScreen", { type: "Today", title: "Today's tasks" }) }}
            buttonText="Today" />
          <DateButton
            onPress={() => { navigation.navigate("TaskScreen", { type: "Week", title: "Week tasks" }) }}
            buttonText="Week" />
          <DateButton
            onPress={() => { navigation.navigate("TaskScreen", { type: "Month", title: "Month tasks" }) }}
            buttonText="Month" />
        </DateButtonContainer>

        <BottomContainer>
          <TopicFlatList
            tasks={tasks}
            toggleAddTopicModal={handleToggleAddTopicModal} />
        </BottomContainer>
      </Container>

      <ModalContainer isModalVisible={modalVisability} toggleModal={handleToggleAddTopicModal} >
        <TopicModal />
      </ModalContainer>

    </MainBackgroundLayout>
  );
}


export default MainScreen;
