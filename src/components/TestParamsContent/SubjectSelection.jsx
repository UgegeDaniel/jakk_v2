import { Accordion } from "react-bootstrap"
import Loader from "../Loaders/Loader"
import { useSelector } from "react-redux";
import { capitalizeFirstLetter } from "../../utils";
import ToggeleSubjectAccordion from "./ToggeleSubjectAccordion";
import YearsForSubject from "./YearsForSubject";

const SubjectsSelection = () => {
    const allSubjects = useSelector((state) => state.questionState.allSubjects);

    return (
    <Accordion>
        {allSubjects?.length === 0 ? <Loader /> : allSubjects.map((subject) =>
            <ToggeleSubjectAccordion
                eventKey={subject?.subjects_uid}
                headerTxt={capitalizeFirstLetter(subject?.name)}
                key={subject?.subjects_uid}
            >
                <YearsForSubject subjectName={subject?.name} />
            </ToggeleSubjectAccordion>
        )}
    </Accordion>)
}

export default SubjectsSelection;