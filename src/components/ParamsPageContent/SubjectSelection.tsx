import { Accordion } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { capitalizeFirstLetter } from '../../utils';
import ToggeleSubjectAccordion from './ToggeleSubjectAccordion';
import YearsForSubject from './YearsForSubject';
import StateType from '../../types/stateTypes';
import React from 'react';
import Button from '../Button/Button';

interface SubjectSelectionProps {
  startTest: () => void
}
const SubjectsSelection: React.FC<SubjectSelectionProps> = ({ startTest }) => {
  const { allSubjects, loading, testParams } = useSelector((state: StateType) => state);
  const { chosenYear, chosenSubject } = testParams;

  return (
    <Accordion>
      {allSubjects.map((subject) => (
        <ToggeleSubjectAccordion
          eventKey={subject?.subjects_uid}
          headerTxt={capitalizeFirstLetter(subject?.name)}
          key={subject?.subjects_uid}
        >
          <YearsForSubject subjectName={subject?.name} />
          {(chosenSubject && chosenYear)
            && <Button
              variant="primary"
              style="lg d-block my-2"
              onClick={startTest}
              txt='Proceed to Test'
              isLoading={loading.questions}
            />}
        </ToggeleSubjectAccordion>
      ))}
    </Accordion>
  );
};

export default SubjectsSelection;
