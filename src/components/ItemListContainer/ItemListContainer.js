import { useEffect } from "react"
import ItemProduct from "../ItemProduct/ItemProduct"
import './ItemListContainer.scss'

const ItemListContainer = ({section}) => {
    const product1 = {
        title: "Campera Invierno",
        price: 15000,
        image: 'img1.webp',
        stock: 6
    }

    const product2 = {
        title: "Remera",
        price: 34000,
        image: 'img2.webp',
        stock: 10
    }

    useEffect( () => {
        //console.log("Ejecuto en fase de actualizacion")
        // fetch().then(
        //     setProduct()
        // )
    })

    const handleSubmit = () => {console.log("Envio de info")}

    return(
        <div className='list-products'>
            <h2>{section}</h2>
            <ItemProduct data={product1} action={handleSubmit}/>
            <ItemProduct data={product2}/>
        </div>
    )
}

export default ItemListContainer