import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import * as Yup from "yup";

import { StackNavigation } from "@/types";
import { searchIcon } from "@assets/images";

import {
    SearchButton,
    SearchContainer,
    SearchInput,
    SearchImage,
    SearchFieldContainer
} from "./styles";
import { ErrorText } from "../../../styles";

export const validationSchema = Yup.object().shape({
    inputText: Yup.string().required("Input is required"),
});

function SearchTask() {
    const [inputText, setInputText] = useState("");
    const [validationError, setValidationError] = useState("");
    const navigation = useNavigation<StackNavigation>();

    const handleSubmit = async () => {
        try {
            await validationSchema.validate({ inputText });
            navigation.navigate("TaskScreen", {
                type: ["Searched", { name: inputText }],
                title: "Found tasks",
            });
            setInputText("");
            setValidationError("");
        } catch (error: any) {
            setValidationError(error.message);
        }
    };

    return (
        <SearchContainer>
            {validationError !== "" && (
                <ErrorText >{validationError}</ErrorText>
            )
            }
            <SearchFieldContainer>
                <SearchButton onPress={handleSubmit}>
                    <SearchImage source={searchIcon} />
                </SearchButton>

                <SearchInput
                    onSubmitEditing={handleSubmit}
                    placeholder="Search tasks"
                    value={inputText}
                    onChangeText={(text) => setInputText(text)}
                />
            </SearchFieldContainer>

        </SearchContainer >
    );
}

export default SearchTask;