import notFound from '../assets/img/notFound.png'


const NotFound = () => {
    return(
        <div>
            <img className="pizzaNotFound" src={notFound} alt="not found" />
        </div>
    )
}


export default NotFound;