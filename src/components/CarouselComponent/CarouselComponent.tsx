import React from 'react';
import { Carousel } from 'react-bootstrap';
import CarouselText from './CarouselText';
import styles from '../../styles';
import { homePageTxt } from '../../utils/txtUtils';

const CarouselComponent: React.FC = () => {
  return (
    <Carousel fade controls={false} indicators={false}>
      {homePageTxt.map((content, index) => (
        <Carousel.Item className={styles.flexColCenter} key={index}>
          <CarouselText content={content} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
