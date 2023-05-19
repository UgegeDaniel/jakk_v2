// import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { Card } from "react-bootstrap";
import parse from 'html-react-parser';
import Loader from "../Loaders/Loader";
import QuestionNavigation from "./QuestionNavigation";
import QuestionHeader from "./QuestionHeader";
import Options from "./Options";
import useQuestions from './useQuestion'

const TestPageContent = () => {
    const { questions, currentIndex, isLoading } = useQuestions();
    const navigate = useNavigate();
    const isEmptyQuestions = questions.length === 0;

    // useEffect(() => {

    // }, [isEmptyQuestions, navigate])

    if (isEmptyQuestions) {
        return navigate('/testparams');
    }

    if (isLoading) return <Loader />

    return (
        <Card>
            <Card.Body>
                <QuestionHeader
                    examtype={questions[currentIndex]?.examtype}
                    userChoice={questions[currentIndex]?.userChoice}
                    section={questions[currentIndex]?.section}
                />
                <Card.Text>
                    {parse(`${questions[currentIndex]?.question}`)}
                </Card.Text>
            </Card.Body>
            {questions[currentIndex]?.image
                && <Card.Img variant="top" src={questions[currentIndex]?.image} />
            }
            <Options />
            <Card.Body >
                <QuestionNavigation />
            </Card.Body>
        </Card>
    )
}
export default TestPageContent;