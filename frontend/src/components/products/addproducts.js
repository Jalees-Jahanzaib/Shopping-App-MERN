import React, { Component } from 'react';
import {
    Button,
    Modal, ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
}
    from 'reactstrap';
import { connect } from 'react-redux'
import { add_item, seller } from './../../actions/item_actions'
class Addproducts extends Component {
    state = {
        modal: false,
        name: "",
        quantity: "",
        seller: "",
        price: ""


    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })

    }
    onSubmit = e => {
        e.preventDefault();
        const ItemNew = {
            name: this.state.name,
            quantity: this.state.quantity,
            price: this.state.price,
            minimum: this.state.minimum,
            seller: this.props.seller


        }
        this.props.add_item(ItemNew);
        this.toggle()

    }

    render() {



        return (
            <div>
                <Button
                    onClick={this.toggle}
                >Add Products</Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add Product</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="product"> Product</Label>
                                <Input type='text' name='name' id="product" placeholder="Add Product Here!" onChange={this.onChange} />
                                <Input type='number' name='quantity' id="quantity" placeholder="Add Quantity Here!" onChange={this.onChange} />
                                <Input type='number' name='price' id="price" placeholder="Add Price Here!" onChange={this.onChange} />
                                <Button size="lg"> Add!</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>


        )
    }
}
const mapStateToProps = (state) => ({
    item: state.items
})
export default connect(mapStateToProps, { add_item })(Addproducts)