import React, { useState } from 'react';
import './MainPage.scss';
import Banner from '../../components/Banner';
import Calendar from '../../components/Calendar';
import ModalWindow from '../../components/ModalWindow';


const MainPage = () => {
    const [ modal, setModal ] = useState(false);
    const [ modalValue , setModalValue ] = useState(null);
    const openModal = (day) => {
        setModal(true);
        setModalValue(day);
    }

    const closeModal = () => {
        setModal(false);
    }

    return (
        <div className='content-row'>
                    <div style={{width:"63%"}}> 
                    <Banner/>
                    </div>
                    <div style={{width:"37%"}}>
                    <Calendar 
                    modalValue= {modalValue}
                    modal={modal} 
                    open={openModal}
                    close={closeModal}/>
                    </div>   
            </div>
    )
}
export default MainPage;