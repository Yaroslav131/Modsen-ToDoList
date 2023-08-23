/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useEffect, useState, useId } from 'react';

import MainBackgroundLayout from '@/components/bacgrondWrappers/MainBackgroundLayout';
import { filterTasksForToday, formatDate } from '@/helpingFunctions';
import { searchIcon } from '@assets/images';
import DateButton from '@/components/DateButton';
import TopicFlatList from '@/components/TopicFlatList';

import {
  Container,
  DailyTaskText,
  ChangeableTaskText,
  DateText,
  SearchContainer,
  SearchImage,
  SearchInput,
  DateButtonContainer,
  BottomContainer,
} from './styles';
import ModalContainer from '@/components/ModalContainer';
import TopicModal from '@/components/Modals/TopicModal';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { openModal } from '@/slices/modalSlice';

function MainScreen() {
  const [currentDate, setCurrentDate] = useState(formatDate(new Date()));
  const [inputText, setInputText] = useState('');

  const tasks = useAppSelector(state => state.tasks.value)
  const modalVisability = useAppSelector(state => state.modal.isVisible)
  const dispatch = useAppDispatch()

  const todayTasks = filterTasksForToday(tasks)

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
      <Container>
        <DailyTaskText>
          {' '}
          you have
          {' '}
          <ChangeableTaskText>
            {todayTasks.length}
            {' '}
            task
            {todayTasks.length !== 1 ? 's' : ''}
          </ChangeableTaskText>
          {' '}
          today!
        </DailyTaskText>
        <DateText>{currentDate}</DateText>
        <SearchContainer>
          <SearchImage source={searchIcon} />
          <SearchInput
            placeholder="Search tasks"
            value={inputText}
            onChangeText={(text) => setInputText(text)}
          />
        </SearchContainer>

        <DateButtonContainer>
          <DateButton buttonText="Today" />
          <DateButton buttonText="Week" />
          <DateButton buttonText="Month" />
        </DateButtonContainer>

        <BottomContainer>
          <TopicFlatList
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
