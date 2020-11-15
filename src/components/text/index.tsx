import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import './text.scss';

export const Text = (props: {
    type: 'big' | 'title' | 'subtitle' | 'text' | 'small',
    color?: 'primary' | 'secondary',
    children: string
    className?: string
    autoSize?: boolean,
    effect?: 'glitch' | 'typewriter'
}) => {
    const {
        // @ts-ignore
        getTheme,
    } = useContext(ThemeContext);

    return (
        <>
            <p className={`dmz-text ${props.color} ${props.effect} theme-${props.type} ${getTheme()} ${props.className}`}>
                {props.children}
            </p>
            {/* {props.effect && (
                <div className={`dmz-text ${props.effect}`} data-text={props.children}>{props.children}</div>
            ) || (
                   
                )} */}
        </>
    )
}