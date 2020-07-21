import React from 'react'
import { Row, Container, Col } from 'react-bootstrap'
import {connect} from 'react-redux'

const TotalAmount = (props) => {

    return(
        <Container>
            <Row>
                <Col sm="4">
                    Total: ${props.totalAmount}
                </Col>
            </Row>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        totalAmount : state.totalAmount
    }
}

export default connect(mapStateToProps)(TotalAmount)