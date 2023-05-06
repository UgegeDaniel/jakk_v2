import { Bar, Pie } from "react-chartjs-2"
import { pieData, barData, barOptions, pieOptions } from "./chartUtils"
import { useSelector } from "react-redux"
import { Row, Col } from 'react-bootstrap';

const UserStats = () => {
  const userHistory = useSelector((state) => state.userState.userHistory)
  const pieDataToDisplay = pieData(userHistory);
  const barDataToDisplay = barData(userHistory);

  return (
    <Row>
      <Col md={3} className="border border-secondary">
        {userHistory?.length > 0
          ? <Pie data={pieDataToDisplay} options={pieOptions} className="mh-100"/>
          : <p className="text-primary">No User History to Display</p>
        }
      </Col>
      <Col md={9} className="border border-secondary">
        <Bar data={barDataToDisplay} options={barOptions} className="w-100"/>
      </Col>
    </Row>
  )
}

export default UserStats