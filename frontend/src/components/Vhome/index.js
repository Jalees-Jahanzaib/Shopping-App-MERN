import React, { Component } from 'react'
import AppNavbar from './../main/VNavBar'
import Products from './../products/index'
import Addproducts from './../products/addproducts'
import { Container } from 'reactstrap'
export default class Vhome extends Component {
    render() {
        return (



            <div>
                <AppNavbar />
                <Container>
                    <Addproducts />
                    <Products />
                </Container>

            </div>
        )
    }
}
