import React from 'react';

const Row = ({ left, right }) => {
    return (
        <div className='row mb2' style={{marginTop:"20px"}}>
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