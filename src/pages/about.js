import { CgDetailsMore } from "react-icons/cg";
import { PageWrapper, AboutPageContent } from "../components/";

const About = () => {
    return (
        <PageWrapper pageName="About" Icon={CgDetailsMore}>
            <AboutPageContent />
        </PageWrapper>
    )
}

export default About;