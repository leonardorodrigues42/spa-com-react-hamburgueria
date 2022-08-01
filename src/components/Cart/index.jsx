import { CartDiv } from "./styles"

const Cart = ({currentSale, filterCurrent}) => {
    
    console.log(currentSale.length == 0)
    console.log(currentSale)

  return  currentSale.length !== 0 ? (
        <CartDiv>
            <div className="header-cart">
                Carrinho de compras
            </div>
            <div className="list-container">      
           { currentSale.map((item, index) =>
                (   
                    <li key={index} className="itemCart">
                        <img src={item.img} alt="" />
                        <div className="infos">
                            <span className="name">{item.name}</span>
                            <span className="category">{item.category}</span>
                            <span className="category">x{item.count ? item.count : 1} </span>
                        </div>
                        <button onClick={() => filterCurrent(item)} >Remover</button>
                    </li>
                ) 
            ) }
            </div>
            <div className="divTotal">
                <span class="spanTotal">Total</span>
                <span className="spanValue">R$ {currentSale.reduce((acc, prox) => {
                    return acc + (prox.count ? prox.count*prox.price : prox.price)
                },0).toFixed(2)}</span>
            </div>      
        </CartDiv>
    ) : (
        <CartDiv>
            <div className="header-cart">
                Carrinho de compras
            </div>
            <div className="empty-container">
                <span className="infoCart">Carrinho vazio</span>
                <span className="category">Adicone um produto</span>
            </div>
        </CartDiv>
    )
}

export default Cart