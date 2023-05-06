import { BiHomeAlt2 } from 'react-icons/bi';
import { CarouselComponent, PageWrapper } from '../components';

function Home() {
    return (
        <PageWrapper pageName="Home" Icon={BiHomeAlt2}>
            <CarouselComponent />
        </PageWrapper>
    );
}

export default Home;