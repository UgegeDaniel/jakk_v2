import React from 'react';
import { RxDashboard } from 'react-icons/rx';
import { PageWrapper, DashboardComponent } from '../components';

const DashBoard: React.FC = () => (
  <PageWrapper pageName="Dashboard" Icon={RxDashboard}>
    <div style={{ maxWidth: '80%', margin: '0 auto' }}>
      <DashboardComponent />
    </div>
  </PageWrapper>
);

export default DashBoard;
