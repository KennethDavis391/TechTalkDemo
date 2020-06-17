import React, { useEffect } from 'react'

interface IPresentationComponentProps {
    text: string
}

export function PresentationComponent(props: any) {

    return (
        <div>
            <p>
            {props.text}
            </p>
            <button onClick={props.incrementCount}>Click Me!</button>
        </div>
        
    )
}