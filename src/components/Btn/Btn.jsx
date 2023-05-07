import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Loader from '../Loaders/Loader';

const Btn = ({ disabled, onClick, txt, size, variant }) => {
    const isLoading = useSelector((state) => state.userState.isLoading)

    return (
        <Button
            variant={variant || "primary"}
            type="submit"
            className={`btn ${size || 'btn-sm'}`}
            disabled={disabled}
            onClick={onClick}
        >
            {isLoading && <Loader className="mx-2"/>}{txt}
        </Button>
    )
}
export default Btn;