import { useTimer } from 'react-timer-hook';
import { Button } from 'react-bootstrap';

// dispatch testEnd onExpire

const Timer = () => {
    const expiryTimestamp = new Date();
    expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 7200); //FOR 2 HOURS
    // expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 5);

    const { seconds, minutes, hours, } = useTimer({
        expiryTimestamp, onExpire: () => console.warn('onExpire called')
    });

    return (
        <div> Time Remaining :
            <Button className="m-1 rounded-circle">{hours}</Button>hr
            <Button className="m-1 rounded-circle">{minutes}</Button>min
            <Button className="m-1 rounded-circle">{seconds}</Button>sec
        </div>

    )
}
export default Timer;

