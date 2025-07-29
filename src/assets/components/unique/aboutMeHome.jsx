import myImage from '../../images/my-img.png';
import ScrollSection from '../shared/scrollSection';
import Counter from '../shared/counter';
import githubImg from '../../images/github.png';
import linkedinImg from '../../images/linkedin.png';
import mailImg from '../../images/mail.png';
import SecondaryBTN from '../shared/secondaryBtn';

export default function About(){

    return (
            <div  className='about-me-section'>
                <div className='about-me-div' id="about-me-text-div">
                    <h1>ABOUT ME</h1>
                    <p>Hi, I'm Mpho  —  A full-stack web developer passionate about building scalable web applications,
                    from input agnostic, secure backend APIs to modern responsive frontend UIs. </p>
                    
                    <ul id='about-me-stats'>
  <li>
    <h2>
      <Counter end={4} duration={2000} />
    </h2>
    <p>Years of Experience</p>
  </li>

  <li>
    <h2>
      <Counter end={15} duration={2000} />
    </h2>
    <p>Completed Projects</p>
  </li>

  <li>
    <h2>
      <Counter end={1} duration={2000} />
    </h2>
    <p>Clients Worldwide</p>
  </li>
</ul>



                    <ul id="contacts">
                        <li>
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

                    <SecondaryBTN>
                      MY STORY
                    </SecondaryBTN>

            </div>
            <div className='about-me-div' id='about-me-img-div' >
                <img id='about-me-img-display' src={myImage} alt="" />
            </div>
            </div>
    )
}