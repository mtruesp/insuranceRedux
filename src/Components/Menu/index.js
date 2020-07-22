import React from 'react'
import {Container,Row,Col,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Menu = () => {
    return (
        <Container>
            <Row>
                <Col sm="2">
                    <Link to="/">
                        <Button>
                            Crear Polizas
                        </Button>
                    </Link>
                </Col>
                <Col sm="2">
                    <Link to="/claim">
                        <Button>
                            Crear Reclamo
                        </Button>
                    </Link>
                </Col>
                <Col sm="2">
                    <Link to="/users">
                        <Button>
                            Lista de usuarios
                        </Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default Menu