import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, ListGroup, ListGroupItem, Button, ListGroupItemText, ListGroupItemHeading } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux'
import { get_items, delete_item } from '../../actions/item_actions'
import PropTypes from 'prop-types'
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
        var rebels = items.filter(function (pilot) {
            return pilot.status === "Not Dispached";
        });
        return (
            <div>
                <Container>



                    <ListGroup >

                        <TransitionGroup className="products">
                            {rebels.map(({ _id, name, price, quantity, status }) => (
                                <CSSTransition key={_id} timeout={500} >
                                    <ListGroupItem light>
                                        <ListGroupItemHeading>{name}</ListGroupItemHeading>
                                        <ListGroupItemText>Quantity ={quantity}</ListGroupItemText>
                                        <ListGroupItemText>Price={price}</ListGroupItemText>
                                        <ListGroupItemText>Status={status}</ListGroupItemText>

                                        <i class=" material-icons ">add_circle</i>          <Button className="red" onClick=
                                            {this.onDelete.bind(this, _id)}>Delete</Button>
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