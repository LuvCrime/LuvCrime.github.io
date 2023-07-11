import { SkypeSVG, WhatsAppSVG } from './icons';
import { useTranslation } from "react-i18next"
import { LanguageSelector } from './language-selector';
import { ThemeSwitcher } from './theme-switcher';

import { Span, TopHeaderBlock, ContactInfo, ThemeContainer, IconPadding, LanguageContainer } from './styles';

import { EMAIL, NUMBER } from '../../../utils/constants';

export const TopHeader = () => {
    const { t } = useTranslation();

    return (
        <TopHeaderBlock>
            <ContactInfo>{EMAIL}</ContactInfo>
            <ContactInfo>{NUMBER}</ContactInfo>
            <ContactInfo>
                <SkypeSVG />
                <IconPadding />
                <WhatsAppSVG />
            </ContactInfo>
            <LanguageContainer>
                <LanguageSelector />
            </LanguageContainer>
            <ThemeContainer>
                <Span>
                    {t('theme')}
                </Span>
                <ThemeSwitcher />
            </ThemeContainer>
            <ContactInfo $width="221px">{t('request-call').toUpperCase()}</ContactInfo>
        </TopHeaderBlock>
    )
}