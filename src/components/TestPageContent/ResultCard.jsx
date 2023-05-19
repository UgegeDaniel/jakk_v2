import { Button, Card, Table } from "react-bootstrap";
import { BiCheckDouble } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import useQuestions from "./useQuestion";
import { Link } from "react-router-dom";
import { showModal } from "../../redux-toolkit/features/questionSlice";

const ResultCard = () => {
    const { result, testParams } = useSelector((state) => state)
    const { length } = useQuestions()
    const dispatch = useDispatch();
    const headers = ['Subject', 'Year', 'Attempted', 'Correct', 'Score']
    const tableContent = [
        testParams.chosenSubject,
        testParams.chosenYear,
        `${result.attempted} / ${length}`,
        `${result.correct} / ${length}`,
        `${result.score}%`
    ]
    return (
        <Card style={{ width: '100%' }}>
            <div className="d-flex align-items-center justify-content-between flex-fill my-1 px-5">
                <BiCheckDouble className="display-2 rounded-circle text-primary" />
                <span className="display-5 rounded-circle text-success font-weight-bold">
                    {result.score}%
                </span>
            </div>
            <Card.Body>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            {headers.map((header) => (<th key={header}>{header}</th>))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {tableContent.map((content, index) => <td key={index}> {content}</td>)}
                        </tr>
                    </tbody>
                </Table>
                <div className="d-flex align-items-center justify-content-between flex-fill my-1 mx-1">
                    <Button variant="primary" onClick={() => dispatch(showModal(false))}> See Correction</Button>
                    <Link to='/dashboard'> <Button variant="primary"> Go To Dashboard </Button> </Link>
                    <Link to='/testparams'> <Button variant="outline-primary"> Take Another Test </Button> </Link>
                </div>
            </Card.Body>
        </Card>)
}

export default ResultCard;