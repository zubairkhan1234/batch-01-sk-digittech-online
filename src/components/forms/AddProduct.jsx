import React, { useState, useRef } from 'react'
import Products from '../../pages/Product/Products'

function AddProduct() {

    const productTitle = useRef('')
    const productDec = useRef('')
    const productID = useRef('')
    const productImage = useRef('')
    const productPrice = useRef('')
    const productqty = useRef('')
    const stock = useRef(true)

    // const [counter, setCounter] = useState(0)
    const [products, setProducts] = useState([])

    // const [secondCounter, setSecondCounter] = useState(0)

    // useEffect(() => {


    //     console.log('runnign UseEffect')

    //     if (counter === 5) {

    //         let className = prompt()
    //         console.log(className)
    //     }

    //     if (secondCounter === 2) {
    //         alert("counter value reached 2")
    //     }
    // }, [counter, secondCounter])



    const createProduct = (event) => {
        event.preventDefault()

        console.log(productImage.current.value)
        console.log(productImage.current.files[0])

        let file = URL.createObjectURL(productImage.current.files[0])

        console.log(file)

        let data = {
            title: productTitle.current.value,
            description: productDec.current.value,
            price: productPrice.current.value,
            id: productID.current.value,
            qty: productqty.current.value,
            stock: stock.current.value,
            image: file
        }



        setProducts([...products, data])
    }



    return (
        <>
            <div>
                <h1>Add Product form</h1>
                <form>

                    <label>
                        Product Tiltle
                        <input ref={productTitle} type='text' onChange={(e) => productTitle.current.value = e.target.value} />
                    </label> <br />

                    <label>
                        Product Descriptions
                        <input ref={productDec} type='text' onChange={(e) => productDec.current.value = e.target.value} />
                    </label> <br />

                    <label>
                        Product ID
                        <input ref={productID} type='text' onChange={(e) => productID.current.value = e.target.value} />
                    </label>  <br />

                    <label>
                        Product Image
                        <input ref={productImage} type='file' />
                    </label>  <br />

                    <label>
                        Product qunatity
                        <input ref={productqty} type='number' onChange={(e) => productqty.current.value = e.target.value} />
                    </label>  <br />

                    <label>
                        Product Price
                        <input ref={productPrice} type='number' onChange={(e) => productPrice.current.value = e.target.value} />
                    </label>  <br />


                    <label>
                        Stock
                        <select ref={stock} onChange={(event) => {
                            console.log(event.target.value)
                        }}>
                            <option value={false}>
                                NO
                            </option>

                            <option value={true}>
                                Yes
                            </option>
                        </select>
                    </label>  <br />

                    <button onClick={(event) => createProduct(event)} >Create Product</button>
                </form>
            </div>

            <Products products={products} />
        </>

    )
}

export default AddProduct
