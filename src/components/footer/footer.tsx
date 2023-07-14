import { useTranslation } from "react-i18next"
import {
    FooterContainer,
    LogoContainer,
    ContentContainer,
    NavContainer,
    NavItem,
    ContactsContainer,
    PrivacyPolicy,
    ContactInfoContainer,
    IconPadding,
    Date,
    PrivacyPolicyContainer
} from './styles';

import { Logo } from 'logo'
import { EMAIL, NUMBER } from 'utils/constants';
import { SkypeSVG, WhatsAppSVG } from 'icons';

export const Footer = () => {
    const { t } = useTranslation();

    return (
        <FooterContainer>
            <LogoContainer>
                <Logo position="footer" />
            </LogoContainer>

            <ContentContainer>

                <NavContainer>
                    <NavItem>{t('about-company').toUpperCase()}</NavItem>
                    <NavItem>{t('services').toUpperCase()}</NavItem>
                    <NavItem>{t('education').toUpperCase()}</NavItem>
                    <NavItem>{t('outstaffing').toUpperCase()}</NavItem>
                    <NavItem>{t('contacts').toUpperCase()}</NavItem>
                </NavContainer>

                <ContactsContainer>
                    <ContactInfoContainer>{EMAIL}</ContactInfoContainer>
                    <ContactInfoContainer>{NUMBER}</ContactInfoContainer>
                    <ContactInfoContainer>
                        <SkypeSVG />
                        <IconPadding />
                        <WhatsAppSVG />
                    </ContactInfoContainer>
                </ContactsContainer>

                <PrivacyPolicyContainer>
                    <PrivacyPolicy>{t('privacy-policy')}</PrivacyPolicy>
                    <Date>2008-2023</Date>
                </PrivacyPolicyContainer>

            </ContentContainer>

        </FooterContainer>
    )
}