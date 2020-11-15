import { IconButton, Tooltip } from '@material-ui/core';
import React, { Dispatch, ReactElement, SetStateAction } from 'react';
import { Button } from '../../button';
import './vertical-toolbar.scss';

export interface IVerticalToolbarItem {
    icon: any,
    label: string,
    href?: string,
}

export const VerticalToolbar = (props: {
    items: IVerticalToolbarItem[],
    onSelectItem?: any
}) => {
    return (
        <div className="vertical-toolbar">
            {props.items.map((item, i) => {
                return (
                    <Tooltip title={item.label} placement="right" key={i}>
                        <div aria-label="aria-button">
                            <Button
                                icon={<item.icon />}
                                style="text"
                                onClick={() => {
                                    props.onSelectItem && props.onSelectItem(i)
                                }}
                                href={item.href}
                            />
                        </div>
                    </Tooltip>
                )
            })}
        </div>
    )
}
