import React from 'react';
import Modal from 'react-native-modal';
import {
    Container,
    BlurViewContainer,
} from './styles';

interface ModalContainerProps {
    isModalVisible: boolean;
    toggleModal: () => void;
    children: React.ReactNode
}

const ModalContainer = ({
    isModalVisible,
    toggleModal,
    children
}: ModalContainerProps) => {

    return (
        <Container>
            <Modal
                isVisible={isModalVisible}
                backdropOpacity={0.7}
                onBackdropPress={toggleModal}
                style={{ margin: 0, justifyContent: 'center' }}
                avoidKeyboard={true}
                useNativeDriver={false}
            >
                <BlurViewContainer
                    blurType="light"
                    blurAmount={10}
                />
                {children}
            </Modal>
        </Container >
    );
};


export default ModalContainer;
