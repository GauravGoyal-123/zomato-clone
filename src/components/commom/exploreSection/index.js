import React from 'react'
import ExploreCard from './exploreCard'
import './exploreSection.css'



const ExploreSection = ({list, collectionName}) => {
  return (
    <div className='explore-section max-width'>
        <div className='collection-title'>{collectionName}</div>
        <div className='explore-grid'>
            {list.map((restaurent) => {
                return <ExploreCard restaurant = {restaurent}/>
            })}
        </div>
    </div>
  )
}

export default ExploreSection