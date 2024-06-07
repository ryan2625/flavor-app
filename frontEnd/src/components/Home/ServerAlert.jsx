import React, { useEffect, useState } from 'react'
import "../../styles/serverAlert.css"
import CloseIcon from '@mui/icons-material/Close';

/**
 *  EDIT: Server hosting provider changed, so this message is no longer displayed on the home page.
 *  Originally we used onRender.com to host the site, but now we use cyclic.sh which does not need
 *  time to 'wake up' the site.
 * 
 *  This component serves as a warning regarding hosting issues with *  Cyclic.sh. This component is rendered in the home page.
 *  @param {boolean} closed - This is the state that determines  
 *  whether or not the warning should be shown.
 *  @param {function} setCloseState - This is the function that sets * the closed state to true.
 * 
**/

export const ServerAlert = ({closed, setCloseState}) => {

    /*This state is used to determine wheter to show the server warning or not. If the user has visited the site before and has clicked the red X, indicating they have read the warning, then they won't be shown the message again. */

    function closeMenu() {
        setCloseState()
        localStorage.setItem('closed', JSON.stringify(true));
    }

  return (
    <div className={ closed ? 'closeMenu' : 'warning'}>
        <CloseIcon onClick={closeMenu} className='closeIcon' />
        <h1>
            Attention
        </h1>
        <p>
            This site is hosted on cyclic.sh. Due to the nature of the service, performance issues may arise. Here is  <a href='https://www.cyclic.sh/pricing/' id="renderLink">cyclic's documentation</a> which can provide more information.
            Thank you! 2024 Update: Now hosted on Render.com.
        </p>
    </div>
  )
}

