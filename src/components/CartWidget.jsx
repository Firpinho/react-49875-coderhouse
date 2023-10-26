import cart from '../assets/cart.svg'

export const CartWidget = () => {
    return (
        <div className="cart">
            <div className="icon">
                <img src={cart} alt="Cart" />
            </div>
            <span>2</span>
        </div>
    )
}