import React, { useContext, useEffect, useState } from 'react';
import { Button } from '../button';
import { LangContext } from '../../contexts/LangContext';
import { Tooltip } from '@material-ui/core';
import './lang-chooser.scss';
import { LANG_EN, LANG_ES } from '../../types/Lang.type';
import { MdLanguage } from 'react-icons/md';
import { CircleRotator } from '../decorators/circle-rotator';
import i18next from 'i18next';
import "../../utils/i18n/i18n";
import { useTranslation } from 'react-i18next';

export const LangChooser = () => {
    const {
        getLang,
        changeLang
    } = useContext(LangContext);

    const { t } = useTranslation();

    const [mode, setMode] = useState(getLang());

    useEffect(() => {
        i18next.changeLanguage(mode);
    }, [mode])

    const setLang = () => {
        if (mode == LANG_EN) {
            setMode(LANG_ES)
            changeLang(LANG_ES)
        } else {
            setMode(LANG_EN)
            changeLang(LANG_EN)
        }
    }

    return (
        <div className="lang-chooser">
            <Tooltip title={t('toolbar.lang')} placement="bottom">
                <div aria-label="aria-button">
                    <Button
                        label={mode}
                        style="text"
                        onClick={() => { setLang() }}
                        icon={<MdLanguage />}
                    />
                </div>
            </Tooltip>
        </div>
    )
}