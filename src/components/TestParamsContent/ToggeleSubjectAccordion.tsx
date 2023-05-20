import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from "react-redux";
import { setSubjectId } from "../../redux-toolkit/features/questionSlice";
import { getYearsForSubject } from "../../redux-toolkit/asyncMethods";
import React from 'react';
import StateType from '../../types/stateTypes';
import { urls } from '../../utils/urls';
import { AnyAction } from '@reduxjs/toolkit';

function CustomToggle({ children, eventKey }: { children: React.ReactNode, eventKey: string }) {
    const dispatch = useDispatch();
    const { testParams } = useSelector((state: StateType) => state);
    const { chosenSubject } = testParams;

    const handleClick = () => {
        dispatch(setSubjectId({ chosenSubject: children as string, chosenId: eventKey }));
        dispatch(getYearsForSubject(urls.getYearsForSubject(eventKey))as unknown as AnyAction);
    };

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

export function ToggeleSubjectAccordion({ children, eventKey, headerTxt }: { children: React.ReactNode, eventKey: string, headerTxt: string }) {
    const { testParams } = useSelector((state: StateType) => state);
    const { subjectId } = testParams;

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
