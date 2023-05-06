import { Card } from "react-bootstrap";
import QuestionNavigation from "./QuestionNavigation";
import Option from './Option'

const TestPageContent = () => (
    <Card style={{ width: '90%', margin: "0 auto" }}>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
            <Card.Title>UTME CHEMISTRY 2005 <span className="d-block">1.</span></Card.Title>
            <Card.Text>"{"question"}"
            </Card.Text>
        </Card.Body>
        <div className="p-3 d-flex align-items-center justify-content-center flex-wrap">
            <Option />
        </div>
        <Card.Body >
            <QuestionNavigation />
        </Card.Body>
    </Card>
)
export default TestPageContent;