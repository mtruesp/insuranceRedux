import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import {connect} from 'react-redux'

const NamesList = (props) => {

    return(
        <Container>
            <Row>
                <Col>
                    Nombres: 
                </Col>
                <Col>
                    {
                        props.names.map((name) => {
                            return (
                                <Row key={name}>
                                    {name}
                                </Row>
                            )
                        })
                    }
                </Col>
            </Row>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        names: state.listPolicies
    }
}

export default connect(mapStateToProps)(NamesList)