import { SkypeSVG, WhatsAppSVG } from './icons';
import { useTranslation } from "react-i18next"
import { LanguageSelector } from './language-selector';
import { ThemeSwitcher } from './theme-switcher';

import { Span, TopHeaderBlock, ContactInfo, Theme } from './styles';

export const TopHeader = () => {
    const { t } = useTranslation();

    return (
        <TopHeaderBlock>
            <ContactInfo>mail@izitech.ru</ContactInfo>
            <ContactInfo>+2 (322) 22-22-22</ContactInfo>
            <ContactInfo><SkypeSVG /> <WhatsAppSVG /></ContactInfo>

            <ContactInfo><LanguageSelector /></ContactInfo>
            <Theme>
                <Span>
                    {t('theme')}
                </Span>
                <ThemeSwitcher />
            </Theme>
            <ContactInfo $width="133px">{t('request-call')}</ContactInfo>
        </TopHeaderBlock>
    )
}