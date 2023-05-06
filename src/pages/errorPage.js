import { TiWarningOutline } from 'react-icons/ti';
import { PageWrapper, ErrorPageContent } from '../components';

function ErrorPage() {
    return (
        <PageWrapper
            pageName="Error"
            Icon={TiWarningOutline}
            featureBar="404 : User not Found"
            iconStyle="danger"
        >
            <ErrorPageContent />
        </PageWrapper>
    );
}

export default ErrorPage;