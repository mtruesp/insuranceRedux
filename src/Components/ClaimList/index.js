import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {connect} from 'react-redux'

const ClaimList = (props) => {

    return (
        <Container>
            Lista de reclamos:
            {
                props.list.map((claim) => {
                    return (
                        <Row key={claim.name+claim.amount}>
                            <Col>
                                {claim.name}
                            </Col>
                            <Col>
                                {claim.amount}
                            </Col>
                        </Row>
                    )
                })
            }
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        list: state.listOfClaims
    }
}

export default connect(mapStateToProps)(ClaimList)


