import { useState, useEffect } from 'react'
import './ItemProduct.scss'

const ItemProduct = ({data, action}) => {
    const [contador, setContador] = useState(1)

    const {title, image, price, stock} = data

    const addNumber = () => {
        setContador(contador + 1)
    }
    const removeNumber = () => {
        setContador(contador - 1)
    }
    //1. Mount -> Crea
    // useEffect( () => {

    // }, [])

    //2. Update/Change/Actualizacion -> Cambio el valor State/prop
    // useEffect( () => {

    // })
    //3. Unmount/Desmontaje -> Destruye, desaparece
    // useEffect( () => {
        // return () => {
            //     console.log("se desmonta el componente")
            // }
    // })

    useEffect( () => {
        console.log("Actualizacion")
        // setContador(1)
    }, [contador])



    return(
        <div className="item-product">
            <img src={`/assets/${image}`} alt="Imagen producto" />
            <p>{title}</p>
            <span>$ {price}</span>
            <div className='countProd'>
                <button onClick={removeNumber}>-</button>
                <p>{contador}</p>
                <button onClick={addNumber}>+</button>
            </div>
            <button onClick={action}>Comprar</button>
        </div> 
    )
}

export default ItemProduct