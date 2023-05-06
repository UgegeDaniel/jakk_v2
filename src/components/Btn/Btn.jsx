import { Button } from 'react-bootstrap';

const Btn = ({ disabled, onClick, txt, size, variant }) => (
    <Button
        variant={variant || "primary"}
        type="submit"
        className={`btn ${size || 'btn-sm'}`}
        disabled={disabled}
        onClick={onClick}
    >
        {txt}
    </Button>
)
export default Btn;