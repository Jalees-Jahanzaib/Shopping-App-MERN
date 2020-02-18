import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem, ListGroupItemText, ListGroupItemHeading } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default class FileredProduct extends Component {
    render() {
        const ProductItems = this.props.products
        return (
            <div>
                <Container>



                    <ListGroup >

                        <TransitionGroup className="products">
                            {ProductItems.map(({ id, name, price, quantity, seller }) => (
                                <CSSTransition key={id} timeout={500} >
                                    <ListGroupItem light>
                                        <ListGroupItemHeading> {name} </ListGroupItemHeading>
                                        <ListGroupItemText>Quantity = {quantity} </ListGroupItemText>
                                        <ListGroupItemText>Price= {price}</ListGroupItemText>
                                        <ListGroupItemText>Seller={seller}</ListGroupItemText>


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
