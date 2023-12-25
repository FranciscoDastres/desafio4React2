import { Route, Routes as R } from 'react-router-dom'
import Home from './views/Home'
import Navbar from './components/Navbar'
import Cart from './views/Cart'
import PizzaDetails from './views/PizzaDetails'
import NotFound from './views/NotFound'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <R>
        <Route path="/" element={<Home />} />
        <Route path="/PizzaDetails/:id"element={<PizzaDetails />}/>
        <Route path="/Cart" element={<Cart />} />
        <Route path='*' element={<NotFound />} />
      </R>
    </div>
  )
}
export default App
