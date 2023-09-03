'use client'

import React, { useState } from "react";
import { textFormat } from "../utils/utilityFunction";

type Props = {};

export default function Form({}: Props) {

    const [formGetText, isFormGetText] = useState(true)
    const [formLoding, isFormLoding] = useState(false)
    const [formResult, isFormResult] = useState(false)

    const [text, setText] = useState('')
    const [result, setResult] = useState('')

    const [copy, setCopy] = useState('คัดลอก')

    const clearText = () => {
        if (text == '') return
        setText('') 
    }

    const processText = async () => {
        if (text == '') return
        isFormGetText(false)
        isFormLoding(true)

        //Start Process
        await fetch(String(process.env.API_FIX_TEXT_PDF),{
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ text: text })
        }).then((res) => res.json())
        .then((data) => setResult(data['result']))
        .catch((error) => console.error(error));
        //End Process

        isFormLoding(false)
        isFormResult(true)
    }

    const newText = () => {
        isFormResult(false)
        isFormGetText(true)
        setText('')
        setResult('')
        setCopy('คัดลอก')
    }

    const copyText = () => {
        navigator.clipboard.writeText(result)
        setCopy('คัดลอกแล้ว!')
    }

    return(
        <div>
            {formGetText && 
                <form className="grid content-start">
                    <div className="grid grid-cols-2 text-center md:flex md:justify-between bg-black text-white rounded-t-lg">
                        <button type="button" onClick={e => {clearText()}} className="py-4 px-0 md:px-8 hover:bg-gray-700 rounded-tl-lg">
                            ล้างอักษร
                        </button>
                        <button type="button" onClick={e => {processText()}} className="py-4 px-0 md:px-8 hover:bg-gray-700 rounded-tr-lg">
                            จัดเรียงอักษรใหม่
                        </button>
                    </div>
                    <textarea name="text" id="text" value={text} rows={15} maxLength={5000} placeholder="คัดลอกตัวอักษรมาวางลงที่นี" onChange={e => { setText(e.target.value)}} className="bg-gray-200 p-4 border-x-2 border-black resize-none mx-auto w-full outline-none"></textarea>
                </form>
            }
            {formLoding && 
                <form className="grid content-start">
                    <div className="flex justify-center py-4 md:justify-end md:px-8 bg-black text-white rounded-t-lg">
                        กำลังประมวลผล...
                    </div>
                    <textarea disabled name="text" id="text" value={text} rows={15} className="bg-gray-200  p-4 border-x-2 border-black resize-none mx-auto w-full outline-none"></textarea>
                </form>
            }
            {formResult &&
                 <form className="grid content-start">
                    <div className="grid grid-cols-2 text-center md:flex md:justify-between bg-black text-white rounded-t-lg">
                        <button type="button" onClick={e => {newText()}} className="py-4 px-0 md:px-8 hover:bg-gray-700 rounded-tl-lg">
                            เริ่มต้นใหม่
                        </button>
                        <button type="button" onClick={(e) => {copyText()}} className="py-4 px-0 md:px-8 hover:bg-gray-700 rounded-tr-lg">
                            {copy}
                        </button>
                    </div>
                    <textarea disabled name="text" id="text" value={result} rows={15} className="bg-gray-200 p-4 border-x-2 border-black resize-none mx-auto w-full outline-none"></textarea>
                </form>
            }
            <div className="grid text-center md:text-right bg-black text-white rounded-b-lg shadow-lg py-1 px-4">
                {text.length} / 5000
            </div>
        </div>
  );
}
