import React, { useState } from 'react'
import { PresentationComponent } from '../presenationComponent/PresentationComponent';
import './InputComponent.css'

interface myObj {
    text: string,
    name: string
}

export function InputComponent(props: any) {

    const [text, setText] = useState('');
    const [count, setCount] = useState(0);

    const [obj, setObj] = useState({text: '', name: ''})

    setObj({
        ...obj,
        text: "hello"
    })

    const arr = useState(0)
    const count1 = arr[0]
    const setCount1 = arr[1]

    let incrementCount = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <input type="text" value={text} onChange={(event) => {setText(event.target.value)}}></input>
            <p className="red-text">{count}</p>
            <PresentationComponent text={text} incrementCount={incrementCount}/>
        </div>
        
    )
}