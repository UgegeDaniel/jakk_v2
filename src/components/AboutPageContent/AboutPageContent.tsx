import React from 'react';
import styles from '../../styles';
import { aboutTxt } from '../../utils/txtUtils';

const AboutPageContent: React.FC = () => (
  <React.Fragment>
    <figcaption className={styles.blockQuoteFooter}>
      <cite style={{ lineHeight: 1, fontSize: '1rem' }}>{aboutTxt}</cite>
    </figcaption>
  </React.Fragment>
);

export default AboutPageContent;
