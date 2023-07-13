import styled from 'styled-components'

export const BottomHeaderContainer = styled.div`
    padding: 32px 80px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    width: 100%
    align-items: center;
`

export const NavContainer = styled.div`
    display: flex;
    > div:not(:last-child) {
        padding-right: 24px;
    }
`

export const NavItem = styled.div`
    display: flex;
    cursor: pointer;
    caret-color: transparent;
`