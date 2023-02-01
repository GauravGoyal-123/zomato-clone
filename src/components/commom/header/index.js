import React from 'react'
import './header.css'
function Header() {
  return (
  <div className = 'max-width header'>
      <img src = 'https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png' 
      alt = 'zomato-logo' 
      className='header-logo' /> 

      <div className='header-right'>
        <div className='header-left-location-search-container'>
          <div className='location-wrapper'>
            <div className='location-icon-name'>
              <i className='fi fi-rr-marker absolute-center location-icon' />
              <div>Banglore</div>
            </div>
            <i className='fi fi-rr-caret-down absolute-center' />
          </div>
          <div className='location-search-separator'></div>  
          <div className='header-searchbar'>
            <i className='fi fi-rr-search absolute-center search-icon' />
            <input placeholder='Search for a restuarent, cuisine or a dish' className='search-input'/>
          </div>        
        </div>
        <div className='profile-wrapper'>
          <img src='https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A' alt='profile-logo' className='header-profile-image'/>
          <span className='profile-username' > Gaurav </span>
          <i className='fi fi-rr-angle-small-down absolute-center profile-options-icon'/>
        </div>
      </div>
    </div>
    
  )
}

export default Header