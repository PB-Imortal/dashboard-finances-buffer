import React, { useState } from 'react'
import LogoIcon from '../../assets/BlackLogo.svg';



interface SideBarProps {
    //Se for necessário
}

const SideBar: React.FC<SideBarProps> = (Props) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            {/* Button to change the visibility */}
            <button
                className={`fixed top-0 left-0 p-4 m-4 text-white rounded flex flex-col justify-center items-center gap-1 ${isOpen ? 'z-20' : 'z-60'}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="block w-5 h-0.5 bg-black"></span>
                <span className="block w-5 h-0.5 bg-black"></span>
                <span className="block w-5 h-0.5 bg-black"></span>
            </button>

            {/* Drawer */}
            <div
                className={`fixed top-0 left-0 z-40 w-64 h-full bg-white shadow-md transform ease-in-out duration-300 rounded-[16px] h-[98vh] p-5 mt-2 ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >

        <ul>


         <li>

            <div className='flex justify-center p-2'>
                <img src={LogoIcon}  />
            </div>

        </li>

        <li className='p-4'>

            <div className="border-t border-#DFDFE0"></div>

                {/* Close button */}

                <button
                    className="absolute top-0 right-0 mt-4 mr-4 text-black" 
                    onClick={() => setIsOpen(false)}
                >
                 &#x2715; 
                </button>

        </li>
            
        
        </ul>

                {/* Drawer Content */}
        <ul className='p-4'>

            
              
          
               
        </ul>           
            
            </div>
        </div>
    )
}

export default SideBar