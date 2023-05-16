import { useTimer } from 'react-timer-hook';
import { Button } from 'react-bootstrap';
import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveUserScore } from '../../redux-toolkit/features/questionSlice';
import { urls } from '../../utils';

const Timer = () => {
    const expiryTimestamp = new Date();
    const timer = useSelector((state) => state.questionState.timer);
    const state = useSelector((state)=> state.questionState);
    const dispatch = useDispatch();
    expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 7200);
    const { seconds, minutes, hours, start } = useTimer({
        expiryTimestamp, onExpire: () => dispatch(saveUserScore(urls.saveScore(state)))
    });
    const timerCallback = useCallback(() =>  start , [start])
    useEffect(() => {
        timer && timerCallback();
    }, [timer, timerCallback])

    return (
        <div> Time Remaining :
            <Button className="m-1 rounded-circle">{hours}</Button>hr
            <Button className="m-1 rounded-circle">{minutes}</Button>min
            <Button className="m-1 rounded-circle">{seconds}</Button>sec
        </div>
    )
}
export default Timer;

