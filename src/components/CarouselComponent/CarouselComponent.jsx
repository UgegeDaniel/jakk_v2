import { Carousel } from 'react-bootstrap';
import { homePageTxt } from '../../utils';
import CarouselText from './CarouselText';
import styles from '../../styles';

const CarouselComponent = () => {
    return (
        <Carousel fade controls={false} indicators={false}>
            {homePageTxt.map((content, index) => (
                <Carousel.Item className={styles.flexColCenter}
                    key={index}
                >
                    <CarouselText content={content} />
                </Carousel.Item>
            ))
            }
        </Carousel >
    )
}

export default CarouselComponent