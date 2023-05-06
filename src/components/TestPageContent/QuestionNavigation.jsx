import { Button, Card } from "react-bootstrap";
import ModalComponent from "../ModalComponent/ModalComponent";

const QuestionNavigation = () => (
    <div className="p-3 d-flex align-items-center justify-content-center flex-wrap">
        <Card.Link href="#">Prev</Card.Link>
        <Card.Link href="#">Next</Card.Link>
        <ModalComponent openModalTxt="1. 2. 3. ...40." modalHeaderTxt="Jump To A Number" btnVariant="link">
            {[1, 2, 3, 4, 5, 6].map((number) =>
                <Button key={number} className="m-1 rounded-circle">{number}</Button>
            )}
        </ModalComponent>
        <Button variant="primary" size="sm">Finish and Submit</Button>
    </div>
)
export default QuestionNavigation;