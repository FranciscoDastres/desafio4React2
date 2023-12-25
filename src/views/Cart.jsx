import { useContext } from 'react';
import { PizzaContext } from '../contexts/PizzaContext';
import { Container, Row, Col, Button, Image, Alert,Card } from 'react-bootstrap';

const Cart = () => {
  const {
    cart,
    addToCart,
    total,
    count,
    emptyCart,
    removeToCart,
  } = useContext(PizzaContext);

  const handleAddPizza = (pizza) => {
    addToCart(pizza);
  };

  const handleRemovePizzaFromCart = (pizza) => {
    removeToCart(pizza.id);
  };

  return (
    <Container className="pt-5">
      <Card>
      <Row>
        <Col>
          <h1>Carrito de Compras</h1>
        </Col>
      </Row>
      {cart.length > 0 ? (
        cart.map((pizza) => (
          <div key={pizza.id}>
            <Row className="mb-2">
              <Col xs={2}>
                <Image classNamesrc={pizza.img} alt={pizza.name} thumbnail   />
              </Col>
              <Col xs={4}>{pizza.name}</Col>
              <Col className="d-flex gap-2" xs={6}>
                <div>${pizza.price}</div>
                <div>
                  <Button
                    variant="danger"
                    onClick={() => handleRemovePizzaFromCart(pizza)}
                  >
                    -
                  </Button>
                </div>
                <div>{pizza.cant}</div>
                <div>
                  <Button
                    variant="primary"
                    onClick={() => handleAddPizza(pizza)}
                  >
                    +
                  </Button>
                </div>
              </Col>
            </Row>
            <hr />
          </div>
        ))
      ) : (
        <Alert variant="primary">Tu carrito esta vacio</Alert>
      )}
      <Row className="d-flex fw-bold">
        <Col xs={6}>Total Items</Col>
        <Col xs={2}>{count}</Col>
        <Col xs={2}>Total: ${total}</Col>
        <Col xs={2}>
          <Button variant="danger" onClick={() => emptyCart()}>
            Vaciar Carro
          </Button>
          <Button variant="success" size="medium" color="error" >Pagar</Button>
        </Col>
      </Row>
      </Card>
    </Container>
  );
};

export default Cart;