import githubImg from '../../images/github-sign.png';
import linkedinImg from '../../images/linkedin-logo.png';
import mailImg from '../../images/apple.png';
import Container from "./container";
export default function Footer() {
  return (
    <footer className="bg-brand-purple text-white">
      <Container>
        <div className="pb-4">
          <ul className="flex flex-col md:flex-row items-center md:justify-between  border-b border-white py-8" >
                        <li className='flex flex-row md:flex-col'>
                            <p className='mr-4'>
                                Call Today :
                            </p>
                            <a href="tel:+27739127333">+ (27) 73 912 7333</a>
                        </li>

                          <li className='flex my-4 md:my-0 flex-row md:flex-col'>
                            <p className='mr-4'>
                                Email :
                            </p>
                            <a href="mailto:mphog3401@gmail.com">mphog3401@gmail.com</a>
                        </li>

                         <li className='flex  flex-row md:flex-col items-center '>
                            <p className='mr-4'>
                                Social :
                            </p>
                            <ul id='media-links'>
                                                                
                              <li key='linkedin'>
                                  <a href="https://www.linkedin.com/in/mpho-shabalala-88b126362/">
                                      <img src={linkedinImg} alt="linkedin" />
                                  </a>
                              </li>
                            
                              <li  id='github-link' key='github'>
                                <a  href="https://www.github.com/mpho-shabalala/">
                                  <img className='h-6 w-6'  src={githubImg} alt="github" />
                                </a>
                              </li>
                            
                              <li key='mail'>
                                <a href="mailto:mphog3401@gmail.com/">
                                  <img className='h-6 w-6' src={mailImg} alt="mail" />
                                </a>
                              </li>
                            </ul>
                        </li>
                    </ul>
          <div className="mb-4 md:mb-0 text-center md:text-left w-full md:w-auto">
            &copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.
          </div>

        
          <nav className="hidden md:flex space-x-8 text-gray-600 dark:text-gray-400 w-full md:w-auto justify-center">
      
          </nav>

        
          <div className="flex space-x-6 mt-6 md:mt-0 w-full md:w-auto justify-center md:justify-end">
        
          </div>
      </div>
      </Container>
      
    </footer>
  );
}
