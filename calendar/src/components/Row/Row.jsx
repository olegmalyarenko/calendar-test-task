import React from 'react';
import './Row.scss';

const Row = ({ left, right }) => {
    return (
        <div className='content-row'>
                    <div key={left.id} style={{width:"63%"}}> 
                     {left}
                    </div>

                    <div  key={right.id} style={{width:"37%"}}>
                      {right}
                    </div>   
            </div>
    )
}
export default Row;