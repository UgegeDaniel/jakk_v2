import { Button, Card } from "react-bootstrap";
import ModalComponent from "../ModalComponent/ModalComponent";

const testEnd = () => {
    //show notification 
    //stop timer (set timer initial value)
    //compare questions answered with answers
    //show result modal
}

const QuestionNavigation = ({setCurrentQuestion, questions}) => {
    const prevQuestion = () => {
        setCurrentQuestion((curr) => {
            if(curr === 0) return curr
            return curr - 1
        })
    }
    const nextQuestion = () => {
        setCurrentQuestion((curr) => {
            if(curr === questions.length - 1) return curr
            return curr + 1
        })
    }
    return(
    <div className="p-3 d-flex align-items-center justify-content-center flex-wrap">
        <Card.Link onClick={()=> prevQuestion()}>Prev</Card.Link>
        <Card.Link onClick={()=> nextQuestion()}>Next</Card.Link>
        <ModalComponent openModalTxt="1. 2. 3. ...40." modalHeaderTxt="Jump To A Number" btnVariant="link">
            {questions.map((item, index) =>
                <Button key={index} className="m-1 rounded-circle"
                onClick={() => setCurrentQuestion(index)}
                >{index + 1}</Button>
            )}
        </ModalComponent>
        <Button variant="primary" size="sm">Finish and Submit</Button>
    </div>
)}
export default QuestionNavigation;