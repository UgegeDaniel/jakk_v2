import { Accordion } from "react-bootstrap";
import { useSelector } from "react-redux";
import { capitalizeFirstLetter } from "../../utils";
import ToggeleSubjectAccordion from "./ToggeleSubjectAccordion";
import YearsForSubject from "./YearsForSubject";
import StateType from "../../types/stateTypes";
import React from "react";

const SubjectsSelection = () => {
    const { allSubjects } = useSelector((state: StateType) => state);
    return (
        <Accordion>
            {allSubjects.map((subject) => (
                <ToggeleSubjectAccordion
                    eventKey={subject?.subjects_uid}
                    headerTxt={capitalizeFirstLetter(subject?.name)}
                    key={subject?.subjects_uid}
                >
                    <YearsForSubject subjectName={subject?.name} />
                </ToggeleSubjectAccordion>

            ))}
        </Accordion>
    )
};

export default SubjectsSelection;
