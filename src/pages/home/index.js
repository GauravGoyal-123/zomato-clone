import React, { useState } from 'react'
import Footer from '../../components/commom/footer'
import Header from '../../components/commom/header'
import TabOptions from '../../components/commom/tabOptions'
import Delivery from '../../components/Delivery/delivery';
import DinningOut from '../../components/DinningOut';
import NightLife from '../../components/NightLife';
function HomePage() {

  const [activeTab, setActiveTab] = useState("Delivery");

  return(
    <div>
        <Header/>
        <TabOptions activeTab = {activeTab}  setActiveTab = {setActiveTab} />
        {getCuurentTab(activeTab)}
        <Footer/>
    </div>
  ) 

}

const getCuurentTab = (tab) => {
  switch(tab){
    case "Delivery":
      return <Delivery/>
    case "Dinning Out":
      return <DinningOut/>
    case "NightLife":
      return <NightLife/> 
    default :
      return <Delivery/>
  }
    
} 
export default HomePage