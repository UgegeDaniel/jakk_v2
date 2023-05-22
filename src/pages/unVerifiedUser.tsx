import React from 'react';
import { SiMinutemailer } from 'react-icons/si';
import { PageWrapper, UnVerifiedUserPageContent } from '../components';

const UnVerifiedUser: React.FC = () => {
  return (
    <PageWrapper
      pageName="Verification Email Sent"
      Icon={SiMinutemailer}
      FeatureBar={() => <p>Email Verification</p>}
    >
      <UnVerifiedUserPageContent />
    </PageWrapper>
  );
};

export default UnVerifiedUser;