import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, ListGroup, ListGroupItem, Button, ListGroupItemText, ListGroupItemHeading } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux'
import { get_items, delete_item } from '../../actions/item_actions'
import PropTypes from 'prop-types'
import Addproducts from './addproducts'
import './product.css'
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
                    <Addproducts className='space' />


                    <ListGroup >

                        <TransitionGroup className="products">
                            {items.map(({ id, name, price, quantity, minimum }) => (
                                <CSSTransition key={id} timeout={500} >
                                    <ListGroupItem light>
                                        <ListGroupItemHeading>{name}</ListGroupItemHeading>
                                        <ListGroupItemText>Quantity ={quantity}</ListGroupItemText>
                                        <ListGroupItemText>Price={price}</ListGroupItemText>
                                        <ListGroupItemText>Minimun-Quantity={minimum}</ListGroupItemText>

                                        <Button className="red" onClick=
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