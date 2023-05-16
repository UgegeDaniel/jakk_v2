import styles from "../../styles";
import { aboutTxt } from "../../utils";

const AboutPageContent = () => (
    <>
        <figcaption className={styles.blockQuoteFooter}>
            <cite title="Source Title">{aboutTxt}</cite>
        </figcaption>
    </>
)
export default AboutPageContent;