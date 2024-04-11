import S from './Button.styled';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({
    type,
    value,
}) => {
    if (type === 'fall') {
        return (
            <>
                {value ? <S.RedButton>위험</S.RedButton> : <S.GreenButton>안전</S.GreenButton>}
            </>
        );
    } else if (type === 'ring') {
        return (
            <>
                {value ? <S.GreenButton>안전</S.GreenButton> : <S.RedButton>위험</S.RedButton>}
            </>
        );
    } else {
        return null;
    }
}

export default Button;