import React from 'react';
import styles from '../../styles';
import { aboutTxt } from '../../utils/txtUtils';

const AboutPageContent: React.FC = () => (
  <>
    <figcaption className={styles.blockQuoteFooter}>
      <cite title="Source Title">{aboutTxt}</cite>
    </figcaption>
  </>
);

export default AboutPageContent;
