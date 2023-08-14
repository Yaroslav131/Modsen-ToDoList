import { ButtonWrapper, ButtonText } from "./styles";

interface DateButtonProps {
    buttonText: string
}

const DateButton: React.FC<DateButtonProps> = ({ buttonText }) => {
    return (
        <ButtonWrapper activeOpacity={0.5}>
            <ButtonText>{buttonText}</ButtonText>
        </ButtonWrapper>
    );
};


export default DateButton;