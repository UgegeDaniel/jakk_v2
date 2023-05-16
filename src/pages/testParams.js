import { BsBook } from 'react-icons/bs';
import { PageWrapper, TestParamsContent } from '../components';

const TestParams = () => {
    return (
        <PageWrapper pageName="Select Test Parameters" Icon={BsBook}>
            <TestParamsContent />
        </PageWrapper>
    )
}

export default TestParams;