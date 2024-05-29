import styled from 'styled-components';
import ML from '../images/ML_district.png';

const RowWrapper = styled.div`
  display: flex;
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const TitleText = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: black;
  padding: 16px;
`;

const SubTitleText = styled(TitleText)`
  font-size: 28px;
  padding: 5px 16px;
`;

const FloorPlanWrapper = styled.div`
  width: 630px;
  height: 300px;
  margin: 0px 10px 0px 20px;
  border: 2px solid black;
`;

const FloorPlan = styled.div`
  position: relative;
  height: 360px;
  background-image: url(${ML});
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 10px;
`;

const ListWrapper = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  margin: 10px;
`;

const WorkerList = styled.div`
  display: table;
`;

const WorkerInfo = styled.div`
  display: table-cell;
  padding: 10px;
  border: 1px solid black;
`;

const WorkerInfoTitle = styled.div`
  display: table-row;
  background-color: black;
  font-weight: bold;
  color: white;
`;

const WorkerInfoWrapper = styled(WorkerInfoTitle)`
  background-color: white;
  font-weight: normal;
  color: black;
`

const StatusWrapper = styled.div`
  font-weight: bold;
  width: 492px;
  height: 260px;
  margin: 0px 20px 0px 10px;
  border: 2px solid black;
  padding: 20px;
  overflow-y: auto;
`;

interface DeleteProps {
  active: boolean;
}

const DeleteIcon = styled.img<DeleteProps>`
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => (props.active ? "pointer" : "default")}; 
  transition: transform 0.3s ease;
  pointer-events: ${(props) => (props.active ? "auto" : "none")};
  &:hover {
    transform: ${(props) => (props.active ? "scale(1.2)" : "none")};
  }
`;

export default {RowWrapper, ColumnWrapper, TitleText, SubTitleText, FloorPlanWrapper, FloorPlan, ListWrapper, WorkerList, WorkerInfo, WorkerInfoTitle, WorkerInfoWrapper, StatusWrapper, DeleteIcon}