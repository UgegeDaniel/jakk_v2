import { Accordion, Card } from "react-bootstrap"

const AccordionComponent = ({ children, headerTxt, eventKey, CustomToggler }) => {
    return CustomToggler ? (
        <Card>
            <Card.Header>
                <CustomToggler eventKey={eventKey}>{headerTxt}</CustomToggler>
            </Card.Header >
            <Accordion.Collapse eventKey={eventKey}>
                <Card.Body>{children}</Card.Body>
            </Accordion.Collapse>
        </Card >
    ) :
        (
            <Accordion.Item eventKey={eventKey}>
                <Accordion.Header>{headerTxt}</Accordion.Header>
                <Accordion.Body> {children}
                </Accordion.Body>
            </Accordion.Item>
        )
}
export default AccordionComponent