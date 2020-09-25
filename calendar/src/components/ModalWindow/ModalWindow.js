import React from 'react'; 
import './ModalWindow.scss';
import { ReactComponent as Close } from './close.svg';


const ModalWindow = ({ value, close }) => {
   
    return (
        
      <div className='modal-window'>
        <div className="close">
         <Close onClick={() => close()} style={{margin: "8px"}} height ="12px" width="12px"/>
        </div>
        <form className="modal-form">
          <div className="form-group">
           <label htmlFor="monthInput">Month</label>
           <input type="text" className="form-control" id="monthInput" placeholder={value ? value.format('MMMM') : null }/>
          </div>
   
          <div className="form-group">
           <label htmlFor="dateInput">Day</label>
           <input type="text" className="form-control" id="dateInput" placeholder={value ? value.format('Do dddd') : null }/>
          </div>
  
        </form>
        
      </div>
        
    )

}
export default ModalWindow;