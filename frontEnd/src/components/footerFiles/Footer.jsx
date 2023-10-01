import React, { useEffect, useState } from 'react';
import './../../styles/footer.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import favicon from './favicon.png';

/**
 * Footer Component
 *
 * This component represents the footer that appears on every page. It dynamically displays the current year
 * and includes four icons that link to different URLs associated with the respective social media platforms.
 * 
 */

export const Footer = () => {
  const [yearString, setYearString] = useState(null);

    /*Verify and set current year*/
    
  useEffect(() => {
    setYearString(new Date().getFullYear().toString());
  }, );

  return (
    <div className="footer">
      <div className="leftFooter">
        <span>Copyright © {yearString}. All rights reserved.</span>
        <ul>
          <li>
            <a href="https://twitter.com/NationalLouisU">
              <TwitterIcon />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/NationalLouis?fref=ts">
              <FacebookIcon />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/nationallouisu/">
              <InstagramIcon />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/user/nlumarketing">
              <YouTubeIcon />
            </a>
          </li>
        </ul>
      </div>
      <div className="rightFooter">
        <img src={favicon} alt="" />
      </div>
    </div>
  );
};
