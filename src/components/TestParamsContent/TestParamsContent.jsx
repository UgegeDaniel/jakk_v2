import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Accordion, Button, Card, useAccordionButton } from "react-bootstrap";
import ModalComponent from "../ModalComponent/ModalComponent";
import AccordionComponent from "../AccordionComponent/AccordionComponent";
import Btn from "../Btn/Btn";
import { getAllSubjects, selectSubject, getYearsForSubject, selectYear } from "../../redux-toolkit/features/questionSlice";
import { capitalizeFirstLetter } from "../../utils";

function CustomToggle({ children, eventKey }) {
    const testParams = useSelector((state) => state.questionState.testParams);
    const { subject } = testParams
    const dispatch = useDispatch();

    const decoratedOnClick = useAccordionButton(eventKey, () => {
        dispatch(selectSubject(children))
        const fetchYearsParams = { endpoint: `/subjects/availableyears?subjectId=?${subject}`, extract: "years" }
        dispatch(getYearsForSubject(fetchYearsParams))
    });

    return (
        <Btn
            size="btn-block"
            onClick={decoratedOnClick}
            txt={children}
            variant={children === subject ? "primary" : "outline-primary"}
        />
    );
}

function TestParamsContent() {
    const allSubjects = useSelector((state) => state.questionState.allSubjects);
    const testParams = useSelector((state) => state.questionState.testParams);
    const years = useSelector((state) => state.questionState.years);
    const { subjectFromState, yearFromState } = testParams
    const dispatch = useDispatch();
    const fetchSubjects = () => dispatch(getAllSubjects({ endpoint: "/subjects", extract: "allSubjects" }))
    return (
        <>
            <Card.Title>You have chosen to take an objective test in
                <span className='text-primary'> {subjectFromState || "blank"} </span>of year
                <span className='text-primary'> {yearFromState || "blank"} </span>
                <span className='text-primary'> UTME </span> Examinations
            </Card.Title>
            <ModalComponent
                openModalTxt="Pick a Subject and Year"
                modalHeaderTxt="Pick a Subject and Year"
                btnVariant="outline-primary"
                onBtnClick={fetchSubjects}
            >
                <Accordion>
                    {allSubjects.map((subject, index) =>
                        <AccordionComponent
                            eventKey={subject?.subjects_uid}
                            headerTxt={capitalizeFirstLetter(subject?.name)}
                            key={subject?.subjects_uid}
                            CustomToggler={CustomToggle}
                        >
                            <>
                                <div className="p-3 d-flex align-items-center justify-content-center flex-wrap">
                                    {years.map((year, index) =>
                                        <Button
                                            key={index}
                                            variant="outline-primary"
                                            className="m-1">{year}
                                            variant={year === yearFromState ? "primary" : "outline-primary"}
                                            onClick={() => dispatch(selectYear(year))}
                                        </Button>
                                    )
                                    }
                                </div>
                            </>
                        </AccordionComponent>
                    )}
                </Accordion>
            </ModalComponent >
            <Link to="/test">
                <Button variant="primary" className="d-block my-2">
                    Proceed to Test
                </Button>
            </Link>
        </>

    );
}

export default TestParamsContent