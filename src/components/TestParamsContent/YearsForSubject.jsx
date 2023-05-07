import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loaders/Loader";
import { Button } from "react-bootstrap";
import { selectYear } from "../../redux-toolkit/features/questionSlice";
import { capitalizeFirstLetter } from "../../utils";

const YearsForSubject = ({ subjectName }) => {
    const isLoading = useSelector((state) => state.questionState.isLoading);
    const years = useSelector((state) => state.questionState.years);
    const dispatch = useDispatch();
    const testParams = useSelector((state) => state.questionState.testParams);
    const { chosenYear } = testParams
    return (
        <>
            <div className="p-3 d-flex align-items-center justify-content-center flex-wrap">
                {isLoading
                    ? <Loader /> :
                    years.length === 0
                        ? <div className="text-secondary">Sorry there are no questions for <span className="text-primary m-1">{capitalizeFirstLetter(subjectName)}</span> at the moment</div>
                        : years.map((year, index) =>
                            <Button
                                key={index}
                                variant={year === chosenYear ? "primary" : "outline-primary"}
                                className="m-1"
                                onClick={() => dispatch(selectYear(year))}
                            >
                                {year}
                            </Button>
                        )
                }
            </div>
        </>
    )
}

export default YearsForSubject