import styled from 'styled-components';
import redpin from '../../images/redpin.png';
import bluepin from '../../images/bluepin.png';
import type {PointProps} from './types';

const Point1 = styled.div<Pick<PointProps, 'x' | 'y'>>`
  position: absolute;
  width: 56px;
  height: 56px;
  top: ${props => props.y}px;
  left: ${props => props.x}px;
  background-image: url(${redpin});
  background-size: contain;
  background-repeat: no-repeat;
`
const Point2 = styled(Point1)`
  background-image: url(${redpin});
`;

const PointTitle = styled.div`
    font-size: 13px;
    padding: 2px;
`;

export default {Point1, Point2, PointTitle};