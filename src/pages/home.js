import { BiHomeAlt2 } from 'react-icons/bi';
import { CarouselComponent, FormComponent, ModalComponent, PageWrapper } from '../components';
import { useSelector } from 'react-redux';

function Home() {
    const { user, isSignIn } = useSelector((state) => state)
    return (
        <PageWrapper pageName="Home" Icon={BiHomeAlt2}>
            <div style={{ maxWidth: "80%", margin: "0 auto" }}>
                <CarouselComponent />
            </div>
            {!user &&
                <ModalComponent
                    openModalTxt="Sign Up /Sign In"
                    modalHeaderTxt={isSignIn ? "Sign In" : "Sign Up"}
                >
                    <FormComponent />
                </ModalComponent>
            }
        </PageWrapper>
    );
}

export default Home;