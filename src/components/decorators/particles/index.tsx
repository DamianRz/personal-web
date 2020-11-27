import React from 'react';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { Point } from '../point';

export const Particles = (props: {
    total: number,
    maxX?: number,
    maxY?: number,
}) => {
    const window = useWindowSize;

    const createSymbolsBack = () => {
        let points = [];
        const symbols = ['+', '*'];
        const effects = ["appear", "rotate"];
        for (let i = 0; i < props.total; i++) {
            points.push(
                <Point
                    symbol={`${symbols[Math.floor(Math.random() * 2) + 0]}`}
                    effect="appear"
                    x={`${Math.floor(Math.random() * (props.maxX || window().size.width)) + 1}px`}
                    y={`${Math.floor(Math.random() * (props.maxY || window().size.height)) + 1}px`}
                />)
        }
        return points;
    }

    return (
        <>
            {createSymbolsBack()}
        </>
    )
}