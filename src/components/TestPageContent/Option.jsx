import {Form } from "react-bootstrap";

const options = ['A', 'B', 'C', 'D', 'E']
const Option = ({option, index}) => (
    <div className="d-flex align-items-center justify-content-center flex-fill">
        <span className="text-primary mx-1 pb-1">{options[index]}</span><Form.Check
            inline
            label={option}
            name="group1"
            type="radio"
            id="inline-radio-1"
        />
    </div>
)

export default Option;