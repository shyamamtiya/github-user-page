import React, { Component } from 'react';
import './Popup.css'
export default  function Popup(props){
    const {filterToggle,filterItem}=props
    return(
    <div className={filterToggle ? 'popup' : 'none'}>
        {
            filterItem.map(itm=>{
                return (
                <div key={itm.id} className="list" onClick={() => props.handleClick(itm)}>
                    <span>{itm.title}</span>
                </div>)
            })
        }
    </div>)
}