import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const Cart = () => {
  const {setCartCategory} =  useSelector((state) => state.cart)

    const dispatch = useDispatch()
  return (
    <div>
      
    </div>
  )
}

export default Cart