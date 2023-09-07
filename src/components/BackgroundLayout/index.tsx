import React from 'react';
import { Image, View, ImageProps } from 'react-native';
import { styles } from './styles';

interface MainBackgroundLayoutProps {
  children: React.ReactNode;
  leftImage: ImageProps;
  rightImage: ImageProps
  isRightImageLarge: boolean
}

function BackgroundLayout({
  children,
  leftImage,
  rightImage,
  isRightImageLarge }: MainBackgroundLayoutProps) {
  return (
    <View style={styles.container}>
      <Image source={leftImage} style={styles.leftEllipse} />
      <Image source={rightImage} style={isRightImageLarge ? styles.rightLargeEllipse : styles.rightEllipse} />
      <View style={styles.childrenContainer}>{children}</View>
    </View>
  );
}

export default BackgroundLayout;
