import React from 'react'
import styles from './cart.module.css'


function Cart(props) {

    let { value } = props

    console.log('Value in Cart component', value)
    return (
        <div className={styles.cartContainer} >
            <div className={styles['cart-header']}>
                <p>Yout Shopping Cart</p>
                <p>ID: {value.id}</p>
            </div>

            <div className={styles['cart-image-title-box']}>
                <div>
                    {/* <img alt='text' className={styles['product-image']} src='https://images.priceoye.pk/nova-smart-watch-pakistan-priceoye-slq4f-270x270.webp' /> */}
                    <img alt='text' className={styles['product-image']} src={value.image} />
                </div>
                <div className={styles['card-content-right']}>
                    <p className={styles['product-title']}>{value.title}</p>
                    <button className={styles['stock-badge']}>
                        In stock
                    </button>
                    <div className={styles['counter-container']}>
                        <button>-</button>
                        <button>{value.qty}</button>
                        <button>+</button>
                    </div>
                </div>


            </div>
            <div>
                <hr />
            </div>
            <div>
                <div className={styles['cart-footer']}>
                    <div>
                        <span>
                            Standard Package
                        </span>
                        <span>
                            Free
                        </span>
                    </div>

                    <div>
                        <span>
                            Delivery Charges
                        </span>
                        <span>
                            999
                        </span>
                    </div>

                    <div>
                        <span>
                            total
                        </span>
                        <span>
                            1899
                        </span>
                    </div>
                </div>
                <button className={styles['checkout-button']}>
                    Checkout
                </button>
            </div>
        </div>
    )
}

export default Cart
