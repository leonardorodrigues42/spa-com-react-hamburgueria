import Product from "../Product"
import ProductsListDiv from "./styles"

const ProductsList = ({products, handleClick}) => {
    
    return (
        <ProductsListDiv>
            {products.map((product, index)=> {
                return (
                    <Product 
                        handleClick={handleClick} 
                        key={index}
                        product={product}
                    />
                )
            })}
        </ProductsListDiv>
    )



}

export default ProductsList