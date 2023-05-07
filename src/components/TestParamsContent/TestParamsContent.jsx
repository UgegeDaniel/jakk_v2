import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import { getQuestions } from "../../redux-toolkit/features/questionSlice";
import { urls } from "../../utils";
import TestParamsBody from "./TestParamsBody";

const testStart = () => {
    //check for incomplete params
    //show notification 
    //start timer 
    //fetch questions
    //navigate to test page
}

function TestParamsContent() {
    const testParams = useSelector((state) => state.questionState.testParams);
    const { chosenSubject, chosenYear } = testParams
    const dispatch = useDispatch();
    const navigate = useNavigate()
    return (
        <>
            <Card.Title>You have chosen to take an objective test in
                <span className='text-primary'> {chosenSubject || "blank"} </span>of year
                <span className='text-primary'> {chosenYear || "blank"} </span>
                <span className='text-primary'> UTME </span> Examinations
            </Card.Title>
            <TestParamsBody />
            <Button
                variant="primary"
                className="d-block my-2"
                onClick={() => dispatch(getQuestions(urls.getQuestions(testParams, navigate)))}
            >
                Proceed to Test
            </Button>
        </>

    );
}

export default TestParamsContent