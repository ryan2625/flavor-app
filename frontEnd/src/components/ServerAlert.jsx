import React, { useEffect, useState } from 'react'
import "../styles/serverAlert.css"
import CloseIcon from '@mui/icons-material/Close';

export const ServerAlert = () => {

    const [closed, setClose] = useState(localStorage.getItem('closed') || false)

    function closeMenu() {
        setClose(true);
        localStorage.setItem('closed', JSON.stringify(true));
    }

    useEffect(() => {
        console.log(closed);
        }
    )

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

