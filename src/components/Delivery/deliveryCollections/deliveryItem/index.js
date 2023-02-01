import React from 'react'
import './deliveryItem.css'

function DeliveryItem({item}) {
  return (
    <div>
        <div className='delivery-item-cover'>
            <img src={item.cover} className='delivery-item-img' alt={item.title} />
        </div>
        <div className='delivery-item-title'>{item.title}</div>
    </div>
  )
}

export default DeliveryItem