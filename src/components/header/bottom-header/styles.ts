import styled from 'styled-components'
import { Theme } from 'theme'

export const BottomHeaderContainer = styled.div<{ theme?: Theme }>`
    background-color:  ${props => props.theme?.bg2};
    padding: 32px 80px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
`

export const NavContainer = styled.div`
    display: flex;
    > div:not(:last-child) {
        padding-right: 24px;
    }
`

export const NavItem = styled.div<{ theme?: Theme }>`
    color: ${props => props.theme?.text};
    display: flex;
    cursor: pointer;
    caret-color: transparent;
`