import { SkypeSVG, WhatsAppSVG } from './icons';
import { useTranslation } from "react-i18next"
import { LanguageSelector } from './language-selector';
import { ThemeSwitcher } from './theme-switcher';

import { Span, TopHeaderContainer, ContactInfoContainer, ThemeContainer, IconPadding, LanguageContainer } from './styles';

import { EMAIL, NUMBER } from '../../../utils/constants';

export const TopHeader = () => {
    const { t } = useTranslation();

    return (
        <TopHeaderContainer>
            <ContactInfoContainer>{EMAIL}</ContactInfoContainer>
            <ContactInfoContainer>{NUMBER}</ContactInfoContainer>
            <ContactInfoContainer>
                <SkypeSVG />
                <IconPadding />
                <WhatsAppSVG />
            </ContactInfoContainer>
            <LanguageContainer>
                <LanguageSelector />
            </LanguageContainer>
            <ThemeContainer>
                <Span>
                    {t('theme')}
                </Span>
                <ThemeSwitcher />
            </ThemeContainer>
            <ContactInfoContainer>{t('request-call').toUpperCase()}</ContactInfoContainer>
        </TopHeaderContainer>
    )
}