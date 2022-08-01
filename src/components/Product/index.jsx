import DivProduct from "./styles"

const Product = ({product, handleClick}) => {
    return (
        <DivProduct>
            <div className="img">
                <img src={product.img} alt="" />
            </div>
            <div className="container">
                <span className="name"><b>{product.name}</b></span>
                <span className="category"> {product.category} </span>
                <span className="price">R$ {product.price}</span>
                <button onClick={() => handleClick(product)} ><b> Adicionar </b></button>
            </div>
        </DivProduct>
    )
}

export default Product