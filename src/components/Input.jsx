import { Form } from 'react-bootstrap';
import ErrorToast from './ErrorToast';

const Input = ({ ctx, type, name }) => {
    return (
        <Form.Group className="mb-3 w-70" controlId="formBasicEmail">
            <Form.Label>{name.charAt(0).toUpperCase() + name.slice(1)}</Form.Label>
            <Form.Control
                type={type ? type : 'text'}
                name={name}
                onChange={ctx.handleChange}
                values={ctx.values.name}
                onBlur={ctx.handleBlur}
            />
        </Form.Group>
    )
}
export default Input