import {useState} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DeleteIcon from '@mui/icons-material/Delete';

const CartWidget = () => {
    const [anchorEl, setAnchorEl] = useState(null);
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
                <div className='item-cart-product'>
                    <img src={"/assets/img1.webp"} alt="" />
                    <div className='cart-product__details'>
                        <p>CAMISETA N°1</p>
                        <p>TAMAÑO : XS</p>
                    </div>
                    <div className='cart-product__details'>
                        <p>$ 14.999,00</p>
                    </div>
                    <div className='cart-product__action'>
                        <DeleteIcon />
                    </div>
                </div>
            </Menu>
        </div>
    )
}

export default CartWidget