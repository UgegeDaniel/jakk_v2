import { useSelector } from 'react-redux';
import { Carousel } from 'react-bootstrap';
import { ModalComponent, FormComponent } from '../../components';
import img1 from '../../assets/images/home/img1.jpg'
import img2 from '../../assets/images/home/img2.jpg'
import img3 from '../../assets/images/home/img3.jpg'

const CarouselComponent = () => {
    const isSignIn = useSelector((state) => state.userState.isSignIn)

    return (
        <Carousel>
            {[img1, img2, img3].map((img, index) => (
                <Carousel.Item className='img-container' key={index}>
                    <img
                        className="img overlay"
                        src={img}
                        alt="First slide"
                    />
                    <div className="overlay-dark"></div>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        <ModalComponent
                            openModalTxt="Sign Up /Sign In"
                            modalHeaderTxt={isSignIn ? "Sign In" : "Sign Up"}
                        >
                            <FormComponent />
                        </ModalComponent>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>

    )
}

export default CarouselComponent