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
              <S.PointTitle>{content}</S.PointTitle>
              <S.Point1 x={x} y={y}></S.Point1> 
            </>
        )
    } else if (index === 2) {
        return (
            <>
                <S.PointTitle>{content}</S.PointTitle>
                <S.Point2 x={x} y={y}></S.Point2> 
            </>
        )
    } else {
        return (
            <></>
        )
    }
}

export default Point;