import React from 'react'
import constant from "../../constant.json";
import './Work.css';

const Work = () => {
  return (
    <section>
        <div className='container'>
            {
                constant.projects.map((project,idx)=> (
                    // idx % 2 === 0 ? (
                        <div className='project'>
                            <div className='left'>
                                <a href = {project.Link} target="blank">
                                    <img src={project.image} alt="" classname='img'/>
                                </a>
                            </div>
                            <div className='right'>
                                <a href = {project.Link} target="blank">
                                    {project.title}
                                </a>    
                                <p className='desc'>{project.desc}</p>
                                <div className='skill_container'>
                                    {project.skills.map((skill)=>(
                                        <p>{skill}</p>
                                    ))}
                                </div>
                                <div>
                                    <a href={project["github"]} target="blank" className='link'>
                                        Github
                                    </a>
                                    <a href={project.link} target="blank" className='link'>
                                        Live
                                    </a>
                                </div>
                            </div>
                        </div>
                    ) 
                    // : ( 
                    //     <div></div>
                    // )
                )
            }
        </div>
    </section>
  )
}

export default Work;
