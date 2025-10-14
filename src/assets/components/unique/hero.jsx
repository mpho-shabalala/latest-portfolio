import myImage from '../../images/my-img.png'

export default function Hero(){
    return (
        <main className="flex flex-col px-8 pt-20 md:flex-row md:p-0 md:h-screen">
            <div className="w-full flex flex-col justify-center md:block md:w-1/3">
                <div className="md:h-2/5 flex flex-col justify-end">
                    <p className="font-medium text-2xl">MPHO SHABALALA</p>
                </div>
                 <div className="md:h-3/5">
                    <p className="font-bold text-6xl md:font-extrabold md:text-9xl">WEB</p>
                </div>
            </div>
            <div className=" md:w-1/3 flex flex-col justify-center -z-10">
               <div className='relative'>
                 <img className='rounded-xl  h-80 md:h-full md:w-full md:h-full' src={myImage} alt="" />
                 <p className='absolute -bottom-10 -left-10 bg-brand-purple  px-8 py-7 rounded-full text-3xl  text-white'>Hi</p>
               </div>
            </div>
             <div className="w-full md:w-1/3 items-end text-end">
                <div className="h-2/5 hidden md:block"></div>
                 <div  className="h-3/5">
                    <p className="font-bold text-6xl md:font-extrabold md:text-9xl">DEV.</p>
                     <p className="text-end">I'm a SA-based full-stack web <br></br>developer</p>
                </div>
            </div>
        </main>
    )
}