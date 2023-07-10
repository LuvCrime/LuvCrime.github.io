import styled from 'styled-components'
import { SkypeSVG, WhatsAppSVG } from './icons';
import { useTranslation } from "react-i18next"
import { LanguageSelector } from './language-selector';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../../../App';

interface Theme {
    title?: string;
    bg?: string;
}

const TopHeaderBlock = styled.div<{ $theme?: Theme }>`
    height: 48px;
    background-color:  ${props => props.theme?.bg};
    display: flex;
    align-items: center;
    justify-content: end;
`

const ContactInfo = styled.div<{ $width?: string, $theme?: Theme }>`
    display: flex;
    padding-right: 25px;
    width: ${props => props.$width || "auto"};
    color: ${props => props.theme?.title};
`

const Theme = styled.div<{ $width?: string, $theme?: Theme }>`
caret-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 25px;
    position: relative;
    height: 100%;
    color: ${props => props.theme?.title};
`

const ToggleSwitch = styled.div`
caret-color: transparent;
    position: relative;
    width: 100px;
    height: 50px;
    // transform: scale(0.5);
`;

const Label = styled.label`
caret-color: transparent;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: #28292c;
    border-radius: 50px;
    cursor: pointer;

`;

const Slider = styled.span`
caret-color: transparent;
    position: absolute;
    width: 100%;
    height: 50px;
    background-color: #28292c;
    border-radius: 50px;
    cursor: pointer;


    &::before {
        content: "";
        position: absolute;
        top: 6.5px;
        left: 8px;
        width: 37.5px;
        height: 37.5px;
        border-radius: 50%;
        box-shadow: inset 14px -2px 0px 0px #d8dbe0;
        background-color: #28292c;
        transition: 0.3s;
    }
`;

const Input = styled.input`
    position: absolute;
    width: 100%;
    height: 50px;
    background-color: #28292c;
    border-radius: 50px;
    cursor: pointer;

    opacity: 0;

    caret-color: transparent;
    
    // transform: scale(0.5);

    &:checked ~ ${Slider} {
        background-color: #d8dbe0;
    }

    &:checked ~ ${Slider}::before {
        transform: translateX(47.5px);
        background-color: #28292c;
        box-shadow: none;
    }
`;


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
            <Theme>
            {t('theme')}
                <ToggleSwitch>
                    <Label>
                        <Input type='checkbox' onChange={toggleTheme} checked={theme === 'light'} />
                        <Slider className='slider'></Slider>
                    </Label>
                </ToggleSwitch>
            </Theme>
            {/* <ContactInfo><input type="checkbox"  onChange={toggleTheme} checked={theme === 'dark'}></input></ContactInfo> */}
            <ContactInfo $width="133px">{t('request-call')}</ContactInfo>
        </TopHeaderBlock>
    )
}