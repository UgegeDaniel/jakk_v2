import { Card } from "react-bootstrap";
import QuestionNavigation from "./QuestionNavigation";
import Loader from "../Loaders/Loader";
import Option from './Option'
import { useSelector } from "react-redux";
import { useState } from "react";

const TestPageContent = () => {
    const isLoading = useSelector((state) => state.questionState.isLoading);
    const testParams = useSelector((state) => state.questionState.testParams);
    const { chosenSubject, chosenYear } = testParams;
    const questions = useSelector((state) => state.questionState.questions);

    const [currentQuestion, setCurrentQuestion] = useState(0)

    
    console.log({ chosenSubject, chosenYear, isLoading, questions })
    if (isLoading) return <Loader />
    if (questions.length === 0) return <p className="text-secondary">No Questions yet :(</p>
    const { optiona, optionb, optionc, optiond, optione } = questions[currentQuestion]
    const options = [optiona, optionb, optionc, optiond, optione]
    return (
        <Card style={{ width: '90%', margin: "0 auto" }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
                <Card.Title>UTME {chosenSubject} {chosenYear} <span className="d-block">{currentQuestion + 1}</span></Card.Title>
                <Card.Text>{questions[currentQuestion].question}</Card.Text>
            </Card.Body>
            <div className="p-3 d-flex align-items-center justify-content-center flex-wrap">
                {options.map((option, index) => <Option key={index} option={option} index={index} />)}
            </div>
            <Card.Body >
                <QuestionNavigation setCurrentQuestion={setCurrentQuestion} questions={questions}/>
            </Card.Body>
        </Card>
    )
}
export default TestPageContent;