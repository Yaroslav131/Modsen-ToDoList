import React from 'react';
import { Image, View } from 'react-native';
import { leftEllipse, largeRightEllipse } from '@assets/images';
import { styles } from './styles';

interface MainBackgroundLayoutProps {
  children: React.ReactNode;
}

function MainBackgroundLayout({ children }: MainBackgroundLayoutProps) {
  return (
    <View style={styles.container}>
      <Image source={leftEllipse} style={styles.leftEllipse} />
      <Image source={largeRightEllipse} style={styles.rightEllipse} />
      <View style={styles.childrenContainer}>{children}</View>
    </View>
  );
}

export default MainBackgroundLayout;
