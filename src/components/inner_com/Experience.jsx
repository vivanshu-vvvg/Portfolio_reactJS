import React, {useState}  from 'react';
import constant from "../../constant.json";
import './Experience.css';

const Experience = () => {
    const [currentIdx, setCurrentIndex]= useState(0);
  return (
    <section id="experience">
        <div className='container'>
            <div className='left'>
                {
                    constant.experiences.map((experience,idx) =>(
                        <div className={idx === currentIdx ? 'tab active_tab' : 'tab'}  onclick = {() => setCurrentIndex(idx) }>
                           {experience.company}
                        </div>
                     ))
                }
            </div>
            <div className='right'>
                {
                    <div>
                        <h1 className="title">
                        { constant.experiences[currentIdx].title }
                        <a href='constant.experiences[currentIdx].link' target="_blank">
                            @ {constant.experiences[currentIdx].company }
                        </a>
                        </h1>
                        <p>
                            {constant.experiences[currentIdx].duration}
                        </p>
                        {constant.experiences[currentIdx].desc.map((point) => (
                            <p className='desc'>
                                {point}
                            </p>  
                        ))}
                    </div>
                }
            </div>
        
        </div>
    </section>
  )
}

export default Experience;
