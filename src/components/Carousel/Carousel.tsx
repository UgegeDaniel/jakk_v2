import React from 'react';
import { Carousel as BootstrapCarousel } from 'react-bootstrap';
import CarouselText from './CarouselText';
import styles from '../../styles';
import { homePageTxt } from '../../utils/txtUtils';

const Carousel: React.FC = () => {
  return (
    <BootstrapCarousel fade controls={false} indicators={false}>
      {homePageTxt.map((content, index) => (
        <BootstrapCarousel.Item className={styles.flexColCenter} key={index}>
          <CarouselText content={content} />
        </BootstrapCarousel.Item>
      ))}
    </BootstrapCarousel>
  );
};

export default Carousel;
