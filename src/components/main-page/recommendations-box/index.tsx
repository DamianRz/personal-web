import React from 'react';
import { useTranslation } from 'react-i18next';
import "../../../utils/i18n/i18n";
import { Button } from '../../button';
import { Card } from '../../card';
// import { CircleRotator } from '../../decorators/circle-rotator';
import { Slider } from '../../slider';
import { ContainerPage, SubContainerImage } from '../../test/container-page/container-page';
import { Text } from '../../text';
import { AboutUsCard } from '../about-us-card';
import './recommendations-box.scss';


export interface IRecomendationItem {
    pic: string,
    name: string
    review: string,
    url: string
}

export const RecommendationsBox = (props: {
    items: IRecomendationItem[],
    title: string
}) => {

    const { t } = useTranslation();

    const getSteps = () => {
        return props.items.map((item, i) => {
            return (
                <div className="recommendation">
                    <div className="pic-box">
                        {/* <CircleRotator className="circle" size={110} /> */}
                        <img src={item.pic} className="pic" alt="" />
                    </div>


                    <Text type="text" color="primary" className="name">{item.name}</Text>
                    <Text type="text" className="review">{t(item.review)}</Text>
                    <Button
                        style="text"
                        color="primary"
                        label={t('reco.goto_linkedin')}
                        href={item.url}
                    />
                </div>
            )
        })
    }

    return (
        <Card
            title={props.title}
            className="recommendations-card"
        >
            <Slider arrows={false} steps={getSteps()} />
        </Card>
    )
}