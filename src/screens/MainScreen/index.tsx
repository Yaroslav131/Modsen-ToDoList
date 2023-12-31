import React, { useEffect, useState } from 'react';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { DATE_BUTTONS, IMAGES } from '@/constants';
import BackgroundLayout from '@/components/BackgroundLayout';
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
import { StackNavigation, tasksScreenType } from '@/types';

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

  const dateButtonComponents = DATE_BUTTONS.map((buttonData, index) => (
    <DateButton
      key={index}
      onPress={() => {
        navigation.navigate('TaskScreen', { type: buttonData.type as tasksScreenType, title: buttonData.title });
      }}
      buttonText={buttonData.buttonText}
    />
  ));

  return (
    <BackgroundLayout
      leftImage={IMAGES.leftEllipse}
      rightImage={IMAGES.rightEllipse}
      isRightImageLarge={false}>
      <Header
        title="Modsen Todo list"
        leftImage={IMAGES.burgerMenu}
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
          {dateButtonComponents}
        </View>

        <View style={styles.bottomContainer}>
          <TopicFlatList tasks={tasks} toggleAddTopicModal={handleToggleAddTopicModal} />
        </View>
      </View>

      <ModalContainer isModalVisible={modalVisability} toggleModal={handleToggleAddTopicModal}>
        <TopicModal />
      </ModalContainer>
    </BackgroundLayout>
  );
}

export default MainScreen;
