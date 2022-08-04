import { useState, useEffect, useContext } from 'react'
import './ItemProduct.scss'
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext';

const ItemProduct = ({data, action}) => {
    const { handleClick, name } = useContext(CartContext)


    const [contador, setContador] = useState(1)
    const {title, image, price, stock, id} = data

    const addNumber = () => {
        setContador(contador + 1)
    }
    const removeNumber = () => {
        setContador(contador - 1)
    }

    useEffect( () => {
        console.log("Actualizacion")
        // setContador(1)
    }, [contador])

    const addToCart = (e) => {
        console.log("click Producto")
        e.stopPropagation()
    }


    return(
        <div className="item-product">
                <Link to={`/productos/${id}`}> 
                <h1>{name}</h1>
                <div className='float-options'>
                    <p>ENVIO GRATIS</p>
                    <button><FavoriteBorderIcon /></button>
                </div>
                <img src={`/assets/${image}`} alt="Imagen producto" />
                <div className='detail-product'>
                    <p>{title}</p>
                    <p><CreditCardIcon /> 6 Cuotas sin interes</p>
                    <p><DeliveryDiningIcon />Envio fratis a partir de $6000</p>
                    <span>$ {price}</span>
                    <button onClick={addToCart}>AÑADIR AL CARRITO</button>
                </div>
        </Link>
            </div> 
    )
}

export default ItemProduct