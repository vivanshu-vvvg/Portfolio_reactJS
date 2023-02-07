import React from 'react'
import "./ContactBar.css"
// import GitHubIcon from "@mui/icons-material/GitHub";

const ContactBar = () => {
  return (
    <div className='contact_bar_wrapper'>
        <div className='contact_bar'>
            <a href='http//' target="_blank" className='contact_bar_icon'>Linkdin
            </a>
            <a href='http//' target="_blank" className='contact_bar_icon'>GitHubIcon
            </a>
            <a href='http//' target="_blank" className='contact_bar_icon'>Instagram
            </a>
            <a href='http//' target="_blank" className='contact_bar_icon'>Facebook
            </a>
            <div className='contact_bar_line'></div>
        </div>

        <div className='contact_bar'>
            <a href='mailto:vivanshugupta@gmail.com' className='contact_bar_email'>
                vivanshugupta@gmail.com
            </a>
            
        </div>
      
    </div>
  )
}

export default ContactBar
