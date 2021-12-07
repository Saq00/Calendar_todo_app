import React from "react";

const Header = (p) => {
    return (
        <div className='header-2'>
            <p>
                    {`${p.date.today.getDate()}.${p.date.today.getMonth()+ 1}`}
            </p>
            <p>
                 {`${p.date.week[p.date.today.getDay()]}`}
            </p>
             
        </div>
    )
}

export default Header;