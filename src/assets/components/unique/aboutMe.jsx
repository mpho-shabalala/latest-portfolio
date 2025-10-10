import myImage from '../../images/my-img.png';
import ScrollSection from '../shared/scrollSection';
import { NavLink } from "react-router-dom";
import githubImg from '../../images/github.png';
import linkedinImg from '../../images/linkedin.png';
import mailImg from '../../images/mail.png';

export default function About(){

    return (
            <div  className='md:min-h-screen px-4 md:px-0 w-full flex flex-col-reverse md:flex-row '>
                <div className='w-full md:w-1/2 flex flex-col justify-center' id="about-me-text-div">
                    <h1 className='text-6xl font-extrabold mb-6'>ABOUT ME</h1>
                    <h2 className='text-3xl font-bold mb-3'>MPHO SHABALALA</h2>
                    <p className='leading-relaxed space-y-5 text-lg'>I'm a South Africa based web developer passionate about delivering web solution to Clients
                        at a reasonable time frame, I blend customer needs with my aptitude for coding to deliver seamless applications that understands and anticipate 
                        customer behaveour and needs per unique application.
                    </p>
                    <br/>
                    <p className='leading-relaxed space-y-5 text-lg'>
                        I don’t just build features — I design systems that last. I believe that every website a client wants is set to extend in the future,
                        hence I build with extention in mind and makes clear extention points in my software, making it easy for myself or another developer to work on in the future
                    </p>

                    <p className='leading-relaxed space-y-5 text-lg'>
                        Currently, I’m focused on extending my presence on the internet, to reach more clients who needs services within my capabilities, I am also refining my skills relentlesly making sure 
                        client's project stays upto date is my first priority.
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
            <div className=' w-full md:w-1/2 flex justify-center pt-20 md:pt-0  md:justify-end items-center' >
                <img  className='h-3/5 w-4/5 rounded-xl' src={myImage} alt="" />
            </div>
        </div>
    )
}