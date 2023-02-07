import React from 'react'
import Heading from '../heading/Heading';
// import About from "./About.css";
import './About.css';
const About = () => {
  return (
    <section id='about'>
        <Heading index="01" heading='About Me'/>
        <div className='container'>
            <div className='left'>
             <p className='desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
             <p>
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
             </p>
            </div>
            <div className='right'>
                <img src='"C:\Users\91941\OneDrive\Desktop\profile photo.png"' alt='profile_img' className='profile_img'/>
                <div className='img_border'/>
            </div>
        </div>
    </section>
  )
}

export default About;
