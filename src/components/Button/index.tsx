import S from './Button.styled';
import { ButtonProps } from './types';
import addicon from '../../images/add-icon.png';

const Button: React.FC<ButtonProps> = ({
    type,
    value,
    onclick,
}) => {
    if (value === null) {
        return (
            <S.GrayButton><S.GrayLight></S.GrayLight><S.BtnTitle>No value</S.BtnTitle></S.GrayButton>
        )
    } else {
        if (type === 'fall') {
            return (
                <>
                    {value ? <S.RedButton><S.RedLight></S.RedLight><S.BtnTitle>Risk</S.BtnTitle></S.RedButton> : <S.GreenButton><S.GreenLight></S.GreenLight><S.BtnTitle>Safe</S.BtnTitle></S.GreenButton>}
                </>
            );
        } else if (type === 'ring') {
            return (
                <>
                    {value ? <S.GreenButton><S.GreenLight></S.GreenLight><S.BtnTitle>Safe</S.BtnTitle></S.GreenButton> : <S.RedButton><S.RedLight></S.RedLight><S.BtnTitle>Risk</S.BtnTitle></S.RedButton>}
                </>
            );
        } else if (type === 'add') {
            return (
                <>
                    <S.AddButton onClick={onclick}><S.AddIcon src={addicon} alt="Add Icon"></S.AddIcon>작업자 정보 추가 및 수정</S.AddButton>
                </>
            )
        }
        else {
            return null;
        }
    }
    
}

export default Button;