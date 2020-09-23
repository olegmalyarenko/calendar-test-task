import React from 'react';
import './Row.scss';

const Row = ({ left, right }) => {
    return (
        <div className='content-row'>
                    <div style={{width:"63%"}}> 
                     {left}
                    </div>

                    <div style={{width:"37%"}}>
                      {right}
                    </div>   
            </div>
    )
}
export default Row;