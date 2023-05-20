import React from 'react';
import { CgDetailsMore } from 'react-icons/cg';
import { PageWrapper, AboutPageContent } from '../components';

const About: React.FC = () =>(
    <PageWrapper pageName="About" Icon={CgDetailsMore} featureTxt="">
      <div style={{ maxWidth: '80%', margin: '0 auto' }}>
        <AboutPageContent />
      </div>
    </PageWrapper>
);

export default About;
