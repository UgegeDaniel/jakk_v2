import {Form } from "react-bootstrap";

const Option = () => (
    <div className="d-flex align-items-center justify-content-center flex-fill">
        <span className="text-primary mx-1 pb-1">A</span><Form.Check
            inline
            label="First Option"
            name="group1"
            type="radio"
            id="inline-radio-1"
        />
    </div>
)

export default Option;