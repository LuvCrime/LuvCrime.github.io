import { styled } from "styled-components"
import { Theme } from 'theme'

export const ServicesContainer = styled.div<{ theme?: Theme }>`
  background-color:  ${(props) => props.theme?.bg2};
  padding: 70px 80px;
`;

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

export const Ul = styled.ul<{ theme?: Theme }>`
    list-style-type: none;  
    padding: 0;
    margin-top: 32px;
    > li:not(:last-child) {
        margin-bottom: 24px;
    }
`

export const Li = styled.li<{ theme?: Theme }>`
    display: flex;
    align-items: center;
`

export const LiItem = styled.span<{ theme?: Theme }>`
    color: ${props => props.theme?.text};
`

export const Icon = styled.div<{ theme?: Theme }>`
    margin-right: 10px;
`