import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { what_I_do as items } from '../../../data/appItems';
import laptop from '../../images/laptop.jpg';
import tick from '../../images/tick.png';
import { div } from 'framer-motion/client';

export default function WhatIDo() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div id='' className="flex flex-col md:flex-row gap-8 px-4 py-10 md:min-h-screen items-center">
      <div className='what-i-do-div w-2/5 hidden md:block'>
        <img src={laptop} alt="Laptop showing work" className="w-full h-auto rounded-xl" />
      </div>

      <div  className="flex-1  w-full md:w-3/5">
        <div className="mb-6">
          <h2 className=" mb-2 text-4xl font-bold">WHAT I CAN DO FOR YOU</h2>
          <p className="text-sm text-gray-700">
            I design and build robust systems from backend to frontend — ensuring secure APIs,
            scalable databases, and user-focused UIs. Everything I build is structured for adaptability,
            real-world integration, and long-term maintainability.
          </p>
        </div>

        {items.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={index} className="what-i-do-item mb-2">
             <button
               className={`w-full flex justify-between items-center py-3 text-left font-medium transition 
                        ${isOpen ? 'text-brand-purple' : 'text-gray-800 border-b border-gray-300'} 
                         hover:text-black`}
                    onClick={() => toggle(index)}
>
                {index + 1}. {item.title}
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="ml-2 h-5 w-5" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { height: 'auto', opacity: 1 },
                      collapsed: { height: 0, opacity: 0 },
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden border-b border-brand-purple"
                    onClick={() => toggle(index)} // Optional: closes on content click
                  >
                    
                    <div className="py-2">
                      <ul className=" pl-6 text-sm text-gray-700">
                        {item.content.map((cont, subIndex) => (
                          <div className='flex my-3'>
                             <img className='h-5' src={tick} alt="" />
                              <li className='pl-2' key={subIndex}>
                            {cont}</li>
                          </div>
                         
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
