import myImage from '../../images/my-img.png';
import Counter from '../shared/counter';
import githubImg from '../../images/github.png';
import linkedinImg from '../../images/linkedin.png';
import mailImg from '../../images/mail.png';
import SecondaryBTN from '../shared/secondaryBtn';

export default function About(){

    return (
      <div  className='md:h-screen w-full flex py-16 md:py-0 px-4 md:px-0 '>
        <div className='w-full md:w-1/2 flex flex-col justify-center' >
          <h1 className='text-6xl font-bold md:font-extrabold mb-6'>ABOUT ME</h1>
          <p className='leading-relaxed space-y-5 text-lg'>Hi, I'm Mpho  —  A full-stack web developer passionate about building scalable web applications,
            from input agnostic, secure backend APIs to modern responsive frontend UIs. 
          </p>
                    
          <ul id='about-me-stats' className='flex flex-col md:flex-row w-full justify-between my-8'>
            <li className='flex items-end  md:flex-col md:items-start my-4 md:my-0'>
              <h2 className='  text-brand-purple font-bold text-6xl'>
                <Counter end={4} duration={2000} />
              </h2>
               <p className='ml-2 md:ml-0'>Years of Experience</p>
            </li>

           <li className='flex items-end  md:flex-col md:items-start my-4 md:my-0'>
              <h2 className=' text-brand-purple font-bold text-6xl'>
                <Counter end={15} duration={2000} />
              </h2>
              <p className='ml-2 md:ml-0'>Completed Projects</p>
            </li>

            <li className='flex items-end  md:flex-col md:items-start my-4 md:my-0'>
             <h2 className=' text-brand-purple font-bold text-6xl'>
                <Counter end={1} duration={2000} />
              </h2>
              <p className='ml-2 md:ml-0'>Clients Worldwide</p>
            </li>
          </ul>



          <ul id="contacts" className='flex  flex-col md:flex-row mb-6'>
            <li className='mb-4 md:mb-0'>
              <p>
                Call Today :
              </p>
              <a href="tel:+27739127333">+ (27) 73 912 7333</a>
            </li>

            <li>
              <p>
                Email :
              </p>
              <a href="mailto:mphog3401@gmail.com">mphog3401@gmail.com</a>
            </li>
          </ul>
                    
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

          <SecondaryBTN href="#" text="MY STORY"/>

        </div>
          <div className=' w-1/2 md:flex-row justify-end items-center hidden md:flex' >
            <img className='h-3/5 w-4/5 rounded-xl' src={myImage} alt="" />
          </div>
        </div>
    )
}