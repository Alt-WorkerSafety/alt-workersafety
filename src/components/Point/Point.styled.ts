import styled from 'styled-components';
import redpin from '../../images/redpin.png';
import bluepin from '../../images/bluepin.png';
import type { PointProps } from './types';

const PointContainer = styled.div<Pick<PointProps, 'x' | 'y'>>`
  position: absolute;
  top: ${props => props.y}px;
  left: ${props => props.x}px;
  width: 64px;
  height: 100px;
`;

const Point1 = styled.div`
  position: absolute;
  width: 45px;
  height: 45px;
  background-image: url(${redpin});
  background-size: contain;
  background-repeat: no-repeat;
`;

const Point2 = styled(Point1)`
  background-image: url(${bluepin});
  width: 38px;
  height: 40px;
`;

const PointTitle = styled.div`
  position: absolute;
  top: -20px;
  left: 2px;
  text-align: center;
  font-size: 13px;
  padding: 2px;
  font-weight: bold;
`;

export default { PointContainer, Point1, Point2, PointTitle };
