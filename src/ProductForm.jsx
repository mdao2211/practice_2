import React, {useState} from 'react'


export const ProductForm = ({addProductProp}) => {

    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState('')
    const [price, setPrice] = useState('')
    
    const addProduct = _ => {
        addProductProp({
            id : (new Date()).getTime(),
            name, quantity, price
        }) 
        setName('')
        setQuantity('')
        setPrice('')
    }

    return <div>
        <h1>Add Product</h1>
        <input type="text" placeholder='Product Name' value={name} onChange={
            event => {
                setName(event.target.value)
            }
        }/>
        <input type="text" placeholder='Quantity' value={quantity} onChange={
            event => {
                setQuantity(event.target.value)
            }
        }/>
        <input type="text" placeholder='Price' value={price} onChange={
            event => {
                setPrice(event.target.value)
            }
        }/>
        <input type="button" value='Add' onClick={addProduct}/>

    </div>
}

export default ProductForm