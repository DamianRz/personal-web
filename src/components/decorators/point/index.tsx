import React from 'react';
import './point.scss';

export const Point = (props: {
    symbol: string,
    x: string,
    y: string,
    effect: 'appear' | 'rotate' | 'none'
}) => {

    return (
        <div
            style={{
                left: `${props.x}`,
                top: `${props.y}`
            }}
            className={`point-box`}>
            <p className={`${props.effect}`}>{props.symbol}</p>
        </div>
    )
}