import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from "react-redux";
import { setSubjectId } from "../../redux-toolkit/features/questionSlice";
import { getYearsForSubject } from "../../redux-toolkit/asyncMethods";
import { urls } from "../../utils";

function CustomToggle({ children, eventKey }) {
    const dispatch = useDispatch();
    const { testParams } = useSelector((state) => state);
    const { chosenSubject } = testParams

    const handleClick = () => {
        dispatch(setSubjectId({ chosenSubject: children, chosenId: eventKey }))
        dispatch(getYearsForSubject(urls.getYearsForSubject(eventKey)))
    }

    const decoratedOnClick = useAccordionButton(eventKey, () =>
        handleClick(),
    );

    return (
        <button
            onClick={decoratedOnClick}
            className={`btn btn-block ${chosenSubject === children ? 'btn-primary' : 'btn-outline-primary'}`}
        >
            {children}
        </button>
    );
}

export function ToggeleSubjectAccordion({ children, eventKey, headerTxt }) {
    const { testParams } = useSelector((state) => state);
    const { subjectId } = testParams
    return (
        <Accordion>
            <Card>
                <Card.Header>
                    <CustomToggle eventKey={eventKey}>
                        {headerTxt}
                    </CustomToggle>
                </Card.Header>
                {(subjectId === eventKey) && <Accordion.Collapse eventKey={eventKey}>
                    <Card.Body>{children}</Card.Body>
                </Accordion.Collapse>}
            </Card>
        </Accordion>
    );
}

export default ToggeleSubjectAccordion;