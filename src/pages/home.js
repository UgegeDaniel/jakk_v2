import { BiHomeAlt2 } from 'react-icons/bi';
import { CarouselComponent, PageWrapper } from '../components';

function Home() {
    return (
        <PageWrapper pageName="Home" Icon={BiHomeAlt2}>
            <div style={{ maxWidth: "80%", margin: "0 auto" }}>
                <CarouselComponent />
            </div>
        </PageWrapper>
    );
}

export default Home;