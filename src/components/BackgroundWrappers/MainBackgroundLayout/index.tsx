import React from 'react';
import { Image, View } from 'react-native';
import { images } from '@/constants';
import { styles } from './styles';

interface MainBackgroundLayoutProps {
  children: React.ReactNode;
}

function MainBackgroundLayout({ children }: MainBackgroundLayoutProps) {
  return (
    <View style={styles.container}>
      <Image source={images.leftEllipse} style={styles.leftEllipse} />
      <Image source={images.rightEllipse} style={styles.rightEllipse} />
      <View style={styles.childrenContainer}>{children}</View>
    </View>
  );
}

export default MainBackgroundLayout;
