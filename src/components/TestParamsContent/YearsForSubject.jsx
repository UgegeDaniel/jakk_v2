import React from "react";
import Loader from "../Loaders/Loader";
import { Button } from "react-bootstrap";
import { capitalizeFirstLetter } from "../../utils";
import styles from "../../styles";
import { useDispatch, useSelector } from "react-redux";
import { selectYear } from "../../redux-toolkit/features/questionSlice";

const YearsForSubject = ({ subjectName }) => {
    const dispatch = useDispatch();
    const { years, isLoading, testParams: { chosenYear } } = useSelector((state) => state)

    if (isLoading) return <Loader />

    if (years.length === 0) return (
        <div className="text-secondary">Sorry there are no questions for
            <span className="text-primary m-1">{capitalizeFirstLetter(subjectName)}
            </span> at the moment
        </div>
    )

    return (
        <React.Fragment>
            <div className={`${styles.flexCenter} p-3`}>
                {years?.map((year, index) =>
                    <Button
                        key={index}
                        variant={year === chosenYear ? "primary" : "outline-primary"}
                        className="m-1"
                        onClick={() => {
                            dispatch(selectYear(year))
                            console.log({ year, chosenYear })
                        }}
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