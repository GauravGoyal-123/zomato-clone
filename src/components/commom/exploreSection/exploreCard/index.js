import React from 'react'
import './exploreCard.css'

const ExploreCard = ({restaurant}) => {
  const name = restaurant?.info?.name ?? "";
  const coverImg = restaurant?.info?.image?.url ?? restaurant?.info?.o2FeaturedImage?.url;
  const deliveryTime = restaurant?.order?.deliveryTime;
  const rating = restaurant?.info?.rating?.rating_text;
  const approxPrice = restaurant?.info?.cfo?.text;
  const offers = restaurant?.bulkOffers ?? [];
  const cuisines = restaurant?.info?.cuisine
    ?.map((item) => item.name)
    .slice(0, 3);
  const bottomContainers = restaurant?.bottomContainers;
  const goldOff = restaurant?.gold?.text;
  const proOff = offers.length > 1 ? offers[0].text : null;
  const discount =
    offers.length > 1
      ? offers[1].text
      : offers.length === 1
      ? offers[0].text
      : null;
  return (
    <div className='explore-card cus-po'>
      <div className='explore-card-cover'>
        <img src={coverImg} alt={name} className='explore-card-img' />
        <div className='delivery-time'>{deliveryTime}</div>
        {proOff && <div className='pro-off'>{proOff}</div>}
        {goldOff && <div className='gold-off absolute-center'>{goldOff}</div>}
        {discount && <div className='discount absolute-center'>{discount}</div>}
      </div>
      <div className='res-row'>
        <div className='res-name'>{name}</div>
        {rating && 
          (<div className='res-rating absolute-center'>
            {rating} <i className='fi fi-rr-star absolute-center'></i>
          </div>
        )}
      </div>
      <div className='res-row'>
          {cuisines.length && (
            <div className='res-cuisine'>
              {cuisines.map((item, i) => {
                return <span className='res-cuisine-tag'>{item}{i !== cuisines.length-1 && ","}</span>
              })}
              
            </div>            
          )}
          {approxPrice && <div className='approx-price'>{approxPrice}</div>}
      </div>
      {bottomContainers && (
      <div>
        <div className='card-separator'></div>
        <div className='explore-bottom'>
          <img src={bottomContainers[0]?.image?.url} style={{height:"18px"}} alt={bottomContainers[0]?.text}/>
          <div className='res-bottom-text'>{bottomContainers[0]?.text}</div>
        </div> 
      </div>
      )
      }
    </div>
  );
}

export default ExploreCard