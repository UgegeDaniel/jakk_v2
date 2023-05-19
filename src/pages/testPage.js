import { RxLapTimer } from 'react-icons/rx';
import { PageWrapper, TestPageContent, Timer } from '../components';
import { useSelector } from 'react-redux'
import { FaSpellCheck } from 'react-icons/fa'

const TestPage = () => {
    const { testSubmitted } = useSelector((state) => state);
    console.log({ testSubmitted })
    if (testSubmitted) return (
        <PageWrapper
            pageName="Correction"
            Icon={FaSpellCheck}
            featureTxt="Correct options are highlighted in green"
        >
            <TestPageContent />
        </PageWrapper>
    )
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