'use client'

import React, { useState } from "react";

type Props = {};

export default function Form({}: Props) {

    const [formGetText, isFormGetText] = useState(true)
    const [formLoding, isFormLoding] = useState(false)
    const [formResult, isFormResult] = useState(false)

    const [text, setText] = useState('')

    const clearText = () => {
        setText('') 
    }

    return(
        <div>
            {formGetText && 
                <form className="grid content-start">
                    <div className="grid grid-cols-2 text-center md:flex md:justify-between bg-black text-white rounded-t-lg">
                            <button type="button" onClick={e => {clearText()}} className="py-4 px-0 md:px-8 hover:bg-gray-700 rounded-tl-lg">
                                ล้างอักษร
                            </button>
                            <button type="button" className="py-4 px-0 md:px-8 hover:bg-gray-700 rounded-tr-lg">
                                จัดเรียงอักษรใหม่
                            </button>
                        </div>
                    <textarea name="text" id="text" value={text} rows={10} onChange={e => { setText(e.target.value)}} className="bg-gray-200 rounded-b-lg p-4 border-2 border-black resize-none mx-auto w-full outline-none"></textarea>
                </form>
            }
                <form className="grid content-start">
                    <div className="flex justify-center py-4 bg-black text-white rounded-t-lg">
                                กำลังประมวลผล...
                        </div>
                    <textarea disabled name="text" id="text" value={text} rows={10} className="bg-gray-200 rounded-b-lg p-4 border-2 border-black resize-none mx-auto w-full outline-none"></textarea>
                </form>

                 <form className="grid content-start">
                    <div className="grid grid-cols-2 text-center md:flex md:justify-between bg-black text-white rounded-t-lg">
                            <button type="button" onClick={e => {clearText()}} className="py-4 px-0 md:px-8 hover:bg-gray-700 rounded-tl-lg">
                                เริ่มต้นใหม่
                            </button>
                            <button type="button" className="py-4 px-0 md:px-8 hover:bg-gray-700 rounded-tr-lg">
                                คัดลอก
                            </button>
                        </div>
                    <textarea name="text" id="text" value={text} rows={10} onChange={e => { setText(e.target.value)}} className="bg-gray-200 rounded-b-lg p-4 border-2 border-black resize-none mx-auto w-full outline-none"></textarea>
                </form>

        </div>
  );
}
