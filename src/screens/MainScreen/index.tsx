import React, { useEffect, useState } from 'react';

import MainBackgroundLayout from '../../components/MainBackgroundLayout';
import { formatDate } from '../../helpingFunctions';
import { searchIcon } from '../../../assets/images';
import DateButton from '../../components/DateButton';
import TopicFlatList from '../../components/TopicFlatList';

import {
  Container,
  DailyTaskText,
  ChangeableTaskText,
  DateText,
  SearchContainer,
  SearchImage,
  SearchInput,
  DateButtonContainer,
  BottomContainer
} from './styles';


const MainScreen: React.FC = () => {
  let taskCount = 5;
  
  const [currentDate, setCurrentDate] = useState(formatDate(new Date()));
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(formatDate(new Date()));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <MainBackgroundLayout>
      <Container>
        <DailyTaskText>
          {' '}
          you have{' '}
          <ChangeableTaskText>
            {taskCount} task{taskCount !== 1 ? 's' : ''}
          </ChangeableTaskText>{' '}
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
          <TopicFlatList />
        </BottomContainer>
      </Container>
    </MainBackgroundLayout>
  );
};



export default MainScreen;
