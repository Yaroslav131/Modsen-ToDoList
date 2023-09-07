import React, { useEffect, useState } from 'react';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { images } from '@/constants';
import MainBackgroundLayout from '@/components/BackgroundWrappers/MainBackgroundLayout';
import { filtertoDoToday, formatDate } from '@/helpingFunctions';
import DateButton from '@/components/DateButton';
import TopicFlatList from '@/components/TopicFlatList';
import { styles } from './styles';
import ModalContainer from '@/components/ModalContainer';
import TopicModal from '@/components/Modals/TopicModal';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { openModal } from '@/slices/modalSlice';
import SearchTask from '@/components/SearchTask';
import Header from '@/components/Header';
import { StackNavigation } from '@/types';

function MainScreen() {
  const [currentDate, setCurrentDate] = useState(formatDate(new Date()));
  const tasks = useAppSelector((state) => state.tasks.value);
  const modalVisability = useAppSelector((state) => state.modal.isVisible);
  const dispatch = useAppDispatch();
  const toDoToday = filtertoDoToday(tasks);

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
    dispatch(openModal());
  }


  return (
    <MainBackgroundLayout>
      <Header
        title="Modsen Todo list"
        leftImage={images.burgerMenu}
        onPress={() => {
          navigation.dispatch(DrawerActions.toggleDrawer());
        }}
      />
      <View style={styles.container}>
        <Text style={styles.dailyTaskText}>
          You have
          {' '}
          <Text style={styles.changeableTaskText}>
            {toDoToday.length}
            {' '}
            task
            {toDoToday.length !== 1 ? 's' : ''}
          </Text>
          {' '}
          today!
        </Text>
        <Text style={styles.dateText}>{currentDate}</Text>
        <SearchTask />

        <View style={styles.dateButtonContainer}>
          <DateButton
            onPress={() => {
          
              navigation.navigate('TaskScreen', { type: 'Today', title: "Today's tasks" });
            }}
            buttonText="Today"
          />
          <DateButton
            onPress={() => {
              navigation.navigate('TaskScreen', { type: 'Week', title: 'Week tasks' });
            }}
            buttonText="Week"
          />
          <DateButton
            onPress={() => {
              navigation.navigate('TaskScreen', { type: 'Month', title: 'Month tasks' });
            }}
            buttonText="Month"
          />
        </View>

        <View style={styles.bottomContainer}>
          <TopicFlatList tasks={tasks} toggleAddTopicModal={handleToggleAddTopicModal} />
        </View>
      </View>

      <ModalContainer isModalVisible={modalVisability} toggleModal={handleToggleAddTopicModal}>
        <TopicModal />
      </ModalContainer>
    </MainBackgroundLayout>
  );
}

export default MainScreen;
