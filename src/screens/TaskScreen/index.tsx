import React, { useState, useMemo } from 'react';
import {
  View, Text, TouchableOpacity, Image,
} from 'react-native';
import { IMAGES } from '@/constants';
import { useNavigation, useRoute } from '@react-navigation/native';
import BackgroundLayout from '@/components/BackgroundLayout';
import { useAppDispatch, useAppSelector } from '@/hooks';
import TaskFlatList from '@/components/TaskFlatList';
import { filterTasksByCompletion, getSortedTasks } from '@/helpingFunctions';
import ModalContainer from '@/components/ModalContainer';
import TaskModal from '@/components/Modals/TaskModal';
import { openModal } from '@/slices/modalSlice';
import { RootRouteProps, StackNavigation } from '@/types';
import Header from '@/components/Header';
import { styles } from './styles';

function TaskScreen() {
  const [isDoneTasksOpen, setIsDoneTasksOpen] = useState(false);

  const modalVisability = useAppSelector((state) => state.modal.isVisible);
  const tasks = useAppSelector((state) => state.tasks.value);
  const route = useRoute<RootRouteProps<'TaskScreen'>>();
  const dispatch = useAppDispatch();
  const navigation = useNavigation<StackNavigation>();

  const passedTasks = useMemo(() => getSortedTasks(tasks, route.params.type), [tasks]);
  const completedTasks = filterTasksByCompletion(passedTasks, true);
  const notCompletedTasks = filterTasksByCompletion(passedTasks, false);

  function tonggleDoneTasks() {
    setIsDoneTasksOpen(!isDoneTasksOpen);
  }

  function handleTogglModalVisiblety() {
    dispatch(openModal());
  }

  return (
    <BackgroundLayout
      leftImage={IMAGES.leftEllipse}
      rightImage={IMAGES.largeRightEllipse}
      isRightImageLarge={true}>
      <Header
        title={route.params.title}
        leftImage={IMAGES.backArrow}
        onPress={() => {
          navigation.goBack();
        }}
      />

      <View style={styles.container}>
        <View style={styles.scrollContainer}>
          {!isDoneTasksOpen && <TaskFlatList tasks={notCompletedTasks} />}

          <View style={styles.separatContainer}>
            <View style={styles.horizontalLine} />
            <View style={[styles.doneTaskTongleContainer]}>
              <Text style={styles.doneTaskTongText}>
                done tasks (
                {completedTasks.length}
                )
              </Text>
              <TouchableOpacity onPress={tonggleDoneTasks}>
                <Image source={isDoneTasksOpen ? IMAGES.closeDone : IMAGES.openDone} />
              </TouchableOpacity>
            </View>
          </View>

          {isDoneTasksOpen && <TaskFlatList tasks={completedTasks} />}
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.addButton} onPress={handleTogglModalVisiblety}>
            <Image style={styles.addButtonImage} source={IMAGES.ic_plus} />
          </TouchableOpacity>
        </View>
      </View>

      <ModalContainer isModalVisible={modalVisability} toggleModal={handleTogglModalVisiblety}>
        <TaskModal />
      </ModalContainer>
    </BackgroundLayout>
  );
}

export default TaskScreen;
