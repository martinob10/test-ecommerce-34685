import {useState , useContext} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DeleteIcon from '@mui/icons-material/Delete';
import { CartContext } from '../../context/CartContext';


const CartWidget = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const { cartProducts, clear } = useContext(CartContext)

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return(
        <div className='cart-widget'>
            <ShoppingCartIcon 
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            />
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                {cartProducts.map((product) => {
                    return(
                        <div className='item-cart-product' key={product.id}>
                            <img src={`/assets/${product.image}`} alt="" />
                            <div className='cart-product__details'>
                                <p>{product.title}</p>
                                <p>TAMAÑO : XS</p>
                            </div>
                            <div className='cart-product__details'>
                                <p>$ {product.price}</p>
                            </div>
                            <div className='cart-product__action'>
                                <DeleteIcon />
                            </div>
                        </div>
                    )
                })}
                <button onClick={() => clear()}>Borrar todo</button>
            </Menu>
        </div>
    )
}

export default CartWidget