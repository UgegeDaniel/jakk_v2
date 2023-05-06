import { Form } from 'react-bootstrap';

const Input = ({ formik, type, name }) => {
    return (
        <Form.Group className="mb-3 w-70" controlId="formBasicEmail">
            <Form.Label>{name.charAt(0).toUpperCase() + name.slice(1)}</Form.Label>
            <Form.Control
                type={type ? type : 'text'}
                name={name}
                onChange={formik.handleChange}
                values={formik.values.name}
                onBlur={formik.handleBlur}
            />
        </Form.Group>
    )
}
export default Input