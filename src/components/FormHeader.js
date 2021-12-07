import React  from "react";  
import '../App.css'   
  


const Header = (p) => {
  
   

    return (
        <div className='header_header'>
            <div className='header-h1'>
                <h1>{`${p.date.month[p.date.today.getMonth()]} ${p.date.today.getFullYear()}`}</h1>
            </div>
            <div className='buttons'>
                <i className="fas fa-sign-in-alt"></i>
                <i className="fas fa-ellipsis-v"></i>
                <i className="fas fa-angle-left"></i>
                <i className="fas fa-angle-right"></i>
            </div>
        
        </div>
    )
};

export default Header ;