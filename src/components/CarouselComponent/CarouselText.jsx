import React from 'react'
import { Container } from 'react-bootstrap'
import styles from '../../styles'

const CarouselText = ({ content }) => {
    return (
        <React.Fragment>
            <figure className={styles.centerTxt}>
                <blockquote className="blockquote">
                    <content.Icon className={styles.txtPri1} />
                    <p className="text-primary">{content.headerTxt}</p>
                </blockquote>
                <Container className={styles.blockQuoteFooter}>
                    <figcaption>
                        <cite>{content.body}</cite>
                    </figcaption>
                </Container>
            </figure>
        </React.Fragment>

    )
}

export default CarouselText