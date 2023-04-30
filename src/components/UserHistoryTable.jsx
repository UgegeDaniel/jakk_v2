import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { signInUser, signUpUser, getAllSubjects, getQuestions, saveUserHistory, getUserHistory } from '../redux-toolkit/features'

const UserHistoryTable = () => {
    const isLoading = useSelector((state) => state.userState.isLoading)
    const errors = useSelector((state) => state.userState.errors)
    const userHistory = useSelector((state) => state.userState.userHistory)
    const dispatch = useDispatch()
    const memoizedUserHistory = useMemo(() => userHistory, [userHistory])?.userHistory

    useEffect(() => {
        dispatch(getUserHistory({ endpoint: '/users/score' }))
    }, [dispatch])
    
    return (
        <>
            <Table striped="columns">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Subject</th>
                        <th>Time of Test</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    { memoizedUserHistory?.map((historyItem, index) => (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{historyItem.subjects_name}</td>
                    <td>{new Date(Number(historyItem.time_of_test)).toLocaleString()}</td>
                    <td>{historyItem.score}</td>
                </tr>
                ))}
                </tbody>
            </Table>
            <div>
                {/* <button onClick={() => dispatch(signInUser({endpoint: '/users/signin', postBody: formData}))}>signInUser</button>
                <button onClick={() => dispatch(signUpUser({endpoint: '/users/signup', postBody: formData}))}>signUpUser</button>
                <button onClick={() => dispatch(getAllSubjects({endpoint: '/questions/subjects'}))}>getAllSubjects</button>
                <button onClick={()=> dispatch(getQuestions({endpoint: '/questions?subject=chemistry&year=2003'}))}>getQuestions</button>
                <button onClick={()=> dispatch(saveUserHistory({endpoint: '/users/score/save', postBody: score}))}>saveUserHistory</button>
                <button onClick={()=> )}>getUserHistory</button> */}
            </div>
        </>
    );
}

export default UserHistoryTable;