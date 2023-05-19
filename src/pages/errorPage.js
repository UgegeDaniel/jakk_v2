import { TbError404 } from 'react-icons/tb';
import { PageWrapper, ErrorPageContent } from '../components';

function ErrorPage() {
    return (
        <PageWrapper
            pageName="Page Not Found"
            Icon={TbError404}
            featureBar="404 : Page not Found"
            iconStyle="danger"
        >
            <ErrorPageContent />
        </PageWrapper>
    );
}

export default ErrorPage;