import React, { ReactElement } from 'react';
import { Text } from '../../text';
import './circle-rotator.scss';

export const CircleRotator = (props: {
    things?: any[],
    size?: number,
    children?: ReactElement,
    className?: string,
}) => {
    return (
        <div
            className={`circle-rotator ${props.className}`}
            style={{ width: `${props.size}px`, height: `${props.size}px` }}
        >
            {
                props.things && props.things.map((item, i) => {
                    return typeof (item) === 'string' && (
                        <Text key={i} type="text" className={`orbital-thing-${i} effect-rotate`}>{item}</Text>
                    ) || item
                })
            }

        </div>
    )
}