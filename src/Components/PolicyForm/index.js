import React from 'react'
import {Container, Row, Button, Form, Col} from 'react-bootstrap'
import { connect } from 'react-redux'

import {createPolicy} from '../../Actions'

const PolicyForm = (props) => {

    const handlerCreate = () => {
        console.log('crear Poliza')
        props.createPolicy('Manuel', 100)
        console.log('props', props.policiesNames)
    }

    const handleDelete = () => {
        console.log('Borrar poliza')
    }

    return (
        <Container>
            <Row>
                Formulario de Polizas
            </Row>
            <Row>
                <Form.Group>
                    <Form.Control size="lg" type="text" placeholder="Nombre" />
                    <br />
                    <Form.Control size="lg" type="number" placeholder="Monto" />
                    <br />
                </Form.Group>
            </Row>
            <Row>
                <Col>
                    <Button onClick={handlerCreate}>
                        Crear Poliza
                    </Button>
                </Col>
                <Col>
                    <Button onClick={handleDelete}>
                        Borrar Poliza
                    </Button>
                </Col>
            </Row>

        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        policiesNames: state.listPolicies
    }
}

export default connect(mapStateToProps, {createPolicy})(PolicyForm) 