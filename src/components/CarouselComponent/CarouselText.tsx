import React from 'react';
import { Container } from 'react-bootstrap';
import styles from '../../styles';
import { IconType } from 'react-icons';

interface CarouselTextProps {
  content: {
    Icon: IconType;
    headerTxt: string;
    body: string;
  };
}

const CarouselText: React.FC<CarouselTextProps> = ({ content }) => {
  return (
    <>
      <figure className={styles.centerTxt}>
        <blockquote className="blockquote">
          <content.Icon className={styles.txtPri1} />
          <p className="text-primary">{content.headerTxt}</p>
        </blockquote>
        <Container className={styles.blockQuoteFooter}>
          <figcaption>
            <cite>{content.body}</cite>
          </figcaption>
        </Container>
      </figure>
    </>
  );
};

export default CarouselText;
