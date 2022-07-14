import ItemProduct from "../ItemProduct/ItemProduct"

const ItemContainer = ({section}) => {

    return(
        <div className='list-products'>
            <h2>{section}</h2>
            <ItemProduct title="Campera Invierno" price={15000} image={'img1.webp'}/>
            <ItemProduct title="Remera" price={3400} image={'img2.webp'}/>
        </div>
    )
}

export default ItemContainer