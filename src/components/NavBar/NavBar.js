// UpperCamelCase
import './NavBar.scss'

const NavBar = () => {
    return(
        // Fragment
        <div className='navbar-primary'>
            <img src="/assets/logo.svg" alt="logo adidas" />
            <ul>
                <li><button>Inicio</button></li>
                <li><button>Productos</button></li>
                <li><button>About Us</button></li>
                <li><button>Contacto</button></li>
            </ul>
        </div>
    )
}

export default NavBar