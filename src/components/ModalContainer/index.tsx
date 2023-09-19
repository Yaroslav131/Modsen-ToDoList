import React from 'react';
import Modal from 'react-native-modal';
import { TouchableWithoutFeedback, View } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { styles } from './styles';

interface ModalContainerProps {
  isModalVisible: boolean;
  toggleModal: () => void;
  children: React.ReactNode;
}

function ModalContainer({ isModalVisible, toggleModal, children }: ModalContainerProps) {
  return (
    <View style={styles.container}>
      <Modal
        isVisible={isModalVisible}
        backdropOpacity={0.7}
        onBackdropPress={toggleModal}
        style={styles.modalStyles}
        avoidKeyboard
        useNativeDriver={false}
      >
        <TouchableWithoutFeedback onPress={toggleModal}>
          <BlurView style={styles.blurViewContainer} blurType="light" blurAmount={10} />
        </TouchableWithoutFeedback>
        {children}
      </Modal>
    </View>
  );
}

export default ModalContainer;
