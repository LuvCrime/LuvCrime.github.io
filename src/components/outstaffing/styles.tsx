import styled from 'styled-components'
import { Theme } from 'theme'
import oustaffingImg from './img/oustaffing.png';

export const OutstaffingContainer = styled.div<{ theme?: Theme }>`
    background-color:  ${props => props.theme?.bg2};
    padding: 70px 80px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
`

export const Title = styled.h2<{ theme?: Theme }>`
    color: ${props => props.theme?.text};
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 0;
`

export const Subtitle = styled.div<{ theme?: Theme }>`
    color: ${props => props.theme?.text};
`

export const Img = styled.div`
    background-image: url(${oustaffingImg});
    width: 1120px;
    height: 290px;
    background-size: contain;
    background-position: center;
    margin-top: 64px;
    margin-bottom: 24px;
`

export const SwitchContainer = styled.div`
    display: flex;
`

export const  Ul = styled.ul<{ theme?: Theme }>`
    list-style-type: none;  
    padding: 0 !important;
    padding-inline-start: 0 !important;
`

export const Li = styled.li<{ theme?: Theme }>`
    color: ${props => props.theme?.text};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
`
