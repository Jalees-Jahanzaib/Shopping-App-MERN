import React, { Component } from 'react'
import AppNavbar from './../main/index'
import Products from './../products'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Home extends Component {
    render() {
        return (
            <div>
                <AppNavbar />
                <Products />
            </div>
        )
    }
}
