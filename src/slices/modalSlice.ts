/* eslint-disable no-param-reassign */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface modalSliceState {
    isVisible: boolean;
    modalParams: string | null
}

const initialState: modalSliceState = {
    isVisible: false,
    modalParams: null
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state) => {
            state.modalParams = null
            state.isVisible = !state.isVisible;
        },
        closeModal: (state) => {
            state.isVisible = !state.isVisible;
        },
        openModalWithParams: (state, action: PayloadAction<string>) => {
            state.modalParams = action.payload
            state.isVisible = !state.isVisible;
        }
    },
});

export const { openModal,closeModal,openModalWithParams } = modalSlice.actions;

export default modalSlice.reducer;
