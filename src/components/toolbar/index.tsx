import { Button } from '../button';
import React from 'react';
import './toolbar.scss';
import './toolbar-mobile.scss';
import { Text } from '../text';


export interface IToolbarItem {
  icon?: any,
  label: string,
  href?: string
}


export const Toolbar = (props: {
  title?: string,
  items?: IToolbarItem[]
  rightItems?: any[],
  showLeftMenu?: boolean
}) => {
  return (
    <div className={`toolbar`}>
      <div className="left-box">
        {/* {props.showLeftMenu && <LeftMenu />} */}
        {props.title && <Text type="text" color="primary" className="title">{props.title}</Text>}

        {/* <a href="#banner">
          <img
            className="logo-img effect-opacity"
            src="https://i.ibb.co/hfX81DT/art-experience-500.png"
            alt=""
          />
        </a> */}

        {props.items && props.items.map((button, i) => {
          return (
            <Button
              style="text"
              key={i}
              href={button.href}
              className="toolbar-btn"
              label={`${button.label}`}
            />
          )
        })}
      </div>

      <div className="right-box">
        {props.rightItems && props.rightItems.map((item, i) => {
          return (
            <div key={i}>
              {item}
            </div>
          )
        })}
      </div>
    </div>
  );
};
