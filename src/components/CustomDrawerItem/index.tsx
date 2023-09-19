import React from 'react';
import {
  ImageProps, Image, Text, View,
} from 'react-native';
import { styles } from './styles';

interface CustomDrawerItemProps {
  icon: ImageProps;
  title: string;
}

function CustomDrawerItem({ icon, title }: CustomDrawerItemProps) {
  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default CustomDrawerItem;
