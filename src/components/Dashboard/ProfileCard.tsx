import React from 'react';
import { Card } from 'react-bootstrap';
import { FaUserGraduate } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from '../../styles';
import Button from '../Button/Button';
import { ProfileCardProps } from '../../types/propTypes';

const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => (
  <div className={`${styles.flexColCenter} mb-3`}>
    <div className={`${styles.flexCenter} p-3`}>
      <FaUserGraduate className={styles.profileFace} />
      <div className="mb-0 flex-grow">
        <Card.Header className={`${styles.flexCenter} p-3`}>
          <span className={styles.boldPriTxt}>{user?.user.name} </span>
          <span className={styles.boldItalicsTxt}>{user?.user.email}</span>
        </Card.Header>
        <Link to="/testparams">
          <Button txt="Take A Test" style="mt-3" />
        </Link>
      </div>
    </div>
  </div>
);
export default ProfileCard;
