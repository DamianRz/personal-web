import React, { useContext, useEffect, useState } from 'react';
import { useWindowSize } from '../../../hooks/useWindowSize';
import './point.scss';

export const Point = () => {


    const [symbols, setSymbols] = useState(['+', '.', '-', '='])
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    let window = useWindowSize().size;



    // const getPosition = () => {
    //     let x = Math.floor(Math.random() * windowSize.width) + 1;
    //     let y = Math.floor(Math.random() * windowSize.height) + 1
    //     return { x, y }
    // }

    return (
        <>
            {symbols.map((item, i) => {
                return <div
                    style={{
                        left: `${x}px`,
                        top: `${y}px`
                    }}
                    key={i}
                    className="point-box">
                    <p>{item}</p>
                </div>
            })}

            {/* <div
                className="point-box">
                <p>+</p>
            </div> */}
        </>
    )
}