import React, { Component } from 'react';
import { connect } from 'react-redux'
import { get_items, delete_item } from './../../actions/item_actions'
import PropTypes from 'prop-types'
import FileredProduct from './FileredProduct'
import { Container, } from 'reactstrap';
import AppNavbar from './../main/VNavBar'


class Dispatched extends Component {
    componentDidMount() {
        this.props.get_items();

    }
    onDelete = (id) => {
        this.props.delete_item(id)
    }
    state = {
        p: this.props.item
    }


    render() {
        const { items } = this.props.item
        console.log(items)
        var rebels = items.filter(function (pilot) {
            return pilot.status === "Dispached";
        }); return (
            <div>
                <
                    AppNavbar />
                <Container>

                    <FileredProduct products={rebels} />
                </Container>

            </div>
        )
    }
}
Dispatched.propTypes = {
    get_items: PropTypes.func,
    item: PropTypes.object
}
const mapStateToProps = (state) => ({
    item: state.items
})
export default connect(mapStateToProps, { get_items, delete_item })(Dispatched);