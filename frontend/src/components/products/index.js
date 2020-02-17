import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, ListGroup, ListGroupItem, Button, ListGroupItemText, ListGroupItemHeading } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';
import { connect } from 'react-redux'
import { get_items, delete_item } from '../../actions/item_actions'
import PropTypes from 'prop-types'
class Products extends Component {
    componentDidMount() {
        this.props.get_items();
    }
    onDelete = (id) => {
        this.props.delete_item(id)
    }
    render() {
        const { items } = this.props.item
        return (
            <div>
                <Container>
                    <Button color="dark" dark
                        style={{ marginBottom: '3rm' }}
                        onClick={() => {
                            const name = prompt('Enter name');
                            const quantity = prompt('Enter Quantity');
                            const minimum = prompt('Enter Minimun');
                            if (name && quantity && minimum) {
                                this.setState(state => ({
                                    items: [...state.items, {
                                        id: uuid(),
                                        name,
                                        quantity,
                                        minimum

                                    }]
                                }))
                            }


                        }}> Add Products</Button>
                    <ListGroup >

                        <TransitionGroup className="products">
                            {items.map(({ id, name, price, quantity, minimum }) => (
                                <CSSTransition key={id} timeout={500} >
                                    <ListGroupItem dark>
                                        <ListGroupItemHeading>{name}</ListGroupItemHeading>
                                        <ListGroupItemText>Quantity ={quantity}</ListGroupItemText>
                                        <ListGroupItemText>Minimun-Quantity= {minimum}</ListGroupItemText>
                                        <ListGroupItemText>Price= {price}</ListGroupItemText>
                                        <Button color="danger" size="lg" onClick=
                                            {this.onDelete.bind(this, id)}>Delete</Button>
                                    </ListGroupItem>










                                </CSSTransition>

                            ))}




                        </TransitionGroup>


                    </ListGroup>

                </Container>

            </div>
        )
    }
}
Products.propTypes = {
    get_items: PropTypes.func,
    item: PropTypes.object
}
const mapStateToProps = (state) => ({
    item: state.items
})
export default connect(mapStateToProps, { get_items, delete_item })(Products);