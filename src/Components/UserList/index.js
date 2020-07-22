import React from 'react'
import {Container, Row, Button} from 'react-bootstrap'
import axios from 'axios'
import {connect} from 'react-redux'

import {getUsers} from '../../Actions'
import { propTypes } from 'react-bootstrap/esm/Image'

const UserList = (props) => {

    const callUsers = async () => {
        props.getUsers()
    }

    return(
        <Container>
            <Row>
                <Button onClick={callUsers}>
                    Obtener usuarios
                </Button>
            </Row>
            <Row>
                Lista
            </Row>
        </Container>
    )
}

export default connect(null, {getUsers})(UserList)