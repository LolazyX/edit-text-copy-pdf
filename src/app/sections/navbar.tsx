import React from "react";
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub,} from '@fortawesome/free-brands-svg-icons'
import { faSun } from "@fortawesome/free-solid-svg-icons/faSun";


type Props = {};

export default function Navbar({}: Props) {
  return(
    <nav className='bg-black text-white shadow-lg mb-6'>
        <div className='grid grid-cols-2 md:justify-between max-w-full mx-auto p-4 md:px-10'>
            <div className='font-bold text-lg'>
              Lolazy
            </div> 
            <div className="flex justify-end">
              <div className="grid grid-cols-1 content-center gap-x-4">
                <Link href={'https://github.com/LolazyX'} target="_blank">
                  <FontAwesomeIcon className='content-center w-6 hover:scale-110 transition-all' icon={faGithub} />
                </Link>
              </div>
            </div>
        </div>
    </nav>
  );
}
