import React from 'react';
import { Button } from '../../button';
import { Card } from '../../card';
import { CircleRotator } from '../../decorators/circle-rotator';
import { Text } from '../../text';
import './technologies-card.scss';

export interface ITechnonogyItem {
  icon: any,
  name: string,
  info: string,
}

export const TechnologyItem = (props: {
  key?: number,
  icon: any,
  name: string,
  info: string,
}) => {
  return (
    <div className={`technology-item`} key={props.key}>
      <br />
      <Button className="tech-button" icon={
        <props.icon />
      } style="text" />
      <Text className="technology-name" type="text">{props.name}</Text>
      <div className={`technology-info text text-light`}>
        {props.info.split('\n').map((line, i) => {
          return (
            <div key={i}>
              <Text type="text">{line}</Text>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export const TechnologiesCard = (props: {
  technologys: any[],
  title: string,
  subTitle?: string,
  background?: string,
}) => {

  const gettechnologys = () => {
    return props.technologys.map((technology, i) => (
      <div className="technology-item" key={i}>
        <TechnologyItem
          name={technology.name}
          info={technology.info}
          icon={technology.icon}
        />
      </div>
    ));
  };

  return (
    <Card
      title={props.title}
      subtitle={props.subTitle}
      background={props.background}
      className="technology-divider"
    >
      <div className="divider-content">
        <div className="technologies-card">{gettechnologys()}</div>
      </div>
    </Card>
  );
};
