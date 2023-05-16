import { useSelector } from "react-redux";

const useQuestions = () => {
    const isLoading = useSelector((state) => state.questionState.isLoading);
    const currentIndex = useSelector((state) => state.questionState.currentIndex)
    const questions = useSelector((state) => state.questionState.questions);
    const answeredQuestions = useSelector((state) => state.questionState.answeredQuestions);
    const options = [
        questions[currentIndex]?.optiona,
        questions[currentIndex]?.optionb,
        questions[currentIndex]?.optionc,
        questions[currentIndex]?.optiond,
        questions[currentIndex]?.optione
    ]

    return {
        isLoading,
        currentIndex,
        questions,
        options,
        id: questions[currentIndex]?.questions_uid,
        answer: questions[currentIndex]?.answer,
        userChoice: questions[currentIndex]?.userChoice,
        image: questions[currentIndex]?.image,
        length: questions.length,
        chosen: questions[currentIndex]?.userChoice ? true : false,
        answered: (index) => answeredQuestions.includes(index)
    }

}

export default useQuestions;