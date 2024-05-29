import React from 'react';
import S from './Point.styled';
import type { PointProps } from './types';

const Point : React.FC<PointProps> = ({
    x,
    y,
    index,
    content,
  }) => {
    if (index === 1) {
        return (
            <>
                <S.PointContainer x={x} y={y}>
                    <S.PointTitle>{content}</S.PointTitle>
                    <S.Point1></S.Point1> 
                </S.PointContainer>
            </>
        )
    } else if (index === 2) {
        return (
            <>
                <S.PointContainer x={x} y={y}>
                    <S.PointTitle>{content}</S.PointTitle>
                    <S.Point2></S.Point2> 
                </S.PointContainer>
            </>
        )
    } else {
        return (
            <></>
        )
    }
}

export default Point;