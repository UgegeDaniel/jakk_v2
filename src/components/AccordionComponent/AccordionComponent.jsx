import { Accordion } from "react-bootstrap"

const AccordionComponent = (props) => {
    const { children, headerTxt, eventKey } = props
    return (
        <Accordion.Item eventKey={eventKey}>
            <Accordion.Header>
                {headerTxt}
            </Accordion.Header>
            <Accordion.Body>
                {children}
            </Accordion.Body>
        </Accordion.Item>
    )
}
export default AccordionComponent