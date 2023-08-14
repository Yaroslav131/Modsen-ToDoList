import React, { useEffect, useState } from 'react';

import MainBackgroundLayout from '../../components/MainBackgroundLayout';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { formatDate } from '../../helpingFunctions';
import { searchIcon } from '../../../assets/images';
import DateButton from '../../components/DateButton';
import FilterFlatList from '../../components/FilterFlatList';


interface MainScreenProps { }

const MainScreen = (props: MainScreenProps) => {
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
      <View style={styles.container}>
        <Text style={styles.dailyTaskText}>
          {' '}
          you have{' '}
          <Text style={styles.chanhebleTaskText}>
            {taskCount} task{taskCount != 1 ? 's' : ''}
          </Text>{' '}
          today!
        </Text>
        <Text style={styles.dateText}>{currentDate}</Text>
        <View style={styles.searchContainer}>
          <Image style={styles.searchImg} source={searchIcon} />
          <TextInput
            placeholder="Search tasks"
            style={styles.input}
            value={inputText}
            onChangeText={(text) => setInputText(text)}
          />
        </View>

        <View style={styles.dateButtonContainer}>
          <DateButton buttonText="Today" />
          <DateButton buttonText="Week" />
          <DateButton buttonText="Month" />
        </View>

        <FilterFlatList />
      </View>
    </MainBackgroundLayout>
  );
};

const styles = StyleSheet.create({
  dateButtonContainer: {
    marginTop: 70,
    marginBottom: 30,
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-evenly',
  },
  searchContainer: {
    marginTop: 20,
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 15,
    flexDirection: 'row',
    width: '80%',
    backgroundColor: '#FFF',
    gap: 5,
    elevation: 30,
  },
  searchImg: {
    alignSelf: 'center',
    flex: 1,
    minHeight: 30,
  },

  input: {
    fontFamily: 'jost_regular',
    color: '#363636',
    flex: 9,
    width: '100%',
    fontSize: 24,
  },

  container: {
    alignItems: 'center',
  },
  chanhebleTaskText: {
    color: '#FFF',
  },
  dailyTaskText: {
    fontFamily: 'jost_semiBold',
    color: '#363636',
    fontSize: 28,
    textAlign: 'center',
    marginTop: 120,
  },
  dateText: {
    fontFamily: 'jost_semiBold',
    color: '#363636',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default MainScreen;
