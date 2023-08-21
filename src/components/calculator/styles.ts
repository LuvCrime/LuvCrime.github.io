import styled from 'styled-components'
import { Theme } from 'theme'
import { Link as MUILink } from '@mui/material';

export const CalculatorContainer = styled.div<{ theme?: Theme }>`
    background-color:  ${props => props.theme?.bg1};
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

export const LinkStyled = styled(MUILink)<{ theme?: Theme }>`
    color: ${props => props.theme?.text} !important;
    font-family: Montserrat !important;
    font-size: 20px !important;
    font-style: normal;
    font-weight: 600 !important;
    line-height: normal;
    box-sizing: border-box;
`;

export const StyledCalculator = styled.div`
    display: flex;
    margin-top: 64px;
    margin-bottom: 16px;
`


export const DescriptionContainer = styled.div`
    display: flex;
    max-width: 784px;
    flex-direction: column;
`

export const Span = styled.span<{ theme?: Theme }>`
    color: ${props => props.theme?.text};    
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 133.333% */
    letter-spacing: -0.264px;
    margin-top: 16px;
`

export const Calc = styled.div`
    display: flex;
    max-width: 640px;
    flex-direction: column;
`

export const Ul = styled.ul`
    list-style-type: none;  
    padding: 0 !important;
    padding-inline-start: 0 !important;
    width: 100%;import { ButtonContainer } from '../button/styles';
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
    display: flex;
    justify-content: space-between;
`

export const LiTitle = styled.div`
    min-width: 300px;
`

export const MonthCount = styled.span`
    margin: 0 10px;
`

export const ToggleContainer = styled.span`
    min-width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
`