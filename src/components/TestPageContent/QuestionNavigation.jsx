import { Button } from "react-bootstrap";
import ModalComponent from "../ModalComponent/ModalComponent";
import { nextQuestion, prevQuestion, jumpToIndex, saveUserScore, showModal } from '../../redux-toolkit/features/questionSlice'
import { useDispatch, useSelector } from "react-redux";
import ResultCard from "./ResultCard";
import styles from '../../styles'
import useQuestions from "./useQuestion";
import { urls } from "../../utils";

const QuestionNavigation = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.questionState);
    const testSubmitted = useSelector((state) => state.questionState.testSubmitted);
    const { length, answered } = useQuestions()
    return (
        <div className={styles.flexCenter}>
            <Button variant="outline-primary" className="mx-2"
                onClick={() => dispatch(prevQuestion())}
            >
                Prev
            </Button>
            <Button variant="outline-primary" className="mx-2"
                onClick={() => dispatch(nextQuestion())}
            >
                Next
            </Button>

            <ModalComponent
                openModalTxt={testSubmitted ? 'See Result' : 'Finish and Submit'}
                modalHeaderTxt="Test Submitted"
                btnVariant="primary"
                onBtnClick={() => {
                    if (!testSubmitted) {
                        dispatch(saveUserScore(urls.saveScore(state)))
                    }
                    if (testSubmitted) {
                        dispatch(showModal(true))
                    }
                }}
            >
                <ResultCard />
            </ModalComponent>

            <div>{[...Array(length).keys()].map((item) =>
                <Button
                    key={item}
                    className="m-1 rounded-circle"
                    variant={answered(item) ? "primary" : "outline-primary"}
                    onClick={() => dispatch(jumpToIndex(item))}
                >
                    {item + 1}
                </Button>
            )}
            </div>
        </div>
    )
}
export default QuestionNavigation;