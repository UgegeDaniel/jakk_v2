import React from 'react';
import { Container } from 'react-bootstrap';
import styles from '../../styles';
import { CarouselTextProps } from '../../types/propTypes';

const CarouselText: React.FC<CarouselTextProps> = ({ content }) => {
  return (
    <>
      <figure className={styles.centerTxt}>
        <blockquote className="blockquote">
          <content.Icon className={styles.txtPri1} />
          <p className="text-primary" style={{ fontSize: '1.5rem' }}>{content.headerTxt}</p>
        </blockquote>
        <Container className={styles.blockQuoteFooter}>
          <figcaption>
            <cite style={{ lineHeight: 1, fontSize: '1.5rem' }}>{content.body}</cite>
          </figcaption>
        </Container>
      </figure>
    </>
  );
};

export default CarouselText;
