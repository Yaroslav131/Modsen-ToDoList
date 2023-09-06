import React from 'react';
import {
  ImageProps, View, Text, TouchableOpacity, StyleSheet, Dimensions, Image,
} from 'react-native';
import { styles } from './styles';

interface HeaderProps {
  onPress: () => void;
  leftImage: ImageProps;
  title: string;
}

function Header({ onPress, leftImage, title }: HeaderProps) {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={onPress} style={styles.leftButton}>
        <Image source={leftImage} style={styles.buttonImage} />
      </TouchableOpacity>
      <Text style={styles.titleText}>{title}</Text>
    </View>
  );
}

export default Header;
