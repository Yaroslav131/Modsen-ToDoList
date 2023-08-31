/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import Modal from 'react-native-modal';
import { TouchableWithoutFeedback } from 'react-native';
import { Container, BlurViewContainer } from './styles';

interface ModalContainerProps {
  isModalVisible: boolean;
  toggleModal: () => void;
  children: React.ReactNode;
}

function ModalContainer({ isModalVisible, toggleModal, children }: ModalContainerProps) {
  return (
    <Container>
      <Modal
        isVisible={isModalVisible}
        backdropOpacity={0.7}
        onBackdropPress={toggleModal}
        style={{ margin: 0, justifyContent: 'center' }}
        avoidKeyboard
        useNativeDriver={false}
      >
        <TouchableWithoutFeedback onPress={toggleModal}>
          <BlurViewContainer blurType="light" blurAmount={10} />
        </TouchableWithoutFeedback>
        {children}
      </Modal>
    </Container>
  );
}

export default ModalContainer;
