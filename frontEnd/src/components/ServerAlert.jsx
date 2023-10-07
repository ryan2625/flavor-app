import React, { useEffect, useState } from 'react'
import "../styles/serverAlert.css"
import CloseIcon from '@mui/icons-material/Close';

/**
 * 
 * This component serves as a warning regarding hosting issues with *  Render.com. This component is rendered in the home page.
 * 
**/

export const ServerAlert = () => {

    /*This state is used to determine wheter to show the server warning or not. If the user has visited the site before and has clicked the red X, indicating they have read the warning, then they won't be shown the message again. */

    const [closed, setClose] = useState(localStorage.getItem('closed') || false)

    function closeMenu() {
        setClose(true);
        localStorage.setItem('closed', JSON.stringify(true));
    }

  return (
    <div className={ closed ? 'closeMenu' : 'warning'}>
        <CloseIcon onClick={closeMenu} className='closeIcon' />
        <h1>
            Attention
        </h1>
        <p>
            This site is hosted on Render.com. It uses the free tier, so the server may take a few seconds
            to wake up. If the dropdown menu on flavors only shows one category, please wait a few seconds and refresh the page.
            Thank you!
        </p>
    </div>
  )
}

