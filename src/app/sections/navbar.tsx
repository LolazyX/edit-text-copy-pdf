import React from "react";
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub } from '@fortawesome/free-brands-svg-icons'

type Props = {};

export default function Navbar({}: Props) {
  return(
    <nav className='bg-black text-white shadow-lg mb-6'>
        <div className='grid grid-cols-2 md:justify-between max-w-full mx-auto p-4'>
            <div  className='font-bold'>
              Lolazy
            </div> 
            <div className="flex justify-end">
              <Link href={'https://github.com/LolazyX'} target="_blank">
                <FontAwesomeIcon className='w-6 hover:scale-110 transition-all hover:text-primaryTitle' icon={faGithub} />
              </Link>
              
            </div>
        </div>
    </nav>
  );
}
