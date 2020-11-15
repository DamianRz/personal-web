import React from 'react';
import { Text } from '../text';
import { Divider } from '../divider/divider'
import './card.scss';

export const Card = (props: {
  title?: string;
  subtitle?: string;
  className?: string;
  background?: string;
  children?: any;
  dividerClassName?: string;
  id?: string;
  theme?: 'dark' | 'light';
}) => {

  const getContent = () => {
    return (
      <div
        id={props.id}
        className={`card ${props.className}`}
      >
        {
          props.title &&
          <Text type="title" className="card_title">{props.title}</Text>
        }
        {
          props.subtitle &&
          <Text type="subtitle" className="card_subtitle">{props.subtitle}</Text>
        }
        <div className="card_content">
          {props.children}
        </div>
      </div>
    )
  }

  return (
    <>
      {props.background &&
        <Divider className={`${props.dividerClassName}`} img={props.background}>{getContent()}</Divider>
        || <>{getContent()}</>}
    </>
  )
}
