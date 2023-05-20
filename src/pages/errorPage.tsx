import React from 'react';
import { TbError404 } from 'react-icons/tb';
import { PageWrapper, ErrorPageContent } from '../components';

const ErrorPage: React.FC = () => (
  <PageWrapper
    pageName="Page Not Found"
    Icon={TbError404}
    FeatureBar={() => <p>404 : Page not Found</p>}
    iconStyle="danger"
  >
    <ErrorPageContent />
  </PageWrapper>
);

export default ErrorPage;
