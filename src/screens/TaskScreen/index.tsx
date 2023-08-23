/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import TasksBackgroundLayout from '@/components/bacgrondWrappers/TasksBackgroundLayout';
import { useAppDispatch, useAppSelector } from '@/hooks';
import TaskFlatList from '@/components/TaskFlatList';
import { closeDone, ic_plus, openDone } from '@assets/images';
import { filterTasksByCompletion } from '@/helpingFunctions';
import ModalContainer from '@/components/ModalContainer';
import TaskModal from '@/components/Modals/TaskModal';
import { openModal } from '@/slices/modalSlice';


function TaskScreen() {
  const tasks = useAppSelector(state => state.tasks.value)
  const [isDoneTasksOpen, setIsDoneTasksOpen] = useState(false)

  const modalVisability = useAppSelector(state => state.modal.isVisible)
  const dispatch = useAppDispatch()

  const completedTasks = filterTasksByCompletion(tasks, true)
  const notCompletedTasks = filterTasksByCompletion(tasks, false)

  function tonggleDoneTasks() {
    setIsDoneTasksOpen(!isDoneTasksOpen)
  }

  function handleTogglModalVisiblety() {
    dispatch(openModal());
  }

  return (
    <>
      <TasksBackgroundLayout>
        <View style={styles.container}>
          <View style={styles.scrollContainer}>
            {!isDoneTasksOpen &&
              <TaskFlatList tasks={notCompletedTasks} />}
            <>
              <View style={styles.horizontalLine} />
              <View style={styles.doneTaskTongleContainer}>
                <Text style={styles.doneTaskTongText}>done tasks ({completedTasks.length})</Text>
                <TouchableOpacity onPress={tonggleDoneTasks}>
                  <Image source={isDoneTasksOpen ? closeDone : openDone} />
                </TouchableOpacity>
              </View>
            </>
            {isDoneTasksOpen &&
              <TaskFlatList tasks={completedTasks} />}
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.addButton} onPress={handleTogglModalVisiblety}>
              <Image style={styles.addButtonImage} source={ic_plus} />
            </TouchableOpacity>
          </View>
        </View>

        <ModalContainer isModalVisible={modalVisability} toggleModal={handleTogglModalVisiblety} >
          <TaskModal />
        </ModalContainer>
      </TasksBackgroundLayout>

    </>
  );
}

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 8,
  },

  container: {
    width: "90%",
    height: height,
    alignSelf: "center"
  },
  addButton: {
    alignItems: "center",
    justifyContent: "center",
    width: width * 0.14,
    height: width * 0.14,
    backgroundColor: "#646FD4",
    borderRadius: 100,
    zIndex: 20
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    padding: 30
  },
  addButtonImage: {
    width: "80%",
    height: "80%"
  },
  doneTaskTongText: {
    fontSize: 18,
    color: "#363636",
    fontFamily: "jost_regular",
  },
  doneTaskTongleContainer: {
    paddingHorizontal: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  horizontalLine: {
    borderBottomWidth: 2,
    borderBottomColor: '#888',
    marginVertical: 10,
  },
});

export default TaskScreen;
