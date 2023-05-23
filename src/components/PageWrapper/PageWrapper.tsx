import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import PageFooter from './PageFooter';
import { useLocation } from 'react-router-dom';
import { IconType } from 'react-icons';
import { Container } from 'react-bootstrap';

interface PageWrapperProps {
  pageName: string;
  Icon: IconType;
  children: React.ReactNode;
  FeatureBar?: React.ComponentType;
  iconStyle?: string;
  featureTxt?: string;
}

const PageWrapper: React.FC<PageWrapperProps> = ({
  pageName,
  Icon,
  children,
  FeatureBar,
  iconStyle,
  featureTxt,
}) => {
  const location = useLocation();

  useEffect(() => {
    const pathsNotSaved = location.pathname === '/'
      || location.pathname === '/dashboard'
      || location.pathname.includes('verifyEmail');
    if (!pathsNotSaved) {
      localStorage.setItem('path', location.pathname);
    }
  }, [location.pathname]);

  return (
    <Container className="px-3 pb-5 pt-3">
      <h3 className="page-title display-6">
        <Icon className={`text-${iconStyle || 'primary'}`} /> {pageName}
      </h3>
      <Card className="text-center">
        <Card.Header>
          {FeatureBar && <FeatureBar />}
          {featureTxt && <div>{featureTxt}</div>}
          {!featureTxt && !FeatureBar && <div>Progressive Learning at your Fingertips !!!</div>}
        </Card.Header>
        <Card.Body>{children}</Card.Body>
        <PageFooter />
      </Card>
    </Container>
  );
};

export default PageWrapper;
