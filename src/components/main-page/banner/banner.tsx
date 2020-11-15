import React, { useContext } from 'react';
import { ThemeContext } from '../../../contexts/ThemeContext';
import { Card } from '../../card';
import { ContainerPage } from '../../test/container-page/container-page';
import { Text } from '../../text';
import { THEME_DARK } from '../../../types/Themes.type';
import { useTranslation } from "react-i18next";
import "../../../utils/i18n/i18n";
import { Button } from '../../button';
import { FaVuejs } from "react-icons/fa";
import { DiCss3, DiReact } from 'react-icons/di';
import { AiFillHtml5 } from 'react-icons/ai';
import './banner.scss';
import './banner-mobile.scss';



export const Banner = () => {

  const { t } = useTranslation();
  const { getTheme, } = useContext(ThemeContext);

  return (
    <Card
      title="DamianRz"
      className="card-banner"
      dividerClassName="divider-banner"
      subtitle="Frontend Developer"
      background="https://i.ibb.co/mJJjLXF/por-que-razon-descargaste-esta-imagen-en-tu-pc.png"
    >
      <div className="banner">
        <ContainerPage>

          {/* LEFT CONTENT */}
          <div className="left-content">
            <div className="pic">
              <img src="https://i.ibb.co/PMCVpPp/pic.png" alt="" />
              <div className="circle">

                <Button style="text" className="left" icon={<FaVuejs />} />
                <Button style="text" className="right" icon={<DiReact />} />
                <Button style="text" className="top" icon={<AiFillHtml5 />} />
                <Button style="text" className="bottom" icon={<DiCss3 />} />

              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="right-content">
            <Text type="big" color="primary" className="title">
              {`{`}
            </Text>
            <Text type="title" className="title">
              {t('home.motto').split('\n')[1]}
            </Text>
            <Text type="big" color="primary" className="title">
              {t('home.motto').split('\n')[2]}
            </Text>
            <Text type="title" className="title">
              {`${t('home.motto').split('\n')[3]} ${getTheme() === THEME_DARK ? t('night') + '🦇' : t('day') + '😎'}`}
            </Text>
            <Text type="big" color="primary" className="title">
              {`}`}
            </Text>
          </div>
        </ContainerPage>
      </div>
    </Card>
  )
}
