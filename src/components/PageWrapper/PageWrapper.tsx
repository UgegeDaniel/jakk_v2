import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import PageFooter from './PageFooter';
import { useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { PageWrapperProps } from '../../types/propTypes';
import { pathsNotSaved } from '../../utils';
import styles from '../../styles';

const PageWrapper: React.FC<PageWrapperProps> = ({
  pageName,
  Icon,
  children,
  FeatureBar,
  iconStyle,
}) => {
  const location = useLocation();

  useEffect(() => {
    if (!pathsNotSaved(location.pathname)) {
      localStorage.setItem('path', location.pathname);
    }
  }, [location.pathname]);

  return (
    <Container className='px-3 pb-5 pt-3 my-auto'>
      <h3 className='page-title display-6'>
        <Icon className={`text-${iconStyle || 'primary'}`} /> {pageName}
      </h3>
      <div className='text-center'>
        <Card.Header>
          {FeatureBar && <FeatureBar />}
          {!FeatureBar && <div>Progressive Learning at your Fingertips !!!</div>}
        </Card.Header>
        <Card.Body className={`${styles.flexColCenter}`}>
          {children}
        </Card.Body>
        <PageFooter />
      </div>
    </Container>
  );
};

export default PageWrapper;
