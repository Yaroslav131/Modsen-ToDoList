/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import {
  StyleSheet, View, Text, TouchableOpacity, Image, Dimensions,
} from 'react-native';
import {
  backArrow, closeDone, ic_plus, openDone,
} from '@assets/images';
import { useNavigation, useRoute } from '@react-navigation/native';
import TasksBackgroundLayout from '@/components/BackgroundWrappers/TasksBackgroundLayout';
import { useAppDispatch, useAppSelector } from '@/hooks';
import TaskFlatList from '@/components/TaskFlatList';
import { filterTasksByCompletion, getSortedTasks } from '@/helpingFunctions';
import ModalContainer from '@/components/ModalContainer';
import TaskModal from '@/components/Modals/TaskModal';
import { openModal } from '@/slices/modalSlice';
import { RootRouteProps, StackNavigation, TaskType } from '@/types';
import Header from '@/components/Header';

function TaskScreen() {
  const [isDoneTasksOpen, setIsDoneTasksOpen] = useState(false);
  const [passedTasks, setPassedTasks] = useState<TaskType[]>([]);
  const modalVisability = useAppSelector((state) => state.modal.isVisible);
  const tasks = useAppSelector((state) => state.tasks.value);
  const route = useRoute<RootRouteProps<'TaskScreen'>>();

  const dispatch = useAppDispatch();

  const navigation = useNavigation<StackNavigation>();

  const completedTasks = filterTasksByCompletion(passedTasks, true);
  const notCompletedTasks = filterTasksByCompletion(passedTasks, false);

  useEffect(() => {
    setPassedTasks(getSortedTasks(tasks, route.params.type));
  }, [tasks]);

  function tonggleDoneTasks() {
    setIsDoneTasksOpen(!isDoneTasksOpen);
  }

  function handleTogglModalVisiblety() {
    dispatch(openModal());
  }

  return (
    <TasksBackgroundLayout>
      <Header
        title={route.params.title}
        leftImage={backArrow}
        onPress={() => {
          navigation.goBack();
        }}
      />

      <View style={styles.container}>
        <View style={styles.scrollContainer}>
          {!isDoneTasksOpen && <TaskFlatList tasks={notCompletedTasks} />}

          <View>
            <View style={styles.horizontalLine} />
            <View style={[styles.doneTaskTongleContainer]}>
              <Text style={styles.doneTaskTongText}>
                done tasks (
                {completedTasks.length}
                )
              </Text>
              <TouchableOpacity onPress={tonggleDoneTasks}>
                <Image source={isDoneTasksOpen ? closeDone : openDone} />
              </TouchableOpacity>
            </View>
          </View>

          {isDoneTasksOpen && <TaskFlatList tasks={completedTasks} />}
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.addButton} onPress={handleTogglModalVisiblety}>
            <Image style={styles.addButtonImage} source={ic_plus} />
          </TouchableOpacity>
        </View>
      </View>

      <ModalContainer isModalVisible={modalVisability} toggleModal={handleTogglModalVisiblety}>
        <TaskModal />
      </ModalContainer>
    </TasksBackgroundLayout>
  );
}

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  buttonImage: {
    resizeMode: 'stretch',
  },
  titleText: {
    fontSize: 28,
    color: '#FFF',
    fontFamily: 'jost_semiBold',
  },
  backButton: {
    justifyContent: 'center',
    width: height * 0.03,
    height: height * 0.03,
    position: 'absolute',
    left: 0,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: height * 0.09,
  },
  scrollContainer: {
    flex: 5,
  },

  container: {
    width: '90%',
    height: height * 0.9,
    alignSelf: 'center',
  },
  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.14,
    height: width * 0.14,
    backgroundColor: '#646FD4',
    borderRadius: 100,
    zIndex: 20,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonImage: {
    width: '80%',
    height: '80%',
  },
  doneTaskTongText: {
    fontSize: 18,
    color: '#363636',
    fontFamily: 'jost_regular',
  },
  doneTaskTongleContainer: {
    paddingHorizontal: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  horizontalLine: {
    borderBottomWidth: 2,
    borderBottomColor: '#888',
    marginVertical: 10,
  },
});

export default TaskScreen;
