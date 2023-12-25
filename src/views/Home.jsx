
import { PizzaContext } from '../contexts/PizzaContext';
import { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import ButtonDetails from '../components/ButtonDetails';


const Home = () => {
 const navigate = useNavigate();
 const { pizzas, addToCart } = useContext(PizzaContext);

 const PizzaDetalle = (pizzaId) => {
    navigate(`/PizzaDetails/${pizzaId}`);
 };


 
 return (
    <div className="container gallery pt-5">
      <div className="row">

        {pizzas.map((pizza) => (
          <div className="col-lg-4 mb-5" key={pizza.id}>
            <Card>
              <Card.Img variant="top" src={pizza.img} />
              
              <Card.Body>
                <div><h2>{pizza.name}</h2></div>
                <hr />
                <div>
                 <p><strong>Ingredientes:</strong></p>
                 <ul>
                    {pizza.ingredients.map((ingredient, index) => (
                      <li key={index}>
                        <img className='IconoPizza' src="./src/assets/img/pizzaicon.png" alt="Ingredient Icon" /> {ingredient}
                      </li>
                    ))}
                 </ul>
                </div>
              </Card.Body>
              <Card.Footer className='text-center fs-3'>
                <div>$ {pizza.price}</div>
                <div className='d-flex justify-content-center gap-5 mt-2'>
                 <ButtonDetails colorButton="primary" textButton="Ver más" PizzaDetalle={PizzaDetalle} PizzaId={pizza.id} />
                 <button className='btn btn-danger' onClick={() => addToCart(pizza)}>Agregar</button>

                </div>
              </Card.Footer>
            </Card>
          </div>
        ))}

      </div>
    </div>
 );
};

export default Home;