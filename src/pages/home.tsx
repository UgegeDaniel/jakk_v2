import React from 'react';
import { BiHomeAlt2 } from 'react-icons/bi';
import { PageWrapper, FormComponent, ModalComponent, CarouselComponent} from '../components';
import { useSelector } from 'react-redux';
import StateType from '../types/stateTypes';

const Home: React.FC = () => {
  const { user, isSignIn } = useSelector((state: StateType) => state);

  return (
    <PageWrapper pageName="Home" Icon={BiHomeAlt2}>
      <div style={{ maxWidth: '80%', margin: '0 auto' }}>
        <CarouselComponent />
      </div>
      {!user && (
        <ModalComponent
          openModalTxt="Sign Up /Sign In"
          modalHeaderTxt={isSignIn ? 'Sign In' : 'Sign Up'}
        >
          <FormComponent />
        </ModalComponent>
      )}
    </PageWrapper>
  );
};

export default Home;