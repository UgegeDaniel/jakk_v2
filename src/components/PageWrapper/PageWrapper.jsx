import { Card } from "react-bootstrap"
import PageFooter from "./PageFooter"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"

const PageWrapper = ({ pageName, Icon, children, FeatureBar, iconStyle, featureTxt }) => {
    const location = useLocation();
    useEffect(() => {
        if (location.pathname !== ('/' || '/dashboard')) {
            localStorage.setItem('path', location.pathname)
        }
    }, [location.pathname]);

    return (
        <div className="px-5 pb-5 pt-3">
            <h3 className="page-title display-6">
                <Icon className={`text-${iconStyle || 'primary'}`} /> {pageName}
            </h3>
            <Card className="text-center" >
                <Card.Header>
                    {FeatureBar && <FeatureBar />}
                    {(featureTxt) && <div>{featureTxt}</div>}
                    {(!featureTxt && !FeatureBar) && <div>Progressive Learning at your Fingertips !!!</div>}
                </Card.Header>
                <Card.Body>
                    {children}
                </Card.Body>
                <PageFooter />
            </Card>
        </div>
    )
}
export default PageWrapper