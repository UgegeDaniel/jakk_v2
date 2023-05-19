import { Bar, Pie } from "react-chartjs-2"
import { pieData, barData, barOptions, pieOptions } from "./chartUtils"
import { useSelector } from "react-redux"
import { Row, Col } from 'react-bootstrap';

const UserStats = () => {
  const { userHistory } = useSelector((state) => state)
  const pieChartDataToDisplay = pieData(userHistory);
  const barChartDataToDisplay = barData(userHistory);

  if (!userHistory || userHistory?.length === 0)
    return <p className="lead text-secondary">No User History to Display</p>

  return (
    <Row>
      <Col md={3} className="border border-secondary">
        <Pie
          data={pieChartDataToDisplay}
          options={pieOptions} 
          className="mh-100"
        />
      </Col>
      <Col md={9} className="border border-secondary">
        <Bar
          data={barChartDataToDisplay}
          options={barOptions}
          className="w-100"
          style={{ minHeight: "200px" }}
        />
      </Col>
    </Row>
  )
}

export default UserStats