import { styled } from "styled-components"
import { Theme } from 'theme'

export const AboutContainer = styled.div<{ theme?: Theme }>`
    background-color:  ${props => props.theme?.bg1};
    padding: 109px 145px 85px 175px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
`

export const LogoContainer = styled.div<{ theme?: Theme }>`
    display: flex;
    position: relative;
`

export const Rectangle = styled.div<{ theme?: Theme }>`
    background-color:  ${props => props.theme?.bg2};
    width: 319.612px;
    height: 319.612px;
    transform: rotate(45deg);
    position: absolute;
`

export const TextContainer = styled.div<{ theme?: Theme }>``

export const Title = styled.h2<{ theme?: Theme }>`
    color: ${props => props.theme?.text};
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    max-width: 420px;
    margin: 0 0 69px 0;
`

export const Ul = styled.ul<{ theme?: Theme }>`
    list-style-type: none;  
    padding: 0;
`


export const Li = styled.li<{ theme?: Theme }>`
    color: ${props => props.theme?.text};
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 16px;
`

export const LiPlus = styled.li<{ theme?: Theme }>`
    color: ${props => props.theme?.text};
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

export const AdditionallyContainer = styled.div`
    display: flex;
`

export const Plus = styled.div<{ theme?: Theme }>`
    color: ${props => props.theme?.text};
    display: flex;
    padding-right: 5px;
`

export const LogoItem = styled.div`
    z-index: 1;
`