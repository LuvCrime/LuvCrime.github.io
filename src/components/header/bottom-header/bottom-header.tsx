import { Logo } from './logo/logo'
import { BottomHeaderContainer, NavContainer, NavItem } from './styles'
import { useTranslation } from "react-i18next"

export const BottomHeader = () => {
    const { t } = useTranslation();

    return (
        <BottomHeaderContainer>
            <Logo />
            <NavContainer>
                <NavItem>{t('about-company').toUpperCase()}</NavItem>
                <NavItem>{t('services').toUpperCase()}</NavItem>
                <NavItem>{t('education').toUpperCase()}</NavItem>
                <NavItem>{t('outstaffing').toUpperCase()}</NavItem>
                <NavItem>{t('contacts').toUpperCase()}</NavItem>
            </NavContainer>
        </BottomHeaderContainer>
    )
}