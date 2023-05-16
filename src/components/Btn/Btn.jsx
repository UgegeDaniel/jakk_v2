import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Loader from '../Loaders/Loader';

const Btn = ({ disabled, onClick, txt, size, variant }) => {
    const questionLoading = useSelector((state) => state.questionState.isLoading)
    const userLoading = useSelector((state) => state.userState.isLoading)

    return (
        <Button
            variant={variant || "primary"}
            type="submit"
            className={`btn ${size || 'btn-sm'}`}
            disabled={questionLoading || userLoading || disabled}
            onClick={onClick}
        >
            {(questionLoading || userLoading) && <Loader className="px-2"/>}{txt}
        </Button>
    )
}
export default Btn;