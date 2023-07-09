import styled from 'styled-components'
import { SkypeSVG, WhatsAppSVG } from './icons';
import { useTranslation } from "react-i18next"
import { LanguageSelector } from './language-selector';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { useState, useEffect , useContext} from 'react';
import { ThemeContext } from '../../../App';

const TopHeaderBlock = styled.div`
    height: 48px;
    background-color:  ${props => props.theme.bg};
    display: flex;
    align-items: center;
    justify-content: end;
`

const ContactInfo = styled.div<{ $width?: string }>`
    display: flex;
    padding-right: 25px;
    width: ${props => props.$width || "auto"};
    color: ${props => props.theme.title};
`

export const TopHeader = () => {
    const { t } = useTranslation();
    const { theme, toggleTheme } = useContext(ThemeContext);
    console.log(theme)


    return (
        <TopHeaderBlock>
            <ContactInfo>mail@izitech.ru</ContactInfo>
            <ContactInfo>+2 (322) 22-22-22</ContactInfo>
            <ContactInfo><SkypeSVG /> <WhatsAppSVG /></ContactInfo>

            <ContactInfo><LanguageSelector /></ContactInfo>
            <ContactInfo><input type="checkbox"  onChange={toggleTheme} checked={theme === 'dark'}></input></ContactInfo>

            <ContactInfo $width="133px">{t('request-call')}</ContactInfo>
        </TopHeaderBlock>
    )
}