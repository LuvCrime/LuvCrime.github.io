import { styled } from "styled-components"
import { Theme } from 'theme'

export const FooterContainer = styled.div<{ theme?: Theme }>`
    background-color:  ${props => props.theme?.bgFooter};
    padding: 109px 145px 85px 175px;
    box-sizing: border-box;
    display: flex;
    width: 100%;
    height: 100%;
    padding: 70px 80px;
    flex-direction: column;
`

export const LogoContainer = styled.div<{ theme?: Theme }>`
    margin-bottom: 25px;
`

export const ContentContainer = styled.div<{ theme?: Theme }>`
    display: flex; 
    justify-content: space-between;
`

export const NavContainer = styled.div`
    display: flex;
    flex-direction: column;
    > div:not(:last-child) {
        margin-bottom: 24px;
    }
`

export const NavItem = styled.div<{ theme?: Theme }>`
    color: #fff;
    display: flex;
    cursor: pointer;
    caret-color: transparent;
`

export const ContactsContainer = styled.div<{ theme?: Theme }>`
> div:not(:last-child) {
    margin-bottom: 24px;
}
`

export const PrivacyPolicy = styled.div<{ theme?: Theme }>`
    color: #fff;
    display: flex;
    caret-color: transparent;
    margin-bottom: 24px;
    font-weight: 700;
`

export const Date = styled.div<{ theme?: Theme }>`
    color: #fff;
    display: flex;
    caret-color: transparent;
`

export const ContactInfoContainer = styled.div<{ theme?: Theme }>`
    display: flex;
    box-sizing: border-box;
    color: #fff;
    caret-color: transparent;
`

export const IconPadding = styled.div`
    padding-right: 5px
`

export const PrivacyPolicyContainer = styled.div``