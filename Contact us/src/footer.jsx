import React from 'react';
import './footer.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
    <div className='footer'>
      <div className='icons'>
        <FacebookIcon className='fa'/> 
        <InstagramIcon className='fa'/>   
        <TwitterIcon className='fa'/>
        <WhatsAppIcon className='fa'/>
        <YouTubeIcon className='fa'/>
        <TwitterIcon className='fa'/>
      </div>
      <p>© Start, 2022. All rights reserved.</p>
    </div>
  )
}

export default Footer
