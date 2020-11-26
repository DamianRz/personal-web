import React, { useContext } from 'react';
import { Toolbar } from '../components/toolbar';
import { ThemeChooser } from '../components/theme-chooser';
import { LangChooser } from '../components/lang-chooser';
import { Banner } from '../components/main-page/banner/banner';
import { ThemeContext } from '../contexts/ThemeContext';
import { AboutUsCard } from '../components/main-page/about-us-card';
import { PAGE_INFO, RECOMMENDATIONS, SOCIALS, TECHNOLOGIES, WORKS } from '../data/main';
import { SocialsBox } from '../components/main-page/socials-box';
import { useTranslation } from "react-i18next";
import "../utils/i18n/i18n";
import { TechnologiesCard } from '../components/main-page/technologies-card';
import { WorkBox } from '../components/main-page/works-box';
import '../theme/page.scss';
import './index.scss';
import { RecommendationsBox } from '../components/main-page/recommendations-box';
import { Lines } from '../components/decorators/lines';
import { Point } from '../components/decorators/point';


const IndexPage = () => {

  const { t } = useTranslation();
  const { getTheme } = useContext(ThemeContext);

  return (
    <>
      <Toolbar title="TheRefactorMan" rightItems={[
        <LangChooser />,
        <ThemeChooser />
      ]} />
      <div className={`index-page page-${getTheme()}`}>
        <SocialsBox
          socials={SOCIALS}
          title={t('home.socials')}
        />

        <Banner />

        <AboutUsCard
          title={t('aboutme')}
          info={t('aboutme.text')}
          picture={PAGE_INFO.aboutme.img}
        />

        <TechnologiesCard
          title={t('tech.title')}
          technologys={TECHNOLOGIES}
          background="https://i.ibb.co/hWX7djM/xd.png"
        />

        {/* <WorkBox title={t('works.title')} works={WORKS} /> */}

        <RecommendationsBox
          title={t('recommendations.title')}
          items={RECOMMENDATIONS} />

      </div>
    </>
  )
};

export default IndexPage