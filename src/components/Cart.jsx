import React from 'react'
import MobileImage from '../assets/images/mobile.webp'

function Cart() {

  const [products, setProducts] = React.useState([


  ])

  return (
    <div>
      {/* <img src={MobileImage}/> */}
      <img src='https://images.priceoye.pk/xiaomi-redmi-note-13-pakistan-priceoye-kbzfb-270x270.webp'/>
      <h1>
        Nokia 105 Classic
      </h1>

      <div>
        <span>Rs 4,199</span><button>add to cart</button>
      </div>
    </div>
  )
}

export default Cart
