import { Button } from 'react-bootstrap';

const Timer = () => (
    <div> Time Remaining : 
        <Button className="m-1 rounded-circle">2</Button>hr
        <Button className="m-1 rounded-circle">00</Button>min
        <Button className="m-1 rounded-circle">00</Button>sec
    </div>

)
export default Timer;