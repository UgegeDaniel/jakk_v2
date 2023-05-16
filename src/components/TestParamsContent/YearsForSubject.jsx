import React from "react";
import Loader from "../Loaders/Loader";
import { Button } from "react-bootstrap";
import { capitalizeFirstLetter } from "../../utils";
import styles from "../../styles";
import { useDispatch, useSelector } from "react-redux";
import { selectYear } from "../../redux-toolkit/features/questionSlice";

const YearsForSubject = ({ subjectName }) => {
    const dispatch = useDispatch();
    const years = useSelector((state) => state.questionState.years)
    const isLoading = useSelector((state) => state.questionState.isLoading)
    const { chosenYear } = useSelector((state) => state.questionState.testParams)

    if (years.length === 0) return (
        <div className="text-secondary">Sorry there are no questions for
            <span className="text-primary m-1">{capitalizeFirstLetter(subjectName)}
            </span> at the moment
        </div>
    )

    return (
        <React.Fragment>
            <div className={`${styles.flexCenter} p-3`}>
                {isLoading
                    ? <Loader />
                    : years?.map((year, index) =>
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
        </React.Fragment>
    )
}

export default YearsForSubject