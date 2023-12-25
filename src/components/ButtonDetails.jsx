import { Button } from 'react-bootstrap';

const ButtonDetails = ({ colorButton, textButton, PizzaDetalle, PizzaId }) => {
    return (<> <Button variant={colorButton} onClick={() => 
    PizzaDetalle(PizzaId)}>
                 {textButton} 
                 </Button> </>);
   };

export default ButtonDetails