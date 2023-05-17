import { Card } from 'react-bootstrap'
import { FaUserGraduate } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styles from '../../styles'
import Btn from '../Btn/Btn'

const ProfileCard = ({ user }) => {
    return (
        <div className={`${styles.flexColCenter} mb-3`}>
            <div className={`${styles.flexCenter} p-3`}>
                <FaUserGraduate className={styles.profileFace} />
                <div className="mb-0 flex-grow">
                    <Card.Header className={`${styles.flexCenter} p-3`}>
                        <span className={styles.boldPriTxt}>{user?.user.name} </span>
                        <span className={styles.boldItalicsTxt}>{user?.user.email}</span>
                    </Card.Header>
                    <Link to='/testparams'>
                        <Btn
                            txt="Take A Test"
                            size="mt-3"
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard