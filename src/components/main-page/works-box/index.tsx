import React from 'react';
import { useTranslation } from 'react-i18next';
import "../../../utils/i18n/i18n";
import { Button } from '../../button';
import { Card } from '../../card';
import { Slider } from '../../slider';
import { ContainerPage, SubContainerImage } from '../../test/container-page/container-page';
import { Text } from '../../text';
import { AboutUsCard } from '../about-us-card';
import './works-box.scss';


export interface IWorkItem {
    img: string,
    title: string
    info: string,
    url: string
}

export const WorkBox = (props: {
    works: IWorkItem[],
    title: string
}) => {

    const { t } = useTranslation();

    const getSteps = () => {
        return props.works.map((work, i) => {
            return (
                <>
                    <AboutUsCard
                        title={work.title}
                        info={t(work.info)}
                        picture={work.img}
                    />
                    <Button label={t('work.go')} style="text" href={work.url} />

                </>
            )
        })
    }

    return (
        <Card
            title={props.title}
            className="work-card"
            background="https://instagram.fmvd4-1.fna.fbcdn.net/v/t51.2885-15/e35/88138743_226477241863080_2272424745682653122_n.jpg?_nc_ht=instagram.fmvd4-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=lN0HFm2EbsEAX9-X0Cd&tp=18&oh=287648fe87a402a06b8dd401f2b4b3f5&oe=5FDB4CD8"
        >
            <Text type="text">{t('work.subtitle')}</Text>
            <Slider arrows={true} auto={false} steps={getSteps()} />
        </Card>
    )
}