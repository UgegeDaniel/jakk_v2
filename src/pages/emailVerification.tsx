import React from 'react';
import { SiMinutemailer } from 'react-icons/si';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { PageWrapper, EmailVerifationProgress } from '../components';
import { User } from '../types/stateTypes';
import { useSelector } from 'react-redux';

const EmailVerification: React.FC = () => {
  const { user } = useSelector((state) => state) as User;
  return (
    <PageWrapper
      pageName="Email Verification"
      Icon={ MdOutlineAlternateEmail}
      FeatureBar={() => <p>Email Verification</p>}
    >
      <EmailVerifationProgress />
    </PageWrapper>
  );
};

export default EmailVerification;