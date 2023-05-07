import { Card } from "react-bootstrap"
import PageFooter from "./PageFooter"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"

const PageWrapper = ({ pageName, Icon, children, FeatureBar, iconStyle }) => {
    const location = useLocation();
    useEffect(() => {
        localStorage.setItem('path', location.pathname)
    }, [location.pathname]);
    
    
    return (
        <div className="p-5">
            <h3 className="page-title display-6">
                <Icon className={`text-${iconStyle || 'primary'}`} /> {pageName}
            </h3>
            <Card className="text-center">
                <Card.Header>{FeatureBar ? <FeatureBar /> : <div>Some Feature</div>}</Card.Header>
                <Card.Body>
                    {children}
                </Card.Body>
                <PageFooter />
            </Card>
        </div>
    )
}
export default PageWrapper