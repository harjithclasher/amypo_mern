import React from 'react'

const CartSummary = ({cart}) => {
    const total = cart.reduce((sum , p )=>p+sum , 0)
  return (
    <div>
        <p>Total:{total} 
        </p>
    </div>
  )
}

export default CartSummary