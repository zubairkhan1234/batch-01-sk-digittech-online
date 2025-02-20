import React from 'react'
import Cart from './Cart'



function Products(props) {
  console.log(props)

  let { products } = props

  console.log("products data in Product component ", products)
  return (
    <div>

      {products.map((value, index) => {
        return <Cart value={value} key={index}/>
      })}
    </div>
  )
}

export default Products
