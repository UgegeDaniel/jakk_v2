import { RxLapTimer } from 'react-icons/rx';
import { PageWrapper, TestPageContent, Timer } from '../components';

const TestPage = () => {

    return (
        <PageWrapper
            pageName="Ongoing Test"
            Icon={RxLapTimer}
            FeatureBar={Timer}
        >
            <TestPageContent />
        </PageWrapper>
    )
}
export default TestPage;