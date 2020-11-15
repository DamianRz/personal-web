import React from 'react';
import { IVerticalToolbarItem, VerticalToolbar } from '../../dashboard/vertical-toolbar';
import { Text } from '../../text';
import './socials-box.scss';
import './socials-box-mobile.scss';

export const SocialsBox = (props: {
    socials: IVerticalToolbarItem[],
    title?: string
}) => {
    return (
        <div className="socials-box">
            {props.title && (
                <div className="social-text">
                    <Text type="small" color="secondary">{props.title}</Text>
                </div>
            )}
            <VerticalToolbar items={props.socials} />
        </div>
    )
}