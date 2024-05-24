import S from './Button.styled';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({
    type,
    value,
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
        } else {
            return null;
        }
    }
    
}

export default Button;