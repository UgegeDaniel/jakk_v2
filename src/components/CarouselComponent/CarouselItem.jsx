import { useSelector } from 'react-redux';
import { Carousel } from 'react-bootstrap';
import FormComponent from '../FormComponent/FormComponent';
import ModalComponent from '../ModalComponent/ModalComponent';
import React from 'react';

const CarouselItem = React.forwardRef((props, ref) => {
    const isSignIn = useSelector((state) => state.userState.isSignIn)
    return (
        <Carousel.Item className='img-container'>
            <img
                className="img overlay"
                src={props.img}
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
    )
})

export default CarouselItem;