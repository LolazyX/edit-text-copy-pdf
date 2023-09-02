import React from "react";

type Props = {};

export default function Navbar({}: Props) {
  return(
    <nav className='bg-white shadow-lg mb-6'>
        <div className='max-w-full mx-auto p-4'>
            <p className='font-bold'>Edit text Copy PDF</p>     
        </div>
    </nav>
  );
}
