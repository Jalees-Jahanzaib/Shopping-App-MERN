import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, ListGroup, ListGroupItem, Button, ListGroupItemText, ListGroupItemHeading } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';
class Products extends Component {
    state = {
        items: [{
            id: uuid(),
            name: "Sucide ",
            seller: "Sellers of Death",
            quantity: 105,
            minimum: 50,


        },
        {
            id: uuid(),
            name: "Death ",
            seller: "Killer",
            quantity: 300,
            minimum: 50,

        }]
    }
    render() {
        const { items } = this.state
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
                            {items.map(({ id, name, quantity, minimum }) => (
                                <CSSTransition key={id} timeout={500} >
                                    <ListGroupItem dark>                                 <ListGroupItemHeading>{name}</ListGroupItemHeading>
                                        <ListGroupItemText>Quantity ={quantity}</ListGroupItemText>
                                        <ListGroupItemText>Minimun-Quantity= {minimum}</ListGroupItemText></ListGroupItem>









                                </CSSTransition>

                            ))}




                        </TransitionGroup>


                    </ListGroup>

                </Container>

            </div>
        )
    }
}
export default Products;