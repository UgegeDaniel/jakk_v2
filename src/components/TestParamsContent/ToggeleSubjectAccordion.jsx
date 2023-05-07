import { useDispatch, useSelector } from "react-redux";
import { useAccordionButton } from "react-bootstrap";
import { setSubjectId, getYearsForSubject } from "../../redux-toolkit/features/questionSlice";
import Btn from "../Btn/Btn";
import { urls } from "../../utils";

function ToggeleSubjectAccordion({ eventKey, extraProp, children }) {
    const testParams = useSelector((state) => state.questionState.testParams);
    const { chosenSubject } = testParams
    const dispatch = useDispatch();
    const { subjectId: chosenId } = extraProp
    const decoratedOnClick = useAccordionButton(eventKey, () => {
        dispatch(setSubjectId({chosenSubject: children, chosenId}))
        const fetchYearsParams = urls.getYearsForSubject(chosenId);
        dispatch(getYearsForSubject(fetchYearsParams))
    });

    return (
        <Btn
            size="btn-block"
            onClick={decoratedOnClick}
            txt={children}
            variant={children === chosenSubject ? "primary" : "outline-primary"}
        />
    );
}
export default ToggeleSubjectAccordion;