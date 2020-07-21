import React from 'react'
import {Container, Row, Button, Form} from 'react-bootstrap'
import {connect} from 'react-redux'

import {createClaim} from '../../Actions'

const ClaimForm = (props) => {

    const nameRef = React.createRef()
    const amountRef = React.createRef()

    const handleCreateClaim = () => {
        let name = nameRef.current.value
        let amount = parseInt(amountRef.current.value)
        props.createClaim(name, amount)
    }

    return (
        <Container>
            <Row>
                Formulario de reclamos
            </Row>
            <Row>
                <Form.Group>
                    <Form.Control ref={nameRef} size="lg" type="text" placeholder="Nombre" />
                    <br />
                    <Form.Control ref={amountRef} size="lg" type="number" placeholder="Monto" />
                    <br />
                </Form.Group>
            </Row>
            <Row>
                <Button onClick={handleCreateClaim}>
                    Crear Reclamo
                </Button>
            </Row>

        </Container>
    )
}

export default connect(null, {createClaim})(ClaimForm)