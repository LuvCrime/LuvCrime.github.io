import styled from 'styled-components'
import { Theme } from 'theme'

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

