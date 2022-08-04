import { useContext } from "react"
import { CartContext } from '../../context/CartContext'
import ItemProduct from "../ItemProduct/ItemProduct"

const ItemList = ({dataProducts}) => {
    const {name, setName, handleClick} = useContext(CartContext)
    // console.log("Informacion desde contexto: ", name)
    
    return(
        <>
            <button onClick={() => setName('Franco')}> Click</button>
            {dataProducts.map( (product) => {    
                return (
                    <>
                        <ItemProduct key={product.id} data={product}/>
                    </>
                )
            })}
        </>
    )
}

export default ItemList