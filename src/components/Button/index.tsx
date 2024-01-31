import S from './Button.styled';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({
    children,
    falling,
    safebelt,
}) => {
    const isRed = falling || safebelt === false;

    return (
        <>
            {isRed ? <S.RedButton>{children}</S.RedButton> : <S.GreenButton>{children}</S.GreenButton>}
        </>
    )
}

export default Button;