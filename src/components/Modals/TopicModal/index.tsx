import React, { useState } from 'react';

import { addTopic } from '@/slices/topicSlice';
import { useAppDispatch } from '@/hooks';
import {
    TextInput,
    TitleText,
    ContentContainer,
    ButtonContainer,
    ButtonText,
    CustomButton
} from '../styles';
import { closeModal } from '@/slices/modalSlice';

interface TopicModalProps {

}

const TopicModal = ({ }: TopicModalProps) => {
    const [name, setName] = useState('');
    const dispatch = useAppDispatch();

    function handleAddTopic(name: string) {
        dispatch(addTopic(name))
        dispatch(closeModal())
    }

    return (
        <ContentContainer >
            <TitleText>Topic name</TitleText>
            <TextInput
                placeholder="Work"
                value={name}
                onChangeText={(text) => setName(text)}
            />
            <ButtonContainer>
                <CustomButton onPress={() => { dispatch(closeModal()) }}>
                    <ButtonText>Back</ButtonText>
                </CustomButton>
                <CustomButton
                    onPress={() => {
                        handleAddTopic(name);
                        setName('');
                    }}
                >
                    <ButtonText>Add</ButtonText>
                </CustomButton>
            </ButtonContainer>
        </ContentContainer>
    );
};

export default TopicModal;
