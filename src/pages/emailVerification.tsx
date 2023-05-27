import React from 'react';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { PageWrapper, EmailVerifationProgress } from '../components';

const EmailVerification: React.FC = () => {
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