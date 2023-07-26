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
`