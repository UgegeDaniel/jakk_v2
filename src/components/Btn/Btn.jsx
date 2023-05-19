import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Loader from '../Loaders/Loader';

const Btn = ({ disabled, onClick, txt, size, variant }) => {
    const { isLoading } = useSelector((state) => state)

    return (
        <Button
            variant={variant || "primary"}
            type="submit"
            className={`btn ${size || 'btn-sm'}`}
            disabled={isLoading || disabled}
            onClick={onClick}
        >
            {isLoading && <Loader className="px-2" />}{txt}
        </Button>
    )
}
export default Btn;