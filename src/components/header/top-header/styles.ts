import styled from 'styled-components'
import { Theme } from 'theme'

import { Button as MUIButton} from '@mui/material';

export const Span = styled.span`
    padding-right: 7px;
    cursor: default;
`

export const LanguageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const TopHeaderContainer = styled.div<{ theme?: Theme }>`
    height: 48px;
    background-color:  ${props => props.theme?.bg1};
    display: flex;
    align-items: center;
    justify-content: end;
    padding: 12px 80px;
    > div:not(:last-child) {
        padding-right: 24px;
    }
`

export const IconPadding = styled.div`
    padding-right: 5px
`

export const ContactInfoContainer = styled.div<{ theme?: Theme }>`
    display: flex;
    box-sizing: border-box;
    color: ${props => props.theme?.text};
    caret-color: transparent;
`

export const ThemeContainer = styled.div<{ theme?: Theme }>`
    caret-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    position: relative;
    height: 100%;
    color: ${props => props.theme?.text};
`

export const ToggleSwitch = styled.div`
    position: relative;
    width: 50px;
    height: 25px;
`;

export const Label = styled.label`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 25px;
    background-color: #28292c;
    border-radius: 50px;
    cursor: pointer;

`;

export const Slider = styled.span`
    position: absolute;
    width: 100%;
    height: 25px;
    background-color: #28292c;
    border-radius: 50px;
    cursor: pointer;


    &::before {
        content: "";
        position: absolute;
        top: 3.25px;
        left: 4px;
        width: 18.75px;
        height: 18.75px;
        border-radius: 50%;
        box-shadow: inset 7px 0px 0px 0px #d8dbe0;
        background-color: #28292c;
        transition: 0.3s;
    }
`;

export const Input = styled.input`
    position: absolute;
    width: 100%;
    height: 25px;
    background-color: #28292c;
    border-radius: 50px;
    cursor: pointer;
    opacity: 0;
    caret-color: transparent;
    
    &:checked ~ ${Slider} {
        background-color: #d8dbe0;
    }

    &:checked ~ ${Slider}::before {
        transform: translateX(23.75px);
        background-color: #28292c;
        box-shadow: none;
    }
`;

//language-selecor

export const SelectContainer = styled.div<{ theme?: Theme }>`
    background-color:  ${props => props.theme?.bg1};
    color: ${props => props.theme?.text};
    position: relative;
    cursor: pointer;
    caret-color: transparent;
`

export const SelectButton = styled.button<{ theme?: Theme }>`
    background-color:  ${props => props.theme?.bg1};
    color: ${props => props.theme?.text};
    border: none;
    cursor: pointer;
    font-family: Montserrat;
    font-size: 16px;
`

export const OptionsList = styled.ul<{ theme?: Theme }>`
    background-color:  ${props => props.theme?.bg1};
    color: ${props => props.theme?.text};
    border-radius: 8px;
    position: absolute;
    top: 36px;
    left: -9px;
    z-index: 1;
    padding: 0;
    margin: 0;
    list-style: none;
`

export const OptionItem = styled.li`
    padding: 0.5em 1em;
    cursor: pointer;
`

export const Button = styled(MUIButton)`
    color: #FF4D4D;
    font-family: Montserrat !important;
    font-size: 16px !important;
    font-style: normal;
    font-weight: 800 !important;
    line-height: normal;
    box-sizing: border-box;
    margin-right: -10px !important;
`