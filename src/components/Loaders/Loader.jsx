import { Spinner } from "react-bootstrap"

const Loader = () => {
    return (
        <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
        />
    )
}
export default Loader