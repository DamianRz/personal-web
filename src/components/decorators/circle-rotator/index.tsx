import React, { ReactElement } from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3, DiReact } from 'react-icons/di';
import { FaVuejs } from 'react-icons/fa';
import { Button } from '../../button';
import { Text } from '../../text';
import './circle-rotator.scss';

export const CircleRotator = (props: {
    items?: any[],
    size?: number,
    children?: ReactElement,
    className?: string,
}) => {
    return (
        <ul className={`circle-container ${props.className}`}>
            {props.items && props.items.map((item, i) => {
                return <li key={i}>{item}</li>
            })}
            {props.children && (
                <div className="content">
                    {props.children}
                </div>
            )}
        </ul>
    )
}