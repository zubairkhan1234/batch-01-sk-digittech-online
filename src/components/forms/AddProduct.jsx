import React, { useState, useRef, useEffect } from 'react'

function AddProduct() {

    const userName = useRef('dsd')

    const [counter, setCounter] = useState(0)

    const [secondCounter, setSecondCounter] = useState(0)
    //    console.log(userName)
    // const [userName, setUserName] = useState('')

    // let userName = ''

    useEffect(() => {


        console.log('runnign UseEffect')

        if (counter === 5) {

            let className = prompt()
            console.log(className)
        }
        
        if(secondCounter === 2){
            alert("counter value reached 2")
        }
    }, [counter, secondCounter])


    console.log(counter)

    console.log(secondCounter)
    const createProduct = (event) => {
        event.preventDefault()
        console.log("consoleValue ", userName.current.value)

        userName.current.style.color = 'red'
    }

   
    return (
        <div>
            <h1>Add Product form</h1>
            <form>

                <label htmlFor="productTitle">
                    Product Tiltle
                    <input ref={userName} type='text' onChange={(e) => userName.current.value = e.target.value} />
                </label>

                <button onClick={(event) => createProduct(event)} >Create Product</button>
            </form>
            <button onClick={() =>  setCounter(counter + 1)}>
                Inceament
            </button>
            <br />
            <span>{counter}</span>

            <button onClick={() => setSecondCounter(secondCounter + 1)}>
                Second Counter Inceament
            </button>
            <span>
                {secondCounter}
            </span>
        </div>
    )
}

export default AddProduct
