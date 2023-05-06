import { Col, Row } from "react-bootstrap";
import img4 from '../../assets/images/about/img4.jpg'
import { aboutTxt } from "../../utils";

const AboutPageContent = () => (
    <Row>
        <Col xs={12} sm={6} className="p-3">
            <img
                className="img overlay"
                src={img4}
                alt="About"
            />
        </Col>
        <Col xs={12} sm={6} className="p-5">
            {aboutTxt}
        </Col>
    </Row>
)
export default AboutPageContent;