import myImage from '../../images/my-img.png';
import ScrollSection from '../shared/scrollSection';
import { NavLink } from "react-router-dom";
import githubImg from '../../images/github.png';
import linkedinImg from '../../images/linkedin.png';
import mailImg from '../../images/mail.png';

export default function About(){

    return (
            <ScrollSection>
            <div  className='about-me-section'>
                <div className='about-me-div' id="about-me-text-div">
                    <h1>ABOUT ME</h1>
                    <h2>MPHO SHABALALA</h2>
                    <p> I'm a system-oriented software developer with a deep curiosity for how things work — not just in code,
                        but in people, tools, and the world they shape together. My journey began with building interactive
                        projects in JavaScript and evolved into crafting scalable backend systems, designing intelligent frontend flows,
                        and thinking about architecture, complexity, and meaning.
                    </p>
                    <br/>
                    <p>
                        I don’t just build features — I design systems that last. I believe the best software mirrors clear thinking:
                        modular, understandable, and resilient. I approach each challenge with a balance
                        of logic and imagination.
                    </p>

                    <p>
                        Currently, I’m focused on refining my architecture skills, mastering React from first principles, 
                        and refining my code to adapt to the current standards is my hobbie.
                    </p>
                    <ul id='media-links'>
                                    
                        <li key='linkedin'>
                            <a href="https://www.linkedin.com/in/mpho-shabalala-88b126362/">
                                <img src={linkedinImg} alt="linkedin" />
                            </a>
                        </li>

                        <li id='github-link' key='github'>
                            <a href="https://www.github.com/mpho-shabalala/">
                                <img src={githubImg} alt="github" />
                            </a>
                        </li>

                        <li key='mail'>
                            <a href="mailto:mphog3401@gmail.com/">
                                <img src={mailImg} alt="mail" />
                            </a>
                        </li>
                    </ul>

            </div>
            <div className='about-me-div' id='about-me-img-div' >
                <img id='about-me-img-display' src={myImage} alt="" />
            </div>
            </div>
            </ScrollSection>
    )
}