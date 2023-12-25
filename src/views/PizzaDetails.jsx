import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { PizzaContext } from '../contexts/PizzaContext';
import Card from 'react-bootstrap/Card';
import ImagenPizza from '../assets/img/pizzaicon.png'

const PizzaDetails = () => {
   const { id } = useParams();
   const { pizzas, addToCart } = useContext(PizzaContext);


   const pizza = pizzas.find(e => e.id === id);


   return (

      <div className="container pt-5">
         <Card className='CardCustom'>
            <div className='d-flex gap-3'>
               <div>
                 <Card.Img className='imgPizzaDetails ' variant="top" src={pizza.img} />
               </div>
               <div>
                 <div className=''>
                     <h1>{pizza.name}</h1>
                 </div>
                 <hr />
                 <div className=''>
                     <p>{pizza.desc}</p>
                 </div>
                 <div className=''><p><strong>Ingredientes:</strong></p></div>
                 <div className=''>
                     <ul>
                        {pizza.ingredients.map((ingredient, index) => (
                           <li key={index}>
                              <img className='IconoPizza' src={ImagenPizza} alt="Ingredient Icon" /> {ingredient}
                           </li>
                        ))}
                     </ul>
                 </div>
                 <div className='d-flex justify-content-between '>
                     <h2>Precio: ${pizza.price} </h2>
                     <button className='btn btn-primary' onClick={() => addToCart(pizza)}>Agregar</button>
                 </div>
               </div>
            </div>

         </Card>
      </div>
   );

}


export default PizzaDetails