import React from 'react'
import gif from './Gear.gif'


export default function Loader(props) {
    
        return(
            <>
            <div className="d-flex justify-content-center align-items-center" style={{ height: `${props.height}` }}>
            <img src={gif} alt=""/>
            </div>
            </>
        )
    }

