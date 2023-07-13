import { useTranslation } from 'react-i18next';
import { Logo } from './logo/logo';
import {
    AboutContainer,
    LogoContainer,
    TextContainer,
    Title,
    Ul,
    Li,
    LiPlus,
    AdditionallyContainer,
    Plus,
    Rectangle,
    LogoItem
} from './styles';

export const About = () => {
    const { t } = useTranslation();
    return (
        <AboutContainer>
            <TextContainer>
                <Title>{t('development')}</Title>
                <Ul>
                    <Li>{t('online-store')}</Li>
                    <Li>{t('corporate-website')}</Li>
                    <Li>{t('business-card-site')}</Li>
                    <Li>{t('service-portal')}</Li>
                    <AdditionallyContainer>
                        <Plus>+</Plus>
                        <div>
                            <LiPlus>{t('branding')}</LiPlus>
                            <LiPlus>{t('mobile-development')}</LiPlus>
                            <LiPlus>{t('courses')}</LiPlus>
                        </div>
                    </AdditionallyContainer>
                </Ul>
            </TextContainer>
            <LogoContainer>
                <LogoItem>
                    <Logo />
                </LogoItem>
                <Rectangle />
            </LogoContainer>
        </AboutContainer>
    )
}