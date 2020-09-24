import React from 'react';
import './MainPage.scss';
import Banner from '../../components/Banner';
import Calendar from '../../components/Calendar';


const MainPage = () => {
  
    return (
        <div className='content-row'>
                    <div style={{width:"63%"}}> 
                    <Banner/>
                    </div>

                    <div style={{width:"37%"}}>
                    <Calendar/>
                    </div>   
            </div>
    )
}
export default MainPage;