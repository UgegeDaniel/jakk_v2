import { Carousel } from 'react-bootstrap';
import { homePageTxt } from '../../utils';
import CarouselText from './CarouselText';
import styles from '../../styles';
// import ModalComponent from '../ModalComponent/ModalComponent';
// import FormComponent from '../FormComponent/FormComponent';
// import { useSelector } from 'react-redux';

const CarouselComponent = () => {
    // const user = useSelector((state) => state.userState.user)
    // const isSignIn = useSelector((state) => state.userState.isSignIn)
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
            {/* {!user &&
                <ModalComponent
                    openModalTxt="Sign Up /Sign In"
                    modalHeaderTxt={isSignIn ? "Sign In" : "Sign Up"}
                    ChildComponent={FormComponent}
                />
            } */}
        </Carousel >

    )
}

export default CarouselComponent