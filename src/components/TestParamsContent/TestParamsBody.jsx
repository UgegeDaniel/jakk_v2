import { useDispatch, useSelector } from "react-redux";
import { ModalComponent, Btn } from "../index";
import { getAllSubjects } from "../../redux-toolkit/asyncMethods";
import { urls } from "../../utils";
import SubjectsSelection from "./SubjectSelection";

const TestParamsBody = () => {
    const { allSubjects } = useSelector((state) => state);
    const dispatch = useDispatch();
    const fetchSubjects = () => {
        dispatch(getAllSubjects(urls.getAllSubjects))
    }

    if (!allSubjects) return <div className="text-danger lead font-weight-bold">
        Couldn't fetch Subjects
        <Btn onClick={fetchSubjects} txt="Try Again" size="mx-2 btn-sm" />
    </div>

    return (
        <ModalComponent
            openModalTxt="Pick a Subject and Year"
            modalHeaderTxt="Pick a Subject and Year"
            btnVariant="outline-primary"
            onBtnClick={fetchSubjects}
        >
            <SubjectsSelection />
        </ModalComponent>
    )
}
export default TestParamsBody;