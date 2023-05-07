import { useDispatch, useSelector } from "react-redux";
import { Accordion } from "react-bootstrap";
import { ModalComponent, AccordionComponent, Loader } from "../index";
import { getAllSubjects } from "../../redux-toolkit/features/questionSlice";
import { capitalizeFirstLetter, urls } from "../../utils";
import ToggeleSubjectAccordion from "./ToggeleSubjectAccordion";
import YearsForSubject from "./YearsForSubject";

const TestParamsBody = () => {
    const allSubjects = useSelector((state) => state.questionState.allSubjects);
    const dispatch = useDispatch();
    const fetchSubjects = () => dispatch(getAllSubjects(urls.getAllSubjects))

    return (
        <ModalComponent
            openModalTxt="Pick a Subject and Year"
            modalHeaderTxt="Pick a Subject and Year"
            btnVariant="outline-primary"
            onBtnClick={fetchSubjects}
        >
            <Accordion>
                {allSubjects.length === 0 ? <Loader /> : allSubjects.map((subject, index) =>
                    <AccordionComponent
                        eventKey={subject?.subjects_uid}
                        headerTxt={capitalizeFirstLetter(subject?.name)}
                        key={subject?.subjects_uid}
                        CustomToggler={ToggeleSubjectAccordion}
                        extraProp={{ subjectId: subject?.subjects_uid }}
                    >
                        <YearsForSubject subjectName={subject?.name} />
                    </AccordionComponent>
                )}
            </Accordion>
        </ModalComponent >
    )
}
export default TestParamsBody;