import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { BrowserRouter, Route } from 'react-router-dom'

import Menu from '../Menu'
import PolicyForm from '../PolicyForm'
import ClaimForm from '../ClaimForm'
import NamesList from '../NamesList'
import TotalAmount from '../TotalAmount'
import ClaimList from '../ClaimList'
import UserList from '../UserList'

const App = () => {
    return(
        <Container>
            <BrowserRouter>
                <Row>
                    <Menu/>
                </Row>
                <Row>
                    <Col>
                        <Route path="/" exact component={PolicyForm}></Route>
                        <Route path="/claim" component={ClaimForm}></Route>
                        <Route path="/users" component={UserList}></Route>
                    </Col>
                    <Col>
                        <Row>
                            <NamesList/>
                        </Row>
                        <Row>
                            <TotalAmount/>
                        </Row>
                        <Row>
                            <ClaimList/>
                        </Row>
                    </Col>
                </Row>
            </BrowserRouter>
        </Container>
    )
}

export default App