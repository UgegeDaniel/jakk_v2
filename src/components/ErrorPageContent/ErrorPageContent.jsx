import { Card } from "react-bootstrap"
import FormComponent from "../FormComponent/FormComponent"
import ModalComponent from "../ModalComponent/ModalComponent"
import { useSelector } from "react-redux"

const ErrorPageContent = () => {
    const isSignIn = useSelector((state) => state.userState.isSignIn)
    return (
        <Card>
            <Card.Body>
                <Card.Title>Sign in Required !!!</Card.Title>
                <Card.Text>
                    You need to Sign Up or Sign In to access this route
                </Card.Text>
                <ModalComponent
                    openModalTxt="Sign Up /Sign In"
                    modalHeaderTxt={isSignIn ? "Sign In" : "Sign Up"}
                >
                    <FormComponent />
                </ModalComponent>
            </Card.Body>
        </Card>
    )
}

export default ErrorPageContent