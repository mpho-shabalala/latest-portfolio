import myImage from '../../images/my-img.png'

export default function Hero(){
    return (
        <main className="hero"  >
            <div className="hero-container">
                <div id="hero-container-top-left-div" className="hero-container-top-div">
                    <p className="hero-text-sm">MPHO SHABALALA</p>
                </div>
                 <div id="hero-container-bottom-left-div" className="hero-container-bottom-div">
                    <p className="hero-text-lg">WEB</p>
                </div>
            </div>
            <div id='middle-hero-container' className="hero-container">
               <div id='img-displayer-div'>
                 <img id='my-img-display' src={myImage} alt="" />
                 <p>Hi</p>
               </div>
            </div>
             <div className="hero-container">
                <div id="hero-container-top-left-div" className="hero-container-top-div">
                   
                </div>
                 <div id="hero-container-bottom-left-div" className="hero-container-bottom-div">
                    <p className="hero-text-lg">DEV.</p>
                     <p className="hero-text-xsm">I'm a SA-based full-stack web <br></br>developer</p>
                </div>
            </div>
        </main>
    )
}